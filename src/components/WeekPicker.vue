<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs2>
        <div class="text-xs-center">
          <div>
            <v-btn color="primary" fab small dark v-on:click="previousWeek">
              <v-icon>skip_previous</v-icon>
            </v-btn>
          </div>
        </div>
      </v-flex>
      <v-flex xs4>
        <div class="text-xs-center">
          <div>
              <v-select
                v-model="actualYear"
                :items="years"
                menu-props="auto"
                label="Select"
                hide-details
                prepend-icon="date_range"
                single-line
                @change="initializeWeeksArray"
              >
              </v-select>
          </div>
        </div>
      </v-flex>
      <v-flex xs4>
        <div class="text-xs-center">
          <div>
              <v-select
                v-model="weeknumber"
                :items="weeks"
                menu-props="auto"
                label="Select"
                hide-details
                prefix="Week"
                :suffix = "weekSuffix"
                prepend-icon="today"
                single-line
              >
              </v-select>
          </div>
        </div>
      </v-flex>
      <v-flex xs2>
        <div class="text-xs-center">
          <div>
            <v-btn color="primary" fab small dark v-on:click="nextWeek">
              <v-icon>skip_next</v-icon>
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
var moment = require('moment')
export default {
  data: () => ({
    activateWeekSuffix: false,
    activateWeekPreprendIcon: true,
    actualYear: '',
    menu: false,
    numberOfWeekThisYear: '',
    separator: '/',
    weeks: [],
    weeknumber: moment().week(),
    weekSuffix: '',
    years: []
  }),
  created: function () {
    this.actualYear = new Date().getFullYear()
    this.numberOfWeekThisYear = this.getNumberOfWeekThisYear()
    this.initializeYearsArray()
    this.initializeWeeksArray()
    this.getWeekSuffix()
  },
  methods: {
    getNumberOfWeekThisYear: function (year) {
      var yearToCompute = ''

      if (year) {
        yearToCompute = year
      } else {
        yearToCompute = this.actualYear
      }

      this.numberOfWeekThisYear = moment().isoWeekYear(yearToCompute).isoWeeksInYear()
      return this.numberOfWeekThisYear
    },
    getWeekPrependIcon: function (event) {
      if (this.activateWeekPreprendIcon) {
        return 'today'
      }
    },
    getWeekSuffix: function (event) {
      if (this.activateWeekSuffix) {
        this.weekSuffix = this.separator + this.numberOfWeekThisYear.toString()
      } else {
        this.weekSuffix = ''
      }
    },
    initializeWeeksArray: function (event) {
      this.weeks = []
      var i = ''
      var numberOfWeeksForTheSelectedYear = ''
      numberOfWeeksForTheSelectedYear = this.getNumberOfWeekThisYear(this.actualYear)
      for (i = 1; i < numberOfWeeksForTheSelectedYear + 1; i++) {
        this.weeks.push(i)
      }
    },
    initializeYearsArray: function (event) {
      var i = ''
      for (i = 3; i > -1; i--) {
        this.years.push(this.actualYear + i)
      }
      for (i = 1; i < 2; i++) {
        this.years.push(this.actualYear - i)
      }
    },
    nextWeek: function (event) {
      this.weeknumber += 1
      if (this.weeknumber > this.numberOfWeekThisYear) {
        this.weeknumber = 1
        this.actualYear = parseInt(this.actualYear) + 1
        this.numberOfWeekThisYear = this.getNumberOfWeekThisYear(this.actualYear)
        this.initializeWeeksArray()
        this.getWeekSuffix()
      }
    },
    previousWeek: function (event) {
      this.weeknumber -= 1
      if (this.weeknumber < 1) {
        this.actualYear = parseInt(this.actualYear) - 1
        this.weeknumber = this.getNumberOfWeekThisYear(this.actualYear)
        this.initializeWeeksArray()
        this.getWeekSuffix()
      }
    }
  }
}
</script>
