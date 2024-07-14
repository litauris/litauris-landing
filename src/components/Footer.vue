<template>
  <footer>
    <div class="row wrapper">
      <h2>What are you waiting for?</h2>
      <h3>Get a stunning mobile app designed and online<span> within the next 10 days</span></h3>
      <button @click="visible = true">
        <span>Get an instant quote</span>
      </button>
    </div>
    <Dialog v-model:visible="visible" modal>
      <ContactUsForm @submitted="visible = false" />
    </Dialog>
  </footer>
</template>
<script>
import Dialog from 'primevue/dialog';
import ContactUsForm from './ContactUsForm.vue';
export default {
  name: 'Footer',
  components: {
    Dialog,
    ContactUsForm,
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>
<style scoped>
footer {
  border-bottom: 1px solid #f3f3f3;
}
.wrapper {
  display: flex;
  flex-direction: column;
  padding-block: 100px;
}
h2 {
  letter-spacing: -1px;
  color: #777777;
  font-size: 16px;
  font-weight: 500;
}
h3 {
  letter-spacing: -2px;
  font-weight: 500;
  font-size: 35px;
  width: 320px;
}
h3 span {
  color: #bab9be;
}
button {
  background-color: #1a4dd1;
  border: none;
}
button span {
  color: var(--heading-color-light);
}
@media (width < 1024px) {
  .wrapper {
    gap: 30px;
  }
  button {
    padding: 10px;
    border-radius: 60px;
  }
}
@media (width >= 1024px) {
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 60px;
    width: 600px;
  }
  button {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    position: relative;
  }
  button span {
    position: absolute;
    top: 16px;
    right: 30px;
  }
}
</style>
<style>
.p-dialog-mask {
  --p-mask-background: rgba(0, 0, 0, 0.6);
}
.p-dialog {
  --p-dialog-header-padding: 0;
}
.p-dialog .p-dialog-header {
  justify-content: flex-end;
}
.p-dialog .p-dialog-close-button {
  --p-button-text-secondary-active-background: none;
  --p-button-text-secondary-hover-background: none;
}
@media (width < 1024px) {
  div.p-dialog {
    max-height: initial;
    height: 100%;
    --p-dialog-border-radius: 0;
  }
  .p-dialog .p-dialog-close-button {
    margin-top: 12px;
    margin-right: 20px;
    font-weight: 400;
    --p-button-text-secondary-color: initial;
  }
  .p-dialog .p-dialog-close-button .p-button-icon {
    height: 24px;
    width: 24px;
  }
}
@media (width >= 1024px) {
  .p-dialog .p-dialog-header {
    position: relative;
  }
  .p-dialog .p-dialog-header .p-dialog-close-button {
    border-radius: 0;
    bottom: 4px;
    height: auto;
    padding: 0;
    position: absolute;
    right: 16px;
    width: auto;
    --p-button-text-secondary-color: white;
  }
  .p-dialog-close-button::after {
    content: 'Close';
  }
  .p-dialog-close-button .p-button-icon {
    display: none;
  }
}
</style>
