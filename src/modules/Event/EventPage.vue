<template>
  <div id="event">
    <div class="text-center">
      <q-img
        src="~assets/imgs/event-plant.png"
        width="50px"
        height="50px"
        class="plant-img q-mt-lg"
      />
    </div>
    <div class="text-center q-mb-lg text-blue-grey-9">
      <h5 class="text-light-green-6 q-mt-none q-mb-lg">LUGAR Y FECHA</h5>
      <h6 class="q-mt-xs q-mb-lg">CEREMONIA</h6>
      <p>Nombre de la iglesia</p>
      <h6 class="q-mb-none q-mt-md">14 DE OCTUBRE DE 2024</h6>
      <h6 class="q-mt-sm q-mb-md">HORA: 12:00</h6>
      <p class="q-mb-md q-mt-xs" ref="churchAddress">
        Dirección de la ceremonia aquí
      </p>
      <q-btn @click="copyChurchAddress" class="bg-light-green-6 text-white" flat
        >Dirección</q-btn
      >
    </div>
    <q-separator />
    <div class="text-center text-blue-grey-9 q-mb-xl">
      <h5 class="q-mt-lg q-mb-lg">CÓCTEL</h5>
      <p>Nombre del lugar de la fiesta</p>
      <h6 class="q-mt-sm q-mb-md">HORA: 14:00</h6>
      <p class="q-mb-md" ref="partyAddress">Dirección de la fiesta aquí</p>
      <q-btn @click="copyPartyAddress" class="bg-light-green-6 text-white" flat
        >Dirección</q-btn
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { copyText } from "vue3-clipboard";

defineOptions({
  name: "EventPage",
});

const churchAddress = ref(null);
const partyAddress = ref(null);

const copyChurchAddress = () => {
  const text = churchAddress.value.innerHTML;
  copyText(text, undefined, (error, _event) => {
    if (error) {
      alert("No se puede copiar la dirección");
    } else {
      alert("Dirección de ceremonia copiada en portapapeles");
    }
  });
};

const copyPartyAddress = () => {
  const text = partyAddress.value.innerHTML;
  copyText(text, undefined, (error, _event) => {
    if (error) {
      alert("No se puede copiar la dirección");
    } else {
      alert("Dirección de fiesta copiada en portapapeles");
    }
  });
};
</script>

<style lang="scss">
.plant-img {
  transform: rotate(260deg);
}

#event {
  height: 100vh;
  margin-bottom: 50px;
}
</style>
