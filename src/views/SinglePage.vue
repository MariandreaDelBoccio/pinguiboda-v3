<template>
  <div class="bg-app">
    <q-slide-transition>
      <div v-if="showWelcomePage">
        <welcome-page @turn="homeToggle" />
      </div>
    </q-slide-transition>
    <div v-if="!showWelcomePage">
      <q-layout view="lHh lpr lFf">
        <the-header />
        <home-page />
        <event-page />
        <dressup-page />
        <form-page />
        <gift-page />
      </q-layout>
    </div>
  </div>
</template>

<script setup>
import HomePage from "../modules/Home/HomePage.vue";
import EventPage from "../modules/Event/EventPage.vue";
import DressupPage from "src/modules/DressUp/DressupPage.vue";
import FormPage from "src/modules/Form/FormPage.vue";
import TheHeader from "src/components/Header/TheHeader.vue";
import WelcomePage from "src/modules/Welcome/WelcomePage.vue";
import GiftPage from "src/modules/Gift/GiftPage.vue";
import { ref } from "vue";

defineOptions({
  name: "single-page",
  components: {
    TheHeader,
    HomePage,
    EventPage,
    DressupPage,
    FormPage,
    WelcomePage,
    GiftPage,
  },
});

const showWelcomePage = ref(true);

function homeToggle() {
  showWelcomePage.value === true
    ? (showWelcomePage.value = false)
    : (showWelcomePage.value = true);
}
</script>
