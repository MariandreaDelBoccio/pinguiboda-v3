<template>
  <div id="form">
    <br />
    <br />
    <div class="text-center text-blue-grey-9 text-uppercase q-mt-xl">
      <q-img src="~assets/imgs/heart.png" width="150px" height="30px" />
      <h4 class="q-mx-md q-my-xs">Confirma tu asistencia</h4>
      <h6 class="q-mt-none q-mb-xs">* NO NIÑOS *</h6>
    </div>
    <div>
      <q-form
        action="https://formsubmit.co/maridelboccio@gmail.com"
        method="POST"
        class="q-px-xl q-py-xs"
      >
        <q-input
          filled
          v-model="text"
          label="Nombre"
          class="q-py-xs"
          name="nombre"
        />
        <q-select
          filled
          v-model="model"
          :options="['sí', 'no']"
          class="q-py-xs"
          label="Confirmación"
          name="confirmacion"
        />
        <q-select
          filled
          v-model="pasesModel"
          :options="invitesNumber"
          class="q-pt-xs q-pb-md"
          label="Pases"
          hint="El número de pases es el máximo permitido"
          name="pases"
        />
        <q-input
          v-model="message"
          filled
          type="textarea"
          class="q-my-md"
          name="mensaje"
        />
        <div class="text-right">
          <q-btn
            color="secondary"
            label="Enviar"
            type="submit"
            @click="handleSubmit"
          />
        </div>
        <input
          type="hidden"
          name="_next"
          :value="`http://localhost:9000/thanks`"
        />
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { keys } from "./routerKeys.js";
import { db } from "../../firebase.js";
import { collection, addDoc } from "firebase/firestore";

defineOptions({
  name: "FormPage",
});

const route = useRoute();

const invites = reactive({
  number: [],
});

const routeParams = computed(() => {
  return route.params.invites;
});

const inviteKey = keys.find((key) => {
  return key.key === routeParams.value;
});

const invitesLimit = () => {
  for (let i = 0; i < Number(inviteKey.value); i++) {
    invites.number.push(i + 1);
  }
};

const text = ref("");
const message = ref("");
const model = ref(null);
const invitesNumber = invites.number;
const pasesModel = ref([]);

const handleSubmit = async () => {
  try {
    await addDoc(collection(db, "invitations"), {
      name: text.value,
      confirmation: model.value,
      invites: pasesModel.value,
      message: message.value,
    });
    alert("Data saved successfully!");
  } catch (error) {
    console.error("Error saving document: ", error);
  }
};

onMounted(() => {
  invitesLimit();
});
</script>

<style lang="scss">
#form {
  height: 100vh;
}
</style>
