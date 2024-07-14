<template>
  <section>
    <div class="row wrapper">
      <h2>Process with Us</h2>
      <div>
        <div class="line" v-for="section in sections" :key="section.title">
          <span>{{ section.letter }}</span>
          <h3>{{ section.title }}</h3>
          <p>{{ section.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProcessCase',
  data() {
    return {
      sections: [
        {
          title: 'Data Encryption',
          content: `Leveraging past transaction data and situational context, the AI anticipates your paymentneeds. It pre-populates payment fields for recurring payments or commonly visited merchants.`,
          letter: 'A',
        },
        {
          title: 'Data Encryption',
          content: `Leveraging past transaction data and situational context, the AI anticipates your paymentneeds. It pre-populates payment fields for recurring payments or commonly visited merchants.`,
          letter: 'B',
        },
        {
          title: 'Data Encryption',
          content: `Leveraging past transaction data and situational context, the AI anticipates your paymentneeds. It pre-populates payment fields for recurring payments or commonly visited merchants.`,
          letter: 'C',
        },
        {
          title: 'Data Encryption',
          content: `Leveraging past transaction data and situational context, the AI anticipates your paymentneeds. It pre-populates payment fields for recurring payments or commonly visited merchants.`,
          letter: 'D',
        },
      ],
    };
  },
};
</script>
<style scoped>
section {
  background-color: var(--background-color-dark);
  color: var(--text-color-light);
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-block: 100px;
}
h2 {
  font-size: 16px;
  font-weight: 400;
}
.line {
  align-items: center;
  border-bottom: 1px solid #222528cc;
  display: grid;
  gap: 16px 24px;
  grid-template-columns: auto 1fr;
  padding-block: 20px;
}
.line:first-child {
  padding-top: 0;
}
.line:last-child {
  border: none;
}
.line span {
  align-items: center;
  background-color: #28292e;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
}
.line h3 {
  font-size: 24px;
  letter-spacing: -1px;
}
.line p {
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 400;
  grid-column: 2;
  letter-spacing: -1px;
  line-height: 18px;
}
@media (width < 1024px) {
  .wrapper {
    gap: 32px;
    grid-template-columns: 1fr;
  }
}
@media (width >= 1024px) {
  h2 {
    font-size: 22px;
  }
  .line {
    gap: 20px 62px;
    padding-block: 32px;
  }
  .line p {
    font-size: 22px;
    line-height: 25px;
  }
  .line h3 {
    font-size: 30px;
  }
}
</style>
