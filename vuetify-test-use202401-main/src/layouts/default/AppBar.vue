<template>
  <v-app-bar color="green-accent-4" class="backgroundDiv"
    image="https://picsum.photos/1920/1080?random"
  >
    <v-app-bar-title
      class="test"
    >
      <v-icon icon="mdi-update" class="contents"/>
      <span class="contents">Janga Surupas 【勤怠打刻】</span>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { onMounted } from 'vue'

function _Swap() {
  document.querySelector(".backgroundDiv").style.background = (document.querySelector(".backgroundDiv").style.background == "rgb(0, 0, 0)") ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";
}

onMounted(() => {
  _Swap();
})
</script>

<style scoped>
.backgroundDiv {
  background: #FFF;
}

.test {
  mix-blend-mode: difference;
}

.contents {
  color: #FFF;
}
</style>
