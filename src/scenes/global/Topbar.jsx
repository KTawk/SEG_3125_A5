// src/components/Topbar.jsx
import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// 1️⃣ Import the portfolio icon
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // detect if we're on the French sub‑path
  const isFrench = window.location.pathname.startsWith("/fr");

  const handleLocaleToggle = () => {
    const { pathname, search, hash } = window.location;
    if (isFrench) {
      // strip leading "/fr"
      const newPath = pathname.replace(/^\/fr/, "") || "/";
      window.location.href = newPath + search + hash;
    } else {
      // prefix with "/fr"
      window.location.href = "/fr" + pathname + search + hash;
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* you can leave your SEARCH BAR here */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        {/* … */}
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center" gap={1}>
        {/* 2️⃣ Portfolio button */}
        <IconButton
          component="a"
          href="https://ktawk.github.io/myPortfolio/"
          target="_blank"
          rel="noopener noreferrer"
          title="My Portfolio"
        >
          <FolderOpenOutlinedIcon />
        </IconButton>

        {/* Dark / Light mode toggle */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        {/* Locale toggle */}
        <IconButton onClick={handleLocaleToggle} size="large" sx={{ ml: 1 }}>
          <Typography
            variant="button"
            sx={{
              color: colors.grey[100],
              fontWeight: "bold",
              fontSize: "0.875rem",
              letterSpacing: 1,
            }}
          >
            {isFrench ? "EN" : "FR"}
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
