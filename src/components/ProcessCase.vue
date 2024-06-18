<template>
  <section>
    <div class="row wrapper">
      <p>Process with Us</p>
      <div>
        <div class="line">
          <span>A</span>
          <div class="colomn">
            <h3>Data Encryption</h3>
            <p>
              Leveraging past transaction data and situational context, the AI anticipates your
              paymentneeds. It pre-populates payment fields for recurring payments or commonly
              visited merchants.
            </p>
          </div>
        </div>
        <div class="line">
          <span>B</span>
          <div class="colomn">
            <h3>Data Encryption</h3>
            <p>
              Leveraging past transaction data and situational context, the AI anticipates your
              paymentneeds. It pre-populates payment fields for recurring payments or commonly
              visited merchants.
            </p>
          </div>
        </div>
        <div class="line">
          <span>C</span>
          <div class="colomn">
            <h3>Data Encryption</h3>
            <p>
              Leveraging past transaction data and situational context, the AI anticipates your
              paymentneeds. It pre-populates payment fields for recurring payments or commonly
              visited merchants.
            </p>
          </div>
        </div>
        <div class="line">
          <span>D</span>
          <div class="colomn">
            <h3>Data Encryption</h3>
            <p>
              Leveraging past transaction data and situational context, the AI anticipates your
              paymentneeds. It pre-populates payment fields for recurring payments or commonly
              visited merchants.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProcessCase',
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
.line {
  border-bottom: 1px solid #222528cc;
  display: grid;
  grid-template-columns: 1fr 6fr;
  padding-block: 20px;
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
.colomn {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
