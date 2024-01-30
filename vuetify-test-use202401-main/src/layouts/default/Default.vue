<template>
  <v-app>
    <v-system-bar color="primary">
      <v-icon :icon="appStatus.NET_ICON" class="ms-2"></v-icon>
      <v-icon :icon="appStatus.BATTERY_ICON" class="ms-2"></v-icon>
      <v-icon :icon="appStatus.GPS_ICON" class="ms-2"/>
      <span class="ms-2">{{ currentTime.toLocaleDateString() }} {{ currentTime.toLocaleTimeString() }}</span>
    </v-system-bar>
    <default-bar />
    <default-view />
  </v-app>
</template>

<script setup>
import { useCurrentTime } from "@/composables/useCurrentTime";
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import { useAppStore } from '@/store/app'

const { currentTime } = useCurrentTime();
const appStatus = useAppStore();
console.log(appStatus.isOnline, appStatus.level, appStatus.type)

</script>
