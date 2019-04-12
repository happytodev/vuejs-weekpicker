<template>
  <v-app>
    <v-content>
      <week-picker week-picker-locale="fr" />
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
