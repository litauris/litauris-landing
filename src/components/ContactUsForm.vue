<template>
  <section>
    <div class="wrapper row">
      <h2>Have a project in mind?</h2>
      <form class="form" ref="form" novalidate @submit.prevent="submit">
        <FloatLabel>
          <InputText id="name" name="name" v-model="name" :invalid="v$.name.$error" />
          <label for="name">Your name</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="email" name="email" v-model="email" :invalid="v$.email.$error" />
          <label for="email">Email</label>
        </FloatLabel>
        <FloatLabel>
          <Textarea id="message" name="message" v-model="message" rows="3" />
          <label for="message">Describe your project <span class="idea">(optional)</span></label>
        </FloatLabel>
        <FileUpload
          name="file"
          :maxFileSize="4194304"
          :auto="true"
          :showUploadButton="false"
          :showCancelButton="false"
          chooseLabel="Attach Files"
        >
          <template #chooseicon><img src="@/assets/icons/plus-light.svg" alt="Plus" /></template>
          <template #empty></template>
        </FileUpload>

        <p>By clicking the Submit button you agree to our <span>Privacy Policy</span> terms</p>
        <button type="submit" :disabled="isLoading"><span>Submit</span></button>
      </form>
    </div>
    <Toast position="top-center" />
  </section>
</template>
<script>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useToast } from 'primevue/usetoast';

export default {
  name: 'ContactUsForm',
  emits: ['submitted'],
  components: {
    InputText,
    FloatLabel,
    Textarea,
    FileUpload,
    Toast,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isLoading: false,
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
      toast$: useToast(),
    };
  },
  methods: {
    submit() {
      this.v$.$touch();

      if (this.v$.$error) return;

      this.isLoading = true;

      const formData = new FormData(this.$refs.form);

      fetch('/sendmail.php', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            this.toast$.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Your message sent',
              life: 3000,
            });

            this.$emit('submitted');
          } else {
            this.showErrorMessage();
          }
        })
        .catch((error) => {
          console.error(error);

          this.showErrorMessage();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    showErrorMessage() {
      this.toast$.add({
        severity: 'error',
        summary: 'Error occurred',
        detail: 'Please, try again later',
        life: 3000,
      });
    },
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  margin-top: 32px;
}
h2 {
  font-weight: 500;
  font-size: 56px;
  line-height: 60px;
  letter-spacing: -1px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 28px;
  color: #191b1d;
}
.form input {
  border: none;
  border-bottom: 1px solid #e3e3e4;
  padding-block: 20px;
  font-size: 20px;
  font-family: var(--font-secondary);
  width: 100%;
  --p-inputtext-color: #191b1d;
  --p-inputtext-focus-border-color: #e3e3e4;
  --p-inputtext-border-radius: 0;
  --p-inputtext-shadow: none;
}
.form input.p-invalid {
  border-color: #ff0000;
}
.form label {
  font-size: 20px;
  left: 0;
  --p-floatlabel-color: #191b1d;
}
/* Textarea */
.form textarea {
  border: none;
  border-bottom: 1px solid #e3e3e4;
  resize: none;
  width: 100%;
  --p-textarea-shadow: none;
  --p-textarea-border-radius: 0;
  --p-textarea-focus-border-color: #e3e3e4;
}
.idea {
  color: #8b8c8d;
}

/* FileUploader */
:deep(.p-fileupload) {
  border: none;
  color: #191b1d;
  font-family: var(--font-secondary);
  font-size: 18px;

  letter-spacing: -1px;
}
:deep(.p-fileupload-header) {
  padding-inline: 0;
}
:deep(.p-badge) {
  display: none;
}
:deep(.p-button) {
  border: none;
  letter-spacing: -1px;
  --p-button-primary-background: none;
  --p-button-primary-color: var(--text-color);
  --p-button-primary-hover-color: var(--text-color);
  --p-button-primary-hover-background: none;
  --p-button-primary-hover-border-color: none;
  --p-button-primary-active-color: var(--text-color);
  --p-button-primary-active-background: none;
  --p-button-primary-active-border-color: none;
  --p-button-padding-y: 0;
  --p-button-padding-x: 0;
  --p-button-label-font-weight: 400;
  --p-button-text-danger-color: var(--text-color);
  --p-button-text-danger-hover-background: none;
}
:deep(.p-fileupload-content) {
  padding: 0;
}

.form p {
  font-size: 14px;
  font-family: var(--font-secondary);
  letter-spacing: -1px;
  color: #8c8d8e;
  max-width: 50%;
}
.form p span {
  color: #191b1d;
}
.form button {
  background-color: #191b1d;
  border: none;
  border-radius: 50%;
  display: flex;
  position: relative;
  left: 80%;
  height: 120px;
  width: 120px;
}
.form button:disabled {
  background-color: #8c8d8e;
  pointer-events: none;
}
.form button span {
  position: absolute;
  top: 40px;
  right: 58px;
  color: #ffffff;
  font-family: var(--font-secondary);
  letter-spacing: -1px;
}
@media (width< 1024px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  h2 {
    font-size: 36px;
  }
  .form input {
    font-size: 16px;
  }
  .form label {
    font-size: 14px;
  }
  .form p {
    font-size: 14px;
    max-width: 70%;
  }
  .form button {
    height: 80px;
    width: 80px;
    left: 60%;
  }
  .form button span {
    top: 20px;
    right: 18px;
  }
}
</style>
