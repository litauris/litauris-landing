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
          <AccordionHeader class="accordion-header">
            <span class="title">{{ question.title }}</span>
            <template v-slot:toggleicon="{ active }">
              <span class="icon" :class="{ active: active }">{{ active ? '–' : '+' }}</span>
            </template>
          </AccordionHeader>
          <AccordionContent class="accordion-content">
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
          title: 'What is No Code',
          content:
            'User research, CJMs, prototyping, value proposition validation, design iterations, design systems and UI kits.',
        },
        {
          title: 'What is the price',
          content: 'TBD',
        },
        {
          title: 'Which tools do you use',
          content: 'TBD',
        },
        {
          title: 'Can I edit the project myself',
          content: 'TBD',
        },
        {
          title: 'What are the risks',
          content: 'TBD',
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
.accordion-panel {
  border-top: 1px solid #222528;
}
.accordion-header {
  align-items: center;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  padding-block: 16px;
  width: 100%;
}
.title {
  font-size: 24px;
  font-weight: 500;
  text-align: left;
}
.icon {
  background-color: #28292d;
  border-radius: 50%;
  color: #dfd5d5;
  font-weight: 500;
  line-height: 28px;
  height: 30px;
  transition: background-color 0.3s ease-in-out;
  width: 30px;
}
.icon.active {
  background-color: #dfd5d5;
  color: #28292d;
}
.accordion-content {
  color: var(--text-color-soft);
  display: grid !important;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s ease-in-out;
}
.accordion-content::v-deep [data-pc-section='content'] {
  overflow: hidden;
}
.accordion-content[data-p-active='true'] {
  grid-template-rows: 1fr;
  padding-bottom: 16px;
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
  .accordion-panel:first-of-type {
    border-top: none;
  }
  .title {
    font-size: 28px;
  }
  img {
    align-self: flex-end;
    grid-area: c;
  }
}
</style>
