<template>
  <div class="container">
    <div id="countdown">
      <ul class="q-pl-none q-mt-none">
        <li style="margin-right: 5px">
          <span id="days"></span>{{ days }}<br /><small>días</small>
        </li>
        <li style="margin-right: 5px">
          <span id="hours"></span>{{ hours }}<br /><small>horas</small>
        </li>
        <li>
          <span id="minutes"></span>{{ minutes }}<br /><small>minutos</small>
        </li>
      </ul>
    </div>
    <div id="content" class="emoji">
      <span>🥳</span>
      <span>🎉</span>
      <span>🎂</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";

defineOptions({
  name: "DateCountdown",
});

const props = defineProps({
  targetDate: String,
});

const remainingTime = ref(calculateRemainingTime());

const days = computed(() =>
  Math.floor(remainingTime.value / (1000 * 60 * 60 * 24))
);
const hours = computed(() =>
  Math.floor((remainingTime.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
);
const minutes = computed(() =>
  Math.floor((remainingTime.value % (1000 * 60 * 60)) / (1000 * 60))
);

function calculateRemainingTime() {
  const target = new Date(props.targetDate).getTime();
  const now = new Date().getTime();
  return target - now;
}

function updateRemainingTime() {
  remainingTime.value = calculateRemainingTime();
}

let interval;
onMounted(() => {
  interval = setInterval(updateRemainingTime, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style>
.container {
  color: #333;
  margin: 0 auto;
  text-align: center;
}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

li {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 20px;
  text-transform: uppercase;
  background: #eaffff;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin: 20px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

small {
  font-size: 10px;
}

li span {
  display: block;
  font-size: 4.5rem;
}

.emoji {
  display: none;
  padding: 1rem;
}

.emoji span {
  font-size: 4rem;
  padding: 0 0.5rem;
}

@media all and (max-width: 768px) {
  li {
    font-size: 25px;
  }

  li span {
    font-size: calc(5.375rem * var(--smaller));
  }

  small {
    font-size: 10px;
  }
}
</style>
