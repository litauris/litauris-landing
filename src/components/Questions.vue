<template>
  <section>
    <div class="row wrapper">
      <h2>FAQ</h2>
      <Accordion class="accordion">
        <AccordionPanel
          class="accordion-panel"
          v-for="(question, index) in questions"
          :key="question.title"
          :value="String(index)"
        >
          <AccordionHeader>
            <span class="accordion-header-title">{{ question.title }}</span>
            <template v-slot:toggleicon="{ active }">
              <span class="accordion-header-icon" :class="{ active: active }">{{
                active ? '–' : '+'
              }}</span>
            </template>
          </AccordionHeader>
          <AccordionContent>
            <p>{{ question.content }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <img src="@/assets/content/square-dark.svg" alt="Square" />
    </div>
  </section>
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

export default {
  name: 'Questions',
  components: {
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
  },
  data() {
    return {
      questions: [
        {
          title: 'What is Low Code',
          content:
            'Low Code is a way to build apps and websites using visual tools with minimal coding. It combines the ease of No Code with the flexibility of custom code, allowing for faster development while still enabling advanced features when needed.',
        },
        {
          title: 'What is the price',
          content: 'Prices vary depending on the project scope. We offer cost-effective solutions, always lower than traditional development, as we use efficient Low Code platforms.',
        },
        {
          title: 'Which tools do you use',
          content: 'We use popular No Code tools like Bubble, Webflow, Adalo, Glide, Appery, Backendless which allow us to build powerful apps and websites with ease and speed.',
        },
        {
          title: 'Can I edit the project myself',
          content: 'Yes, we provide you with easy-to-use tools and training, so you can make changes and updates to your project whenever you need.',
        },
        {
          title: 'What are the risks',
          content: 'The main risk is that No Code platforms can have limitations in custom functionality. However, we choose the best tools for your needs, and we can always adjust as your business grows.',
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  background-color: var(--background-color-dark);
}
.wrapper {
  color: var(--text-color-light);
  display: grid;

  padding-block: 100px;
}
h2 {
  font-size: 16px;
  font-weight: 400;
}
.accordion {
  --p-accordion-panel-border-color: #222528;
  --p-accordion-panel-border-width: 1px 0 0 0;

  --p-accordion-header-background: none;
  --p-accordion-header-color: var(--text-color-light);
  --p-accordion-header-hover-background: none;
  --p-accordion-header-hover-color: var(--text-color-light);
  --p-accordion-header-active-background: none;
  --p-accordion-header-active-color: var(--text-color-light);
  --p-accordion-header-active-hover-background: none;
  --p-accordion-header-active-hover-color: var(--text-color-light);
  --p-accordion-header-padding: 16px 0;

  --p-accordion-content-padding: 0 0 16px;
  --p-accordion-content-color: var(--text-color-light);
}
.accordion-panel:first-of-type {
  --p-accordion-panel-border-width: 0;
}
.accordion-header-title {
  font-size: 24px;
  font-weight: 500;
}
.accordion-header-icon {
  background-color: #28292d;
  border-radius: 50%;
  color: #dfd5d5;
  font-weight: 500;
  line-height: 28px;
  height: 30px;
  text-align: center;
  transition: background-color 0.3s ease-in-out;
  width: 30px;
}
.accordion-header-icon.active {
  background-color: #dfd5d5;
  color: #28292d;
}
img {
  max-width: 100%;
}

@media (width < 1024px) {
  .accordion {
    margin-block: 16px 48px;
  }
}

@media (width >= 1024px) {
  .wrapper {
    column-gap: 32px;
    grid-template-areas:
      'a b'
      'c b';
    grid-template-columns: 1fr 1fr;
    min-height: 640px;
  }
  h2 {
    grid-area: a;
    padding-top: 16px;
  }
  .accordion {
    grid-area: b;
  }
  .accordion-header-title {
    font-size: 28px;
  }
  img {
    align-self: flex-end;
    grid-area: c;
  }
}
</style>
