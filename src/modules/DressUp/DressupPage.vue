<template>
  <div id="dressup">
    <br />
    <br />
    <div class="column q-mt-xl">
      <div
        class="fit row wrap justify-center items-center content-center q-mb-sm"
      >
        <q-img class="col-5 q-mr-sm" src="~assets/imgs/dress1.jpg" />
        <q-img class="col-5" src="~assets/imgs/dress2.jpg" />
      </div>
      <div
        class="fit row wrap justify-center items-center content-center q-mb-lg"
      >
        <q-img class="col-5 q-mr-sm" src="~assets/imgs/dress3.jpg" />
        <q-img class="col-5" src="~assets/imgs/dress4.jpg" />
      </div>
    </div>
    <div class="text-center text-blue-grey-9">
      <h5 class="text-light-green-6 q-mb-xs q-mt-none">Código de vestimenta</h5>
      <p class="q-mb-none q-mt-lg">Formal nocturno</p>
      <p>Zapatos cómodos</p>
      <p class="q-px-xl q-mt-xs">
        Reservamos el color azul para el novio y el color blanco para la novia
      </p>
    </div>
    <div class="text-center q-mb-xl q-mt-xs">
      <q-img src="~/assets/imgs/dressup.png" fit="contain" />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "DressupPage",
});
</script>

<style lang="scss">
.q-img {
  height: 150px !important;
}

#dressup {
  height: 100vh;
}
</style>
