<template>
  <div class="welcome-img">
    <q-img src="~/assets/imgs/welcome.jpg">
      <div class="absolute-bottom text-subtitle2 text-center">
        <h4 class="q-mb-md">¡Nos casamos!</h4>
        <q-btn
          @click="toggleVisible"
          color="white"
          text-color="black"
          label="Abrir"
          class="q-mb-xl"
        />
      </div>
    </q-img>
  </div>
</template>

<script setup>
defineOptions({
  name: "WelcomePage",
});

const emit = defineEmits(["turn"]);

const toggleVisible = () => {
  emit("turn");
};
</script>

<style lang="scss">
.home-backgroung {
  background-image: url("src/assets/imgs/mountain.webp");
  background-size: cover;
  height: 100vh;
  opacity: 0.7;
  justify-content: center;
}

.welcome-img,
.welcome-img > .q-img {
  height: 100vh !important;
}

.welcome-cta {
  background: none !important;
}
</style>
