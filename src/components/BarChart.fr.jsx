// src/components/BarChart.jsx
import React, { useMemo } from 'react';
import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { tokens } from '../theme';
import { mockBarData } from '../data/mockData.fr';

// FX multipliers per product key
const fx = {
  USD: { 'hot-dog': 1, burger: 1, sandwich: 1, kebab: 1, frites: 1, beignet: 1 },
  CAD: { 'hot-dog': 1.2, burger: 0.8, sandwich: 1.3, kebab: 0.9, frites: 1.1, beignet: 0.7 },
  EUR: { 'hot-dog': 0.7, burger: 1.4, sandwich: 0.8, kebab: 1.2, frites: 0.6, beignet: 1.5 },
};

// Now only filters by année (year) and uses pays (country)
const BarChart = ({ currency = 'USD', year, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // filter by année, then apply FX scaling
  const dataToRender = useMemo(() => {
    const rates = fx[currency] || fx.USD;
    return mockBarData
      .filter(item => item.année === year)
      .map(item => {
        // use pays as index
        const scaled = { pays: item.pays };
        Object.keys(rates).forEach(key => {
          const baseValue = typeof item[key] === 'number' ? item[key] : 0;
          scaled[key] = Math.round(baseValue * rates[key]);
        });
        return scaled;
      });
  }, [currency, year]);

  return (
    <ResponsiveBar
      data={dataToRender}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
          ticks: { line: { stroke: colors.grey[100], strokeWidth: 1 }, text: { fill: colors.grey[100] } },
        },
        legends: { text: { fill: colors.grey[100] } },
      }}
      keys={["hot-dog","burger","sandwich","kebab","frites","beignet"]}
      indexBy="pays"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', '1.6']] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'pays',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'value',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      enableLabel={false}
      legends={[{
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        translateX: 120,
        itemWidth: 100,
        itemHeight: 20,
        symbolSize: 20,
        effects: [{ on: 'hover', style: { itemOpacity: 1 } }],
      }]}
      role='application'
    />
  );
};

export default BarChart;
