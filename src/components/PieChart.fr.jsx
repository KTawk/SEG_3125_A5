// src/components/PieChart.jsx
import React, { useMemo } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { mockPieData } from '../data/mockData.fr';

// FX multipliers per slice id (make proportions change visibly)
const fx = {
  USD: { hack: 1,    make: 1,    go: 1,    lisp: 1,    scala: 1    },
  CAD: { hack: 1.2,  make: 0.8,  go: 1.4,  lisp: 1.1,  scala: 0.9  },
  EUR: { hack: 0.7,  make: 1.5,  go: 0.6,  lisp: 1.2,  scala: 1.3  },
};

const PieChart = ({ currency = 'USD' }) => {
  const theme  = useTheme();
  const colors = tokens(theme.palette.mode);

  // pick slice multipliers for selected currency
  const rates = fx[currency] || fx.USD;

  // rebuild data so proportions adjust
  const dataToRender = useMemo(() =>
    mockPieData.map(item => ({
      id:    item.id,
      label: item.label,
      value: Number((item.value * (rates[item.id] ?? 1)).toFixed(2)),
    })),
    [currency]
  );

  return (
    <ResponsivePie
      data={dataToRender}
      theme={{ legends: { text: { fill: colors.grey[100] } } }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={false}
      legends={[{
        anchor: 'bottom',
        direction: 'row',
        translateY: 56,
        itemWidth: 100,
        itemHeight: 18,
        symbolSize: 18,
        symbolShape: 'circle',
        itemTextColor: '#999',
        effects: [{ on: 'hover', style: { itemTextColor: '#000' } }],
      }]}
      tooltip={({ datum }) => (
        <div style={{
          background: colors.primary[700],
          color:      colors.grey[100],
          padding:    '8px 12px',
          borderRadius: 4,
        }}>
          <strong>{datum.label}</strong>: {datum.value} {currency}
        </div>
      )}
    />
  );
};

export default PieChart;
               