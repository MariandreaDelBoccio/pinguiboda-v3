<template>
  <div id="home">
    <div>
      <img src="~assets/imgs/home.jpg" class="home-img" />
    </div>
    <div class="text-center">
      <h6 class="q-my-md">Carlos & Ma. Gabriela</h6>
      <p class="q-mb-none">18 de Octubre de 2024</p>
    </div>
    <div class="text-center">
      <date-countdown :target-date="targetDate" />
    </div>
  </div>
</template>

<script setup>
import DateCountdown from "../../components/Countdown/DateCountdown.vue";

defineOptions({
  name: "HomePage",
  components: { DateCountdown },
});

const targetDate = "2024-10-18T23:59:59";
</script>

<style lang="scss">
.home-img {
  width: 100vw !important;
  height: 70vh;
}
</style>
