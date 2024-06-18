<template>
  <section>
    <div class="row wrapper">
      <p>Portfolio</p>
      <h3>
        We are a creative agency working with brands – building insightful strategy, creating unique
        designs and crafting experiences that bring positive change and value.
      </h3>
      <div class="slider">
        <div class="card">
          <img src="@/assets/content/slide-1.png" alt="Slide-1" />
          <div class="card-text">
            <p>Mobile Application</p>
            <span
              >Brand Strategy & Voice, Branding & Design, Digital & Web Content & Campaigns, Events
              & Activations</span
            >
          </div>
        </div>
        <div class="card">
          <img src="@/assets/content/slide-2.png" alt="Slide-2" />
          <div class="card-text">
            <p>Admin Panel</p>
            <span>Branding & Design</span>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/content/slide-3.png" alt="Slide-3" />
          <div class="card-text">
            <p>Mobile Application</p>
            <span>Branding & Design</span>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/content/slide-4.png" alt="Slide-4" />
          <div class="card-text">
            <p>Web Application</p>
            <span>Branding & Design</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Portfolio',
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
h3 {
  font-weight: 500;
  font-size: 24px;
  padding-block: 70px;
  width: 700px;
}
.slider {
  display: flex;

  gap: 36px;
}
.card img {
  height: 612px;
  width: 680px;
}
.card-text {
  display: flex;
  flex-direction: column;
  padding-block: 30px;
  gap: 8px;
}
.card-text p {
  color: #0a0a0a;
  font-weight: 500;
  font-size: 30px;
}
.card-text span {
  color: #b1b1b6;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
}
</style>
