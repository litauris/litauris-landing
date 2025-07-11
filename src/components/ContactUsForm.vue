<template>
  <section>
    <div class="wrapper row" v-if="!isSubmitted">
      <h2>Get a quick estimate for your project today</h2>
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
          <Textarea
            id="description"
            name="description"
            v-model="description"
            :invalid="v$.description.$error"
            rows="3"
          />
          <label for="description">
            Describe your project <span class="idea">(optional)</span>
          </label>
        </FloatLabel>

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

<script lang="ts">
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'

export default {
  name: 'ContactUsForm',
  emits: ['close'],
  components: {
    InputText,
    FloatLabel,
    Textarea,
    Toast,
  },
  data() {
    return {
      name: '',
      email: '',
      description: '',
      isLoading: false,
      isSubmitted: false,
    }
  },
  setup() {
    return {
      v$: useVuelidate(),
      toast$: useToast(),
    }
  },
  methods: {
    submit() {
      this.v$.$touch()

      if (this.v$.$error) return

      this.isLoading = true

      window.fbq?.('track', 'Lead')

      const payload: { [key: string]: string } = {
        name: this.name,
        email: this.email,
        description: this.description,
      }

      // @TODO: Move this request to a separate service
      fetch('https://sleekhose-us.backendless.app/api/services/Quote/addQuote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            this.isSubmitted = true
          } else {
            this.showErrorMessage()
          }
        })
        .catch((error) => {
          console.error(error)

          this.showErrorMessage()
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    showErrorMessage() {
      this.toast$.add({
        severity: 'error',
        summary: 'Error occurred',
        detail: 'Please, try again later',
        life: 3000,
      })
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
    description: {
      maxLength: maxLength(1000),
    },
  },
}
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
