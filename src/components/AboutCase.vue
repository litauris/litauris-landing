<template>
  <section>
    <div class="row wrapper">
      <div class="keys-wrapper">
        <p>Mobile Application</p>
        <div class="keys">
          <p>Niche: Cafes and Restaurants</p>
          <p>Development: 2 months</p>
        </div>
      </div>
      <div class="about">
        <h2>About the&nbsp;project</h2>
        <div>
          <h3>Challenge:</h3>
          <p>
            Our main goal was to promptly launch the restaurant application development project and
            increase customer flow during off-peak periods. We aimed to create an effective solution
            that would attract more customers during less active hours of restaurant operation,
            improving their overall experience and stimulating revenue growth for the establishment.
          </p>
          <h3>Approach:</h3>
          <p>
            We utilized cutting-edge technologies, including a NO-code platform, for the swift
            development of a mobile application for restaurants, focusing on intuitive design and
            functionality. Additionally, we implemented features to enhance customer engagement
            during idle periods. Our goal is to set a new standard in digital solutions for the
            hospitality industry.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutCase',
};
</script>
<style scoped>
section {
  background-color: var(--background-color-dark);
  font-family: var(--font-secondary);
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-block: 100px;
  color: var(--text-color-light);
}
.keys-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.keys {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}
.about {
  display: flex;
  flex-direction: column;
}
.about h2 {
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 25px;
}
.about h3 {
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}
.about p {
  font-size: 20px;
  line-height: 26px;
  padding-block: 20px;
  letter-spacing: -1px;
}

@media (width < 1024px) {
  .keys-wrapper p {
    border-bottom: 1px solid #222528;
    padding-block: 16px;
    line-height: 22px;
    letter-spacing: -1px;
  }
  h2 {
    margin-bottom: 28px;
  }
}

@media (width >= 1024px) {
  .keys-wrapper {
    align-items: center;
    border-bottom: 1px solid #222528;
    display: grid;
    padding-bottom: 60px;
    grid-template-columns: 1fr 1fr;
  }
  .keys {
    flex-direction: row;
  }
  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .about h2 {
    max-width: 370px;
    font-size: 50px;
    line-height: 60px;
  }
  .about h3 {
    font-size: 22px;
    line-height: 25px;
  }
  .about p {
    font-size: 28px;
    line-height: 36px;
  }
}
</style>
