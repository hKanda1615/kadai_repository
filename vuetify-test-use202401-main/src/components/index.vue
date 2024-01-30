<script setup>
import { ref, watch, reactive} from 'vue'
// import DigitalClock from '@/components/DititalClock.vue'
import * as dayjs from 'dayjs'
import { useAppStore } from '@/store/app'
// import { useAttendanceStore } from '@/store/AttendanceStore'
import TimeLine from '@/components/TimeLine.vue'

const appStore = useAppStore()
// const attendanceStore = useAttendanceStore()

console.log("appStore.gpsMode, appStore.isOnline, appStore.mobile, appStore.name===", appStore.gpsMode, appStore.isOnline, appStore.mobile, appStore.name)

const staff_id = ref('12345')
const staff_name = ref('陳 海亭')
const attendance_time = ref(dayjs().format('YYYY-MM-DD HH:MI:ss'))
const attendance_type = ref('A')

const typeList = {
  '1': '出',
  '2': '退',
  '3': '休',
  '4': '復',
}

watch(staff_id, () => {
  // console.log(coords.value,locatedAt.value, error)
})

const data = reactive([

])

const processed = (type) => {
  appStore.setProcessType(type);
  data.unshift({staff_id:staff_id.value,staff_name: staff_name, attendance_time: dayjs().format('YYYY-MM-DD HH:MI:ss'), attendance_type: typeList[type]})
  // attendanceStore.
}

</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-start text-center fill-height">
      <TimeLine></TimeLine>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="12">
          <v-text-field v-model.lazy.trim="staff_id" label="従業員コード：" :counter="10" density="compact"/>
          <v-card class="pt-2 pb-3 ma-0 mb-4 bg-amber-lighten-5 rounded-shaped" elevation="1" border>
            <v-row dense="true">
              <v-col cols="6">
                <span class="text-body-2">従業員名：</span>
              </v-col>
              <v-col cols="6">
                <span class="text-body-2">{{ staff_name }}</span>
              </v-col>
            </v-row>
            <v-row dense="true">
              <v-col cols="6">
                <span class="text-body-2">打刻時間：</span>
              </v-col>
              <v-col cols="6">
                <span>{{ attendance_time }}</span>
              </v-col>
            </v-row>
            <v-row dense="true">
              <v-col cols="6">
                <span class="text-body-2">打刻種別：</span>
              </v-col>
              <v-col cols="6">
                <span>{{ attendance_type }}</span>
              </v-col>
            </v-row>
          </v-card>

          <div class="d-flex flex-row mb-1 align-center justify-center">
            <v-btn
              color="green-darken-1"
              size="x-large"
              class="ma-2 pa-2"
              @click="processed('1')"
            >
              <v-tooltip
                  activator="parent"
                  location="start"
                >
                出勤します
              </v-tooltip>
              <v-icon
                icon="mdi-fingerprint"
                size="large"
                start
              />
              出勤
            </v-btn>

            <v-btn
              color="pink-accent-2"
              size="x-large"
              class="ma-2 pa-2"
              @click="processed('2')"
            >
            <v-tooltip
                  activator="parent"
                  location="start"
                >
                退勤します
              </v-tooltip>
              <v-icon
                icon="mdi-home"
                size="large"
                start
              />
            退勤
            </v-btn>
        </div>
        <div class="d-flex flex-row mb-1 align-center justify-center">
            <v-btn
              color="red-lighten-1"
              size="x-large"
              class="ma-2 pa-2"
              @click="processed('3')"
            >
              <v-tooltip
                  activator="parent"
                  location="start"
                >
                休憩します
              </v-tooltip>

              <v-icon
                icon="mdi-logout"
                size="large"
                start
              />
              休憩
            </v-btn>

            <v-btn
              color="deep-purple"
              size="x-large"
              class="ma-2 pa-2"
              @click="processed('4')"
            >
              <v-tooltip
                  activator="parent"
                  location="start"
                >
                休憩終了します
              </v-tooltip>

              <v-icon
                icon="mdi-login"
                size="large"
                start
              />
            終了
            </v-btn>
        </div>
        </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-center">
        <v-col cols="12">
          <v-table density="compact" fixed-header theme="light" class="text-subtitle-2"
            height="200px">
            <thead>
              <tr>
                <th class="text-center text-body-1">No</th>
                <th class="text-center text-body-1">打刻者</th>
                <th class="text-center text-body-1">時刻</th>
                <th class="text-center text-body-1">種別</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(el, i) in data" :key="i" >
                <td class="text-body-2">{{ i + 1 }}</td>
                <td class="text-body-2">{{ el.staff_id }} - {{ el.staff_name }}</td>
                <td class="text-body-2">{{ el.attendance_time }}</td>
                <td class="text-body-2">{{ el.attendance_type }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
