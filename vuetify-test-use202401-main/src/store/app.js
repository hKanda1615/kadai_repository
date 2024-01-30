// Utilities
import { computed, onMounted, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useGeolocation, useNetwork } from '@vueuse/core'
import { useDisplay } from 'vuetify'

import { useBattery } from '@vueuse/core'

export const useAppStore = defineStore('app', () => {
  const { isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type } = useNetwork()
  const { coords, locatedAt, error, resume, pause } = useGeolocation()
  const { mobile, name, width, height } = useDisplay()
  const { charging, chargingTime, dischargingTime, level } = useBattery()
  const currnetType = ref(null)

  const items = reactive([
    {
        title: "出勤",
        description: "出勤状態",
        icon: "mdi-check",
        pcolor: "green-darken-1",
        ncolor: "grey",
        size: 'large',
        typeCode: '1',
        processed: true,
    },
    {
        title: "休憩",
        description: "休憩状態",
        icon: "mdi-star",
        pcolor: "green-darken-1",
        ncolor: "grey",
        size: 'x-large',
        typeCode: '3',
        processed: true,
    },
    {
        title: "終了",
        description: "休憩状態",
        icon: "mdi-check",
        pcolor: "green-darken-1",
        ncolor: "grey",
        size: 'large',
        typeCode: '4',
        processed: false,
    },
    {
        title: "退勤",
        description: "退勤済",
        icon: "mdi-check",
        pcolor: "green-darken-1",
        ncolor: "grey",
        size: 'large',
        typeCode: '2',
        processed: false,
    },
  ])
   
  const gpsMode = computed(()=>{
    if(error.value == null)
      return true;

     if( error.value === '')
      return  true;

     return false; 
  })
  
  onMounted(() => {
    resume()
    pause()
  })

  const NET_ICON = computed(() => {
    if( isOnline.value ) 
      return 'mdi-wifi-strength-4'

    return 'mdi-wifi-strength-off'
  })

  const GPS_ICON = computed(()=>{
    if(error.value == null || error.value == undefined || error.value  == '')
      return 'mdi-crosshairs-gps'

    return 'mdi-crosshairs-off'
  })

  const BATTERY_ICON = computed(()=>{
    if( level.value === 1) 
      return 'mdi-battery'

    let lv = Math.round(level.value*100)
    console.log(level.value, lv)
    return `mdi-battery-${lv}`
  })

  const setProcessType = (type) => {
    currnetType.value = type
    return items.filter(el => el.typeCode == type).processed = true
  }

  const getColor = (item) => {
    return item.processed?item.pcolor:item.ncolor
  }
  
  return {
    isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type,
    coords, locatedAt, error,
    mobile, name, width, height,gpsMode,
    charging, chargingTime, dischargingTime, level,
    resume, pause,
    NET_ICON, GPS_ICON, BATTERY_ICON,
    items,
    setProcessType, getColor,
  }
})
