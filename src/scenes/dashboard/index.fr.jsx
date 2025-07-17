// src/scenes/dashboard/index.fr.jsx
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
import LineChart from "../../components/LineChart.fr.jsx";  // include .jsx extension
import PieChart from "../../components/PieChart.fr.jsx";
import BarChart from "../../components/BarChart.fr.jsx";

const DashboardFr = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [country, setCountry] = useState("us");
  const [pieCurrency, setPieCurrency] = useState("USD");
  const [barYear, setBarYear] = useState(2025);
  const WRAPPER_WIDTH = "80%";

  return (
    <Box m="20px">
      {/* Titre */}
      <Typography
        variant="h2"
        align="center"
        fontWeight="bold"
        gutterBottom
        color={colors.grey[100]}
        mb="100px"
      >
        Tableau de bord analytique
      </Typography>

      {/* LINE CHART */}
      <Box mb="100px" width={WRAPPER_WIDTH} mx="auto">
        <Box display="flex" justifyContent="space-between" mb="60px">
          <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
            Revenus par mode de transport
          </Typography>
          <FormControl variant="filled" size="small">
            <InputLabel
              sx={{ color: colors.grey[100], '&.Mui-focused': { color: colors.grey[100] } }}
            >
              Pays
            </InputLabel>
            <Select value={country} onChange={(e) => setCountry(e.target.value)}>
              <MenuItem value="us">États-Unis</MenuItem>
              <MenuItem value="france">France</MenuItem>
              <MenuItem value="japan">Japon</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box height="35vh" width="90%" mx="auto">
          <LineChart country={country} isDashboard />
        </Box>
        {/* description */}
        <Box mt="15px">
          <Typography
            variant="subtitle1"
            color={colors.grey[200]}
            sx={{ fontSize: "1.25rem" }}
          >
            Ce graphique linéaire illustre la performance des revenus pour chaque mode de transport (avion, train, bus) dans le pays sélectionné. Il met en évidence les pics et creux de revenus au cours de la période, vous permettant d’identifier rapidement quels modes stimulent la croissance et lesquels nécessitent une attention.
          </Typography>
        </Box>
      </Box>









     

      {/* BAR CHART SECTION */}
      <Box mb="80px" width={WRAPPER_WIDTH} mx="auto">
        <Box display="flex" justifyContent="space-between" mb="8px">
          <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
            Quantité de ventes par produit
          </Typography>

          {/* Year selector */}
          <FormControl variant="filled" size="small" sx={{ mr: 2 }}>
            <InputLabel
                         sx={{ color: colors.grey[100], '&.Mui-focused': { color: colors.grey[100] }, // stays white when focused
                }}> Année</InputLabel>
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
             <Box mt="15px">
               <Typography
                 variant="subtitle1"
                 color={colors.grey[200]}
                 sx={{ fontSize: "1.25rem" }}
               >
                 Ce graphique à barres empilées compare les ventes unitaires de chaque type de produit (hot dog, burger, sandwich, etc.) entre les pays pour l’année sélectionnée. Utilisez le menu déroulant ci-dessus pour changer d’année et observer les tendances au fil du temps.
               </Typography>
             </Box>
     
           </Box>
           
     
      {/* ===== PIE CHART SECTION ===== */}
      <Box mb="80px" width={WRAPPER_WIDTH} mx="auto">
        <Box display="flex" justifyContent="space-between" mb="8px">
          <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
            Répartition des revenus de la campagne
          </Typography>
          <FormControl variant="filled" size="small">
     
      <InputLabel
                   sx={{ color: colors.grey[100], '&.Mui-focused': { color: colors.grey[100] }, // stays white when focused
          }}> Devise</InputLabel>
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
            Ce graphique en anneau décompose la métrique sélectionnée en ses différentes catégories, montrant quelle part des revenus (ou coûts) totaux de la campagne provient de la campagne principale par rapport aux autres dépenses diverses.
          </Typography>
        </Box>
      </Box>

     
           {/* ===== FOOTER ===== */}
           <Box
             mt="100px"
             py="20px"
             textAlign="center"
             bgcolor={colors.primary[0]}
             color={colors.grey[300]}
           >
             <Typography variant="body2">
               © 2025 Acme Analytics. Tous droits réservés.
             </Typography>
           </Box>
     
     
         </Box>
     
         
       );
     };
     
export default DashboardFr;