<template>
  <section>
    <div class="row wrapper">
      <h2>Portfolio</h2>
      <h3>
        We are a creative agency working with brands – building insightful strategy, creating unique
        designs and crafting experiences that bring positive change and value.
      </h3>
      <div class="slider">
        <div class="card">
          <img src="@/assets/content/slide-1.jpg" alt="Mobile Application" />
          <div class="card-text">
            <p>Mobile Application</p>
            <span
              >Brand Strategy & Voice, Branding & Design, Digital & Web Content & Campaigns, Events
              & Activations</span
            >
          </div>
        </div>
        <div class="card">
          <img src="@/assets/content/slide-2.jpg" alt="Admin Panel" />
          <div class="card-text">
            <p>Admin Panel</p>
            <span>Branding & Design</span>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/content/slide-3.jpg" alt="Mobile Application" />
          <div class="card-text">
            <p>Mobile Application</p>
            <span>Branding & Design</span>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/content/slide-4.jpg" alt="Web Application" />
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
h2 {
  font-size: 1rem;
  font-weight: 400;
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