<template>
  <q-header class="bg-white">
    <q-tabs class="tabs q-mx-xl">
      <q-tab v-for="(link, key) of headerLinks" :key="key" class="q-px-none">
        <router-link
          :to="{ name: link.name, hash: link.hash }"
          class="link-tab"
        >
          <q-tab :name="link.name" :label="link.label" />
        </router-link>
      </q-tab>
    </q-tabs>
  </q-header>
</template>

<script setup>
defineOptions({
  name: "MainLayout",
});

const headerLinks = [
  {
    name: "event",
    hash: "#event",
    label: "Evento",
  },
  {
    name: "dress-up",
    hash: "#dressup",
    label: "Vestimenta",
  },
  {
    name: "form",
    hash: "#form",
    label: "RSVP",
  },
  {
    name: "gift",
    hash: "#gift",
    label: "Realo",
  },
];
</script>

<style lang="scss">
.link-tab {
  color: black;
  text-decoration: none;
}

.tabs
  > div
  > .q-tab
  > .q-tab__content
  > .router-link-active
  > div
  > .q-tab__indicator {
  opacity: 0 !important;
}
</style>
