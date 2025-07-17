import { tokens } from "../theme";


// src/data/mockData.js

// Mock data for bar chart: sales quantities by product type, per country and year
export const mockBarData = [
  // 2025 data
  { year: 2025, country: "AD", "hot dog": 137, burger: 96, sandwich: 80, kebab: 72, fries: 90, donut: 140 },
  { year: 2025, country: "AE", "hot dog":  55, burger: 28, sandwich: 45, kebab: 58, fries: 65, donut:  29 },
  { year: 2025, country: "AF", "hot dog": 109, burger: 23, sandwich: 34, kebab: 34, fries: 50, donut: 152 },
  { year: 2025, country: "AG", "hot dog": 133, burger: 52, sandwich: 43, kebab: 43, fries: 75, donut:  83 },
  { year: 2025, country: "AI", "hot dog":  81, burger: 80, sandwich:112, kebab:112, fries: 60, donut:  35 },
  { year: 2025, country: "AL", "hot dog":  66, burger:111, sandwich:167, kebab:167, fries: 45, donut:  18 },
  { year: 2025, country: "AM", "hot dog":  80, burger: 47, sandwich:158, kebab:158, fries: 72, donut:  49 },

  // 2024 data
  { year: 2024, country: "AD", "hot dog": 150, burger: 80, sandwich: 90, kebab: 60, fries: 85, donut: 130 },
  { year: 2024, country: "AE", "hot dog":  60, burger: 35, sandwich: 50, kebab: 65, fries: 70, donut:  30 },
  { year: 2024, country: "AF", "hot dog":  95, burger: 40, sandwich: 55, kebab: 50, fries: 55, donut: 140 },
  { year: 2024, country: "AG", "hot dog": 120, burger: 60, sandwich: 65, kebab: 55, fries: 80, donut:  90 },
  { year: 2024, country: "AI", "hot dog":  70, burger: 75, sandwich:100, kebab:120, fries: 65, donut:  40 },
  { year: 2024, country: "AL", "hot dog":  50, burger: 95, sandwich:150, kebab:140, fries: 55, donut:  25 },
  { year: 2024, country: "AM", "hot dog":  85, burger: 55, sandwich:130, kebab:150, fries: 80, donut:  60 },

  // 2023 data
  { year: 2023, country: "AD", "hot dog": 120, burger:100, sandwich: 75, kebab: 80, fries: 95, donut: 120 },
  { year: 2023, country: "AE", "hot dog":  50, burger: 30, sandwich: 40, kebab: 55, fries: 60, donut:  25 },
  { year: 2023, country: "AF", "hot dog":  85, burger: 25, sandwich: 30, kebab: 45, fries: 50, donut: 100 },
  { year: 2023, country: "AG", "hot dog": 105, burger: 45, sandwich: 60, kebab: 50, fries: 70, donut:  75 },
  { year: 2023, country: "AI", "hot dog":  78, burger: 68, sandwich: 95, kebab:110, fries: 55, donut:  30 },
  { year: 2023, country: "AL", "hot dog":  60, burger:105, sandwich:140, kebab:160, fries: 50, donut:  20 },
  { year: 2023, country: "AM", "hot dog":  90, burger: 35, sandwich:120, kebab:140, fries: 85, donut:  55 },
];


export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];
