<template>
  <section>
    <div class="wrapper row" v-if="!isSubmitted">
      <h2>Get a quick estimate for your project today</h2>
      <form
        class="form"
        :class="{ 'file-uploaded': fileName }"
        ref="form"
        novalidate
        @submit.prevent="submit"
      >
        <FloatLabel>
          <InputText id="name" name="name" v-model="name" :invalid="v$.name.$error" />
          <label for="name">Your name</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="email" name="email" v-model="email" :invalid="v$.email.$error" />
          <label for="email">Email</label>
        </FloatLabel>
        <FloatLabel>
          <Textarea
            id="description"
            name="description"
            v-model="projectDescription"
            :invalid="v$.projectDescription.$error"
            rows="3"
          />
          <label for="description">
            Describe your project <span class="idea">(optional)</span>
          </label>
        </FloatLabel>
        <FileUpload
          ref="fileInput"
          :maxFileSize="31457280"
          :showUploadButton="false"
          :showCancelButton="false"
          chooseLabel="Attach File"
          :customUpload="true"
          :fileLimit="1"
          @select="uploadFile"
          @remove="removeFile"
        >
          <template #chooseicon><img src="@/assets/icons/plus-light.svg" alt="Plus" /></template>
          <template #empty></template>
        </FileUpload>

        <p>By clicking the Submit button you agree to our <span>Privacy Policy</span> terms</p>
        <button type="submit" :disabled="isLoading"><span>Submit</span></button>
      </form>
    </div>
    <div class="wrapper row success" v-else>
      <h2>Thanks for reaching out! <span class="light">We'll be in touch soon!</span></h2>
      <div>
        <p>Your message has been sent successfully.</p>
        <p>We typically reply within 24 hours!</p>
      </div>
      <button @click="$emit('close')">OK</button>
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
import { required, email, maxLength } from '@vuelidate/validators';
import { useToast } from 'primevue/usetoast';

export default {
  name: 'ContactUsForm',
  emits: ['close'],
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
      projectDescription: '',
      fileName: null,
      isLoading: false,
      isSubmitted: false,
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

      window.fbq('track', 'Lead');

      const payload = {
        name: this.name,
        email: this.email,
        projectDescription: this.projectDescription,
      };

      if (this.fileName) {
        payload.fileName = this.fileName;
      }

      // @TODO: Move this request to a separate service
      fetch(
        'https://api.backendless.com/EB840B05-165A-4135-8034-86A1DAFD313A/D7E7F890-1BF4-434C-9299-C6289791502D/services/LitaurisCMS/postContactForm',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      )
        .then((response) => {
          if (response.ok) {
            this.isSubmitted = true;
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
    uploadFile(event) {
      const file = event.files[0];
      const timestamp = Math.floor(Date.now() / 1000);
      const dotIndex = file.name.lastIndexOf('.');
      const name = file.name.substring(0, dotIndex);
      const extension = file.name.substring(dotIndex);
      const fileName = `${name}_${timestamp}${extension}`;

      this.fileName = fileName;

      const formData = new FormData();

      formData.append('file', file);

      // @TODO: Move this request to a separate service
      fetch(
        'https://backendlessappcontent.com/EB840B05-165A-4135-8034-86A1DAFD313A/D7E7F890-1BF4-434C-9299-C6289791502D/files/leads/files/' +
          fileName,
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (!response.ok) {
            this.handleFileUploadError();
          }
        })
        .catch((error) => {
          console.error(error);

          this.handleFileUploadError();
        });
    },
    removeFile() {
      this.fileName = null;
    },
    showErrorMessage() {
      this.toast$.add({
        severity: 'error',
        summary: 'Error occurred',
        detail: 'Please, try again later',
        life: 3000,
      });
    },
    handleFileUploadError() {
      this.$refs.fileInput.$el.querySelector('.p-fileupload-file-remove-button').click();

      this.toast$.add({
        severity: 'error',
        summary: 'Something went wrong',
        detail: 'Please, try again or upload a different file',
        life: 5000,
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
    projectDescription: {
      maxLength: maxLength(1000),
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  padding: 32px 12px 12px;
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
.form input.p-invalid,
.form textarea.p-invalid {
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
  padding: 29px 0 28px;
}
.file-uploaded :deep(.p-fileupload-header) {
  display: none;
}
:deep(.p-fileupload-file-thumbnail) {
  height: 44px;
  position: relative;
  width: 44px;
}
:deep(.p-fileupload-file-thumbnail)::before {
  background-color: #ffffff;
  background-image: url('@/assets/icons/file.png');
  background-size: contain;
  content: '';
  inset: 0;
  position: absolute;
  z-index: 1;
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
:deep(.p-fileupload-content .p-progressbar) {
  display: none;
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

.success h2 {
  grid-column: span 2;
  border-bottom: 1px solid #f3f3f3;
  padding-bottom: 90px;
}
.success h2 .light {
  display: block;
  color: #bab9be;
}
.success button {
  background: none;
  border-radius: 24px;
  padding: 8px 20px;
  border: 1px solid #bbbcbd;
}

@media (width < 1024px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-inline: 0;
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
  .success h2 {
    padding-bottom: 40px;
  }
}
</style>
