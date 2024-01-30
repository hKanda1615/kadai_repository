<script setup>
import { useAppStore } from '@/store/app'
const appStatus = useAppStore();
console.log(appStatus.items)

</script>

<template>
    <v-timeline truncate-line="both" direction="horizontal" density="compact" class="mb-2">
        <v-timeline-item v-for="(item, i) in appStatus.items" 
            :key="i" :icon="item.icon" :dot-color="appStatus.getColor(item)" :size="item.size">
            <template v-slot:icon>
                <v-tooltip
                  activator="parent"
                  location="start"
                >
                {{ item.description }}
              </v-tooltip>
                <span class="text-overline">{{item.title}}</span>
            </template>
        </v-timeline-item>
    </v-timeline>
</template>

