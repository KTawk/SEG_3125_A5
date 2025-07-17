// src/components/LineChart.jsx
import React, { useMemo } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useTheme }       from '@mui/material';
import { tokens }         from '../theme';
import { mockLineData }   from '../data/mockData.fr.js';

const LineChart = ({ country = 'us', isDashboard = false }) => {
  const theme  = useTheme();
  const colors = tokens(theme.palette.mode);

  // Only render the series for the selected country
  const dataToRender = useMemo(() => {
    return mockLineData.filter(series => series.id === country);
  }, [country]);

  return (
    <ResponsiveLine
      data={dataToRender}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          ticks: {
            line: { stroke: colors.grey[100], strokeWidth: 1 },
            text: { fill: colors.grey[100] },
          },
          legend: { text: { fill: colors.grey[100] } },
        },
        legends: { text: { fill: colors.grey[100] } },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'transport mode',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        // only 5 evenly spaced ticks to avoid crowding
        tickValues: 5,
        legend: isDashboard ? undefined : 'value',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      useMesh={true}
      // legends removed
      tooltip={({ point }) => (
        <div style={{
          background: colors.primary[700],
          color: colors.grey[100],
          padding: '8px 12px',
          borderRadius: 4,
        }}>
          {point.data.x}: {point.data.y}
        </div>
      )}
    />
  );
};

export default LineChart;
