<template>
  <v-app>
    <v-app-bar app color="darkerBackground" dark>
      <div class="d-flex align-center">
        <v-img
          alt="euroAion Logo"
          class="shrink mr-2"
          contain
          src="/favicon.ico"
          transition="scale-transition"
          width="40"
        />

        <h2>Euro Aion helper</h2>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            v-bind:fill="$vuetify.theme.themes[theme].primary"
            d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"
          />
        </svg>
      </v-btn>
      <v-btn href="https://euroaion.com/en-US/" target="_blank" text>
        <span class="mr-2">main website</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-row no-gutters>
        <v-col
          ><v-card elevation="5" tile class="mt-10 mb-10 mr-10 pl-10"
            ><h3>server time <br />{{ currentTime }}</h3></v-card
          >
        </v-col>
        <v-col>
          <v-card elevation="5" tile class="mt-10 mb-10  mr-10 pl-10"
            ><h3>next siege <br />{{ nextSeiege() }}</h3></v-card
          >
          <v-card elevation="5" tile class="mt-10 mb-10  mr-10 pl-10"
            ><h3>next dredigon <br />{{ nextDredigon() }}</h3></v-card
          >
          <v-card elevation="5" tile class="mt-10 mb-10  mr-10 pl-10"
            ><h3>arena status <br />{{ nextArena() }}</h3></v-card
          ></v-col
        >
      </v-row>
      <v-tabs centered>
        <v-tab>
          <v-icon left>mdi-castle</v-icon>
          seiges
        </v-tab>
        <v-tab>
          <v-icon left>mdi-sword</v-icon>
          arena
        </v-tab>
        <v-tab>
          <v-icon left>mdi-access-point</v-icon>
          dredigon
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-layout justify-center>
              <ul
                style="  list-style-type: none;
"
              >
                <li
                  class="pl-5"
                  style="float: left"
                  v-for="item in seiges"
                  v-bind:key="item.id"
                >
                  <div>
                    <h2>{{ item.name }}</h2>
                    <ul
                      v-if="item.type === 'daily'"
                      style="  list-style-type: none;"
                    >
                      <h4>{{ convertTime(item.time) }}</h4>
                      <h3>daily</h3>
                    </ul>
                    <ul v-else style="  list-style-type: none;">
                      <h4>{{ convertTime(item.time) }}</h4>
                      <br />
                      <li v-for="day in 7" v-bind:key="day">
                        <h3
                          v-if="
                            day === 1 &&
                              item.days.some(val => val === 'saturday')
                          "
                        >
                          saturday
                        </h3>
                        <h3
                          v-else-if="
                            day === 2 && item.days.some(val => val === 'sunday')
                          "
                        >
                          sunday
                        </h3>
                        <h3
                          v-else-if="
                            day === 3 && item.days.some(val => val === 'monday')
                          "
                        >
                          monday
                        </h3>
                        <h3
                          v-else-if="
                            day === 4 &&
                              item.days.some(val => val === 'tuesday')
                          "
                        >
                          tuesday
                        </h3>
                        <h3
                          v-else-if="
                            day === 5 &&
                              item.days.some(val => val === 'wendsday')
                          "
                        >
                          wendsday
                        </h3>
                        <h3
                          v-else-if="
                            day === 6 &&
                              item.days.some(val => val === 'thursday')
                          "
                        >
                          thursday
                        </h3>
                        <h3
                          v-else-if="
                            day === 7 && item.days.some(val => val === 'friday')
                          "
                        >
                          friday
                        </h3>
                        <h3 v-else>-</h3>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </v-layout>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-layout justify-center>
              <ul style="  list-style-type: none;">
                <li
                  class="pl-5"
                  style="float: left"
                  v-for="item in arenas"
                  v-bind:key="item.id"
                >
                  <v-layout justify-center
                    ><div>
                      <h2>{{ item.name }}</h2>
                      <ul
                        v-if="item.type === 'daily'"
                        style="  list-style-type: none;"
                      >
                        <h4>{{ convertTime(item.time) }}</h4>
                        <h3>daily</h3>
                      </ul>
                      <ul v-else style="  list-style-type: none;">
                        <h4>{{ convertTime(item.time) }}</h4>
                        <br />
                        <li v-for="day in 7" v-bind:key="day">
                          <h3
                            v-if="
                              day === 1 &&
                                item.days.some(val => val === 'saturday')
                            "
                          >
                            saturday
                          </h3>
                          <h3
                            v-else-if="
                              day === 2 &&
                                item.days.some(val => val === 'sunday')
                            "
                          >
                            sunday
                          </h3>
                          <h3
                            v-else-if="
                              day === 3 &&
                                item.days.some(val => val === 'monday')
                            "
                          >
                            monday
                          </h3>
                          <h3
                            v-else-if="
                              day === 4 &&
                                item.days.some(val => val === 'tuesday')
                            "
                          >
                            tuesday
                          </h3>
                          <h3
                            v-else-if="
                              day === 5 &&
                                item.days.some(val => val === 'wendsday')
                            "
                          >
                            wendsday
                          </h3>
                          <h3
                            v-else-if="
                              day === 6 &&
                                item.days.some(val => val === 'thursday')
                            "
                          >
                            thursday
                          </h3>
                          <h3
                            v-else-if="
                              day === 7 &&
                                item.days.some(val => val === 'friday')
                            "
                          >
                            friday
                          </h3>
                          <h3 v-else>-</h3>
                        </li>
                      </ul>
                    </div></v-layout
                  >
                </li>
              </ul>
            </v-layout>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-layout justify-center>
              <ul style="  list-style-type: none;">
                <li
                  class="pl-5"
                  style="float: left"
                  v-for="item in dredgions"
                  v-bind:key="item.id"
                >
                  <v-layout justify-center
                    ><div>
                      <h2>{{ item.name }}</h2>
                      <ul
                        v-if="item.type === 'daily'"
                        style="  list-style-type: none;"
                      >
                        <h4>{{ convertTime(item.time) }}</h4>
                        <h3>daily</h3>
                      </ul>
                      <ul v-else style="  list-style-type: none;">
                        <h4>{{ convertTime(item.time) }}</h4>
                        <br />
                        <li v-for="day in 7" v-bind:key="day">
                          <h3
                            v-if="
                              day === 1 &&
                                item.days.some(val => val === 'saturday')
                            "
                          >
                            saturday
                          </h3>
                          <h3
                            v-else-if="
                              day === 2 &&
                                item.days.some(val => val === 'sunday')
                            "
                          >
                            sunday
                          </h3>
                          <h3
                            v-else-if="
                              day === 3 &&
                                item.days.some(val => val === 'monday')
                            "
                          >
                            monday
                          </h3>
                          <h3
                            v-else-if="
                              day === 4 &&
                                item.days.some(val => val === 'tuesday')
                            "
                          >
                            tuesday
                          </h3>
                          <h3
                            v-else-if="
                              day === 5 &&
                                item.days.some(val => val === 'wendsday')
                            "
                          >
                            wendsday
                          </h3>
                          <h3
                            v-else-if="
                              day === 6 &&
                                item.days.some(val => val === 'thursday')
                            "
                          >
                            thursday
                          </h3>
                          <h3
                            v-else-if="
                              day === 7 &&
                                item.days.some(val => val === 'friday')
                            "
                          >
                            friday
                          </h3>
                          <h3 v-else>-</h3>
                        </li>
                      </ul>
                    </div></v-layout
                  >
                </li>
              </ul>
            </v-layout>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-content>
  </v-app>
</template>

<script>
import { findTimeZone, getZonedTime } from "timezone-support";
import { seiges, arenas, dredigons } from "@/services";
const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export default {
  name: "App",

  components: {},
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  data: () => ({
    currentTime: "",
    seiges: seiges,
    arenas: arenas,
    dredgions: dredigons
  }),
  methods: {
    time() {
      var kiev = findTimeZone("Europe/Kiev");
      var time = getZonedTime(new Date(), kiev);
      var hours = time.hours;
      var mins = time.minutes;
      var amOrPm = hours >= 12 ? "pm" : "am";
      hours = hours % 12 || 12;

      this.currentTime =
        hours + " : " + mins + " : " + time.seconds + " " + amOrPm;
      setTimeout(this.time, 1000);
    },
    convertTime(inp) {
      var hours = inp;
      var mins = 0;
      var amOrPm = hours >= 12 ? "pm" : "am";
      hours = hours % 12 || 12;

      return hours + " : " + mins + " " + amOrPm;
    },
    nextSeiege() {
      var kiev = findTimeZone("Europe/Kiev");
      var time = getZonedTime(new Date(), kiev);
      // var hours = time.hours;
      var day = WEEKDAYS[time.dayOfWeek - 1];
      var result = [];
      for (var s = 0; s < this.seiges.length; s++) {
        for (var d = 0; d < this.seiges[s].days.length; d++) {
          if (
            this.seiges[s].days[d].indexOf(day.toLowerCase()) > -1 ||
            this.seiges[s].type == "daily"
          ) {
            result.push({
              name: this.seiges[s].name,
              time: this.seiges[s].time
            });
          }
        }
      }
      result.sort((a, b) =>
        a.time[0] > b.time[0] ? 1 : b.time > a.time ? -1 : 0
      );
      for (var i = 0; i < result.length; i++) {
        if (result[i].time > time.hours) {
          return `${result[i].name} in ${result[i].time - time.hours} hours`;
        }
      }
    },
    nextDredigon() {
      var kiev = findTimeZone("Europe/Kiev");
      var time = getZonedTime(new Date(), kiev);
      // var hours = time.hours;
      var day = WEEKDAYS[time.dayOfWeek - 1];
      var result = [];
      for (var s = 0; s < this.dredgions.length; s++) {
        for (var d = 0; d < this.dredgions[s].days.length; d++) {
          if (
            this.dredgions[s].days[d].indexOf(day.toLowerCase()) > -1 ||
            this.dredgions[s].type == "daily"
          ) {
            result.push({
              name: this.dredgions[s].name,
              time: this.dredgions[s].time
            });
          }
        }
      }
      result.sort((a, b) =>
        a.time[0] > b.time[0] ? 1 : b.time > a.time ? -1 : 0
      );
      for (var i = 0; i < result.length; i++) {
        if (result[i].time > time.hours) {
          return `${result[i].name} in ${result[i].time - time.hours} hours`;
        }
      }
    },
    nextArena() {
      var kiev = findTimeZone("Europe/Kiev");
      var time = getZonedTime(new Date(), kiev);
      // var hours = time.hours;
      const day = WEEKDAYS[time.dayOfWeek - 1];
      const result = [];
      for (var s = 0; s < this.arenas.length; s++) {
        for (var d = 0; d < this.arenas[s].days.length; d++) {
          if (
            this.arenas[s].days[d].indexOf(day.toLowerCase()) > -1 ||
            this.arenas[s].type == "daily"
          ) {
            result.push({
              name: this.arenas[s].name,
              time: this.arenas[s].time
            });
          }
        }
      }
      result.sort((a, b) =>
        a.time[0] > b.time[0] ? 1 : b.time > a.time ? -1 : 0
      );
      for (var i = 0; i < result.length; i++) {
        if (result[i].time > time.hours) {
          return `${result[i].name} in ${result[i].time - time.hours} hours`;
        }
      }
    }
  },
  mounted: function() {
    this.time();
  }
};
</script>
