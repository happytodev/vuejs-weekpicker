<template>
  <v-app>
    <v-content>
      <week-picker week-picker-locale="en" />
      <v-text-field
        v-model="this.$store.state.actualYear"
        label="Actual Year"
      />
      <v-text-field
        v-model="this.$store.state.weekNumber"
        label="Week Number"
      />
      <v-text-field
        v-model="this.$store.state.weekSelectedPeriod"
        label="Week Selected Period"
      />
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
