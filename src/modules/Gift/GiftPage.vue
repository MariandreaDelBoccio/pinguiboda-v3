<template>
  <div id="gift">
    <div class="text-center">
      <h6 class="gift-title">hola</h6>
      <label>
        <input type="checkbox" />
        <div class="flip-card">
          <div class="front">
            <div class="column no-wrap justify-start items-center">
              <q-img
                src="~/assets/imgs/shopping-bag.png"
                width="70px"
                fit="contain"
              />
              <h6 class="card-title text-uppercase">mesa de regalos</h6>
            </div>
          </div>
          <div class="back column no-wrap justify-start items-center">
            <h6 class="q-pt-xs">
              Banco <br />
              Nombre de la cuenta <br />
              Número de la cuenta <br />
              Clave
            </h6>
          </div>
        </div>
      </label>
    </div>
    <div>
      <q-img class="final-img text-center" src="~/assets/imgs/final.jpg">
        <h4 class="final-title">#🐧boda</h4>
      </q-img>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "GiftPage",
});
</script>

<style lang="scss" scoped>
#gift {
  height: 100vh;
  margin-top: 120px;
}
.shopping-bag-img {
  height: 100px;
}
.shopping-bag-img > .q-img__container > img {
  width: 80px;
  height: 80px;
}

.gift-title {
  margin-bottom: 130px;
}

label {
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  display: block;
  width: 300px;
  height: 200px;
  position: relative;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.flip-card {
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 600ms;
  transition: all 600ms;
  z-index: 20;
  box-shadow: 0 20px 20px rgba(50, 50, 50, 0.2);
}

.flip-card div {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fff;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 2px;
}

.flip-card .back {
  color: #777777;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  box-shadow: 0 20px 20px rgba(50, 50, 50, 0.2);
}

input {
  display: none;
}

:checked + .flip-card {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  box-shadow: 0 20px 20px rgba(255, 255, 255, 0.2);
}

label:hover :checked + .flip-card {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  box-shadow: 0 20px 20px rgba(255, 255, 255, 0.2);
}

.card-title {
  margin-top: 145px;
}

.final-img {
  position: relative;
  text-align: center;
  color: white;
  height: 50vh !important;
}

.final-title {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
