const seiges = [
  {
    id: 0,
    type: "one-day",
    name: "divine-fortress",
    days: ["saturday"],
    time: 0
  },

  {
    id: 1,
    type: "daily",
    name: "tiamaranta",
    time: 18,
    days: ["daily"]
  },
  {
    id: 2,
    type: "daily",
    name: "tiamaranta",
    time: 14,
    days: ["daily"]
  },
  {
    id: 3,
    type: "specified-days",
    name: "vorgaltem-scales",
    days: ["sunday", "monday", "wedsday", "friday", "saturday"],
    time: 20
  },
  {
    id: 4,
    type: "specified-days",
    name: "silus-silona-pradeth",
    days: ["sunday", "monday", "wedsday", "friday"],
    time: 22
  },
  {
    id: 5,
    type: "specified-days",
    name: "kysis-miren-krotan",
    days: ["tuesday", "thursday", "saturday"],
    time: 22
  }
];
const dredigons = [
  { id: 0, type: "daily", name: "Chantra", time: 12, days: ["daily"] },
  { id: 2, type: "daily", name: "Terath", time: 12, days: ["daily"] },
  { id: 3, type: "daily", name: "Chantra", time: 0, days: ["daily"] },
  { id: 4, type: "daily", name: "Terath", time: 0, days: ["daily"] },
  { id: 5, type: "daily", name: "Chantra", time: 20, days: ["daily"] },
  { id: 6, type: "daily", name: "Terath", time: 20, days: ["daily"] },
  {
    id: 7,
    type: "daily",
    name: "engulfed ophidan bridge",
    time: 12,
    days: ["daily"]
  },
  {
    id: 8,
    type: "daily",
    name: "engulfed ophidan bridge",
    time: 19,
    days: ["daily"]
  },
  { id: 9, type: "specified-days", name: "sunday", time: 0, days: ["sunday"] },
  {
    id: 10,
    type: "specified-days",
    name: "sunday",
    time: 12,
    days: ["sunday"]
  },
  {
    id: 11,
    type: "daily",
    name: "kamar battlefield",
    time: 21,
    days: ["daily"]
  }
];
const arenas = [
  {
    id: 0,
    type: "specified-days",
    name: "chaos-cooperation-discipline",
    time: 12,
    days: ["sunday", "saturday"]
  },
  {
    id: 1,
    type: "specified-days",
    name: "chaos-cooperation-discipline",
    time: 12,
    days: ["monday", "tuesday", "wednsday", "thursday", "friday"]
  },
  {
    id: 2,
    type: "specified-days",
    name: "chaos-cooperation-discipline",
    time: 18,
    days: ["monday", "tuesday", "wednsday", "thursday", "friday"]
  },
  {
    id: 3,
    type: "specified-days",
    name: "glory",
    time: 20,
    days: ["sunday"]
  }
];
export { seiges, dredigons, arenas };
