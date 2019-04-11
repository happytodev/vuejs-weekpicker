<template>
  <v-app>
    <v-content>
      <week-picker></week-picker>
    </v-content>
  </v-app>
</template>

<script>
import WeekPicker from './components/WeekPicker'

export default {
  name: 'App',
  components: {
    WeekPicker
  }
}
</script>
