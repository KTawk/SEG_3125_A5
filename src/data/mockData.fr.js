import { tokens } from "../theme";


// src/data/mockData.js

// Mock data for bar chart: sales quantities by product type, per pays and année
export const mockBarData = [
  // 2025 data
  { année: 2025, pays: "AD", "hot-dog": 137, burger: 96, sandwich: 80, kebab: 72, frites: 90, beignet: 140 },
  { année: 2025, pays: "AE", "hot-dog":  55, burger: 28, sandwich: 45, kebab: 58, frites: 65, beignet:  29 },
  { année: 2025, pays: "AF", "hot-dog": 109, burger: 23, sandwich: 34, kebab: 34, frites: 50, beignet: 152 },
  { année: 2025, pays: "AG", "hot-dog": 133, burger: 52, sandwich: 43, kebab: 43, frites: 75, beignet:  83 },
  { année: 2025, pays: "AI", "hot-dog":  81, burger: 80, sandwich:112, kebab:112, frites: 60, beignet:  35 },
  { année: 2025, pays: "AL", "hot-dog":  66, burger:111, sandwich:167, kebab:167, frites: 45, beignet:  18 },
  { année: 2025, pays: "AM", "hot-dog":  80, burger: 47, sandwich:158, kebab:158, frites: 72, beignet:  49 },

  // 2024 data
  { année: 2024, pays: "AD", "hot-dog": 150, burger: 80, sandwich: 90, kebab: 60, frites: 85, beignet: 130 },
  { année: 2024, pays: "AE", "hot-dog":  60, burger: 35, sandwich: 50, kebab: 65, frites: 70, beignet:  30 },
  { année: 2024, pays: "AF", "hot-dog":  95, burger: 40, sandwich: 55, kebab: 50, frites: 55, beignet: 140 },
  { année: 2024, pays: "AG", "hot-dog": 120, burger: 60, sandwich: 65, kebab: 55, frites: 80, beignet:  90 },
  { année: 2024, pays: "AI", "hot-dog":  70, burger: 75, sandwich:100, kebab:120, frites: 65, beignet:  40 },
  { année: 2024, pays: "AL", "hot-dog":  50, burger: 95, sandwich:150, kebab:140, frites: 55, beignet:  25 },
  { année: 2024, pays: "AM", "hot-dog":  85, burger: 55, sandwich:130, kebab:150, frites: 80, beignet:  60 },

  // 2023 data
  { année: 2023, pays: "AD", "hot-dog": 120, burger:100, sandwich: 75, kebab: 80, frites: 95, beignet: 120 },
  { année: 2023, pays: "AE", "hot-dog":  50, burger: 30, sandwich: 40, kebab: 55, frites: 60, beignet:  25 },
  { année: 2023, pays: "AF", "hot-dog":  85, burger: 25, sandwich: 30, kebab: 45, frites: 50, beignet: 100 },
  { année: 2023, pays: "AG", "hot-dog": 105, burger: 45, sandwich: 60, kebab: 50, frites: 70, beignet:  75 },
  { année: 2023, pays: "AI", "hot-dog":  78, burger: 68, sandwich: 95, kebab:110, frites: 55, beignet:  30 },
  { année: 2023, pays: "AL", "hot-dog":  60, burger:105, sandwich:140, kebab:160, frites: 50, beignet:  20 },
  { année: 2023, pays: "AM", "hot-dog":  90, burger: 35, sandwich:120, kebab:140, frites: 85, beignet:  55 },
];


export const mockPieData = [
  {
    id: "pirater",
    label: "pirater",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "fabriquer",
    label: "fabriquer",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "aller",
    label: "aller",
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
        x: "avion",
        y: 101,
      },
      {
        x: "hélicoptère",
        y: 75,
      },
      {
        x: "bateau",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "métro",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "voiture",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicyclette",
        y: 281,
      },
      {
        x: "cheval",
        y: 1,
      },
      {
        x: "planche à roulettes",
        y: 35,
      },
      {
        x: "autres",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "avion",
        y: 212,
      },
      {
        x: "hélicoptère",
        y: 190,
      },
      {
        x: "bateau",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "métro",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "voiture",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicyclette",
        y: 97,
      },
      {
        x: "cheval",
        y: 87,
      },
      {
        x: "planche à roulettes",
        y: 299,
      },
      {
        x: "autres",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "avion",
        y: 191,
      },
      {
        x: "hélicoptère",
        y: 136,
      },
      {
        x: "bateau",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "métro",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "voiture",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicyclette",
        y: 8,
      },
      {
        x: "cheval",
        y: 197,
      },
      {
        x: "planche à roulettes",
        y: 107,
      },
      {
        x: "autres",
        y: 170,
      },
    ],
  },
];
