// src/scenes/dashboard/index.jsx

import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [country, setCountry] = useState("us");
  const [pieCurrency, setPieCurrency] = useState("USD");

  const [barYear, setBarYear]  = useState(2025);
  // Common wrapper width
  const WRAPPER_WIDTH = "80%";

   return (
    <Box m="20px">
      {/* Dashboard Title */}
      <Typography
        variant="h2"
        align="center"
        fontWeight="bold"
        gutterBottom
        color={colors.grey[100]}
      >
        Analytics Dashboard
      </Typography>

      {/* SYNTHETIC DATA DISCLAIMER */}
      <Typography
        variant="caption"
        align="center"
        display="block"
        color={colors.grey[200]}
        sx={{ fontSize: '1.25rem', mb: 10 }}
        mb="600px"
      >
        The data used to create this website is synthetic and does not represent real‑world data.
      </Typography>

      {/* ===== LINE CHART SECTION ===== */}
      <Box mb="100px" width={WRAPPER_WIDTH} mx="auto">
        <Box display="flex" justifyContent="space-between" mb="8px">
          <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
            Revenue by Transport Mode
          </Typography>
          <FormControl variant="filled" size="small">
            <InputLabel
             sx={{ color: colors.grey[100], '&.Mui-focused': { color: colors.grey[100] }, // stays white when focused
    }}> Country</InputLabel>

            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value="us">US</MenuItem>
              <MenuItem value="france">France</MenuItem>
              <MenuItem value="japan">Japan</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box height="35vh" width="90%" mx="auto">
          <LineChart country={country} isDashboard />
        </Box>
        <Box mt="15px">
          <Typography
            variant="subtitle1"
            color={colors.grey[200]}
            sx={{ fontSize: "1.25rem" }}
          >
            This line chart illustrates the revenue performance for each transport
            mode (e.g., plane, train, bus) in the selected country. It highlights
            peak and low revenue points over the period, so you can quickly identify
            which modes are driving growth and which may need attention.
          </Typography>
        </Box>
      </Box>

      


      {/* BAR CHART SECTION */}
      <Box mb="80px" width={WRAPPER_WIDTH} mx="auto">
        <Box display="flex" justifyContent="space-between" mb="8px">
          <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
            Sales Quantity by Product
          </Typography>

          {/* Year selector */}
          <FormControl variant="filled" size="small" sx={{ mr: 2 }}>
           
            <InputLabel
             sx={{ color: colors.grey[100], '&.Mui-focused': { color: colors.grey[100] }, // stays white when focused
    }}> Year</InputLabel>
            <Select
              value={barYear}
              onChange={(e) => setBarYear(+e.target.value)}
            >
              {[2025, 2024, 2023].map(y => (
                <MenuItem key={y} value={y}>{y}</MenuItem>
              ))}
            </Select>
          </FormControl>

          
        </Box>

        <Box height="45vh" width="90%" mx="auto">
          <BarChart
            currency={pieCurrency}   
            year={barYear}
           
            isDashboard
          />
        </Box>

        {/* New description under bar chart */}
        <Box mt="12px">
          <Typography
            variant="subtitle1"
            
            color={colors.grey[200]}
            sx={{ fontSize: "1.25rem" }}
          >
            This stacked bar chart compares unit sales for each product type
            (hot dog, burger, sandwich, etc.) across countries for the selected
            year. Use the dropdown above to switch years and see trends over time.
          </Typography>
        </Box>

      </Box>
      
{/* ===== PIE CHART SECTION ===== */}
      <Box mb="80px" width={WRAPPER_WIDTH} mx="auto">
        <Box display="flex" justifyContent="space-between" mb="8px">
          <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
            Campaign Revenue Breakdown
          </Typography>
          <FormControl variant="filled" size="small">
      
      <InputLabel
             sx={{ color: colors.grey[100], '&.Mui-focused': { color: colors.grey[100] }, // stays white when focused
    }}> Currency</InputLabel>
      
      <Select
        value={pieCurrency}
        onChange={e => setPieCurrency(e.target.value)}
      >
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="CAD">CAD</MenuItem>
        <MenuItem value="EUR">EUR</MenuItem>
      </Select>
    </FormControl>
        </Box>
        
<Box height="50vh" width="100%">
  <PieChart currency={pieCurrency} />
</Box>


        <Box mt="15px">
          <Typography
            variant="subtitle1"
            color={colors.grey[200]}
            sx={{ fontSize: "1.25rem" }}
          >
            The donut chart breaks down the selected metric into its component categories—showing
            how much of total campaign revenue (or cost) comes from the primary campaign versus
            other miscellaneous expenses.
          </Typography>
        </Box>
      </Box>

      {/* ===== FOOTER ===== */}
      <Box
        mt="40px"
        py="20px"
        textAlign="center"
        bgcolor={colors.primary[0]}
        color={colors.grey[300]}
      >
        <Typography variant="body2">
          © 2025 Acme Analytics. All rights reserved.
        </Typography>
      </Box>


    </Box>

    
  );
};

export default Dashboard;