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
        <h2>About the project</h2>
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
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-block: 100px;
  color: var(--text-color-light);
}
.keys-wrapper {
  align-items: center;
  border-bottom: 1px solid #222528;
  display: grid;
  padding-bottom: 60px;
  grid-template-columns: 1fr 1fr;
}
.keys {
  display: flex;
  justify-content: space-between;
}
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.about h3 {
  font-family: var(--font-secondary);
  font-weight: 400;
  font-size: 22px;
}
.about p {
  font-size: 28px;
  padding-block: 20px;
}
</style>
