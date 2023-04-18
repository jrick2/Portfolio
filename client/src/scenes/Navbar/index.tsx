import FlexBetween from "@/components/Flexbetween";
import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("home");
  const { palette } = useTheme();
  return (
    <FlexBetween
      color={palette.primary[300]}
      bgcolor="#1f2026"
      p="2.2rem 2.2rem"
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <FlexBetween>
        <Typography variant="h1" fontSize="25px">
          Code Abe
        </Typography>
      </FlexBetween>
      <FlexBetween gap={3} sx={{ fontSize: "21px" }}>
        <Box>
          <Link
            to="/"
            onClick={() => setSelected("home")}
            style={{
              color: selected === "home" ? "inherit" : palette.primary[700],
              textDecoration: "inherit",
            }}
          >
            Home
          </Link>
        </Box>
        <Box>
          <Link
            to="/projects"
            onClick={() => setSelected("projects")}
            style={{
              color: selected === "projects" ? "inherit" : palette.primary[700],
              textDecoration: "inherit",
            }}
          >
            Projects
          </Link>
        </Box>
        <Box>
          <Link
            to="/contact"
            onClick={() => setSelected("contact")}
            style={{
              color: selected === "contact" ? "inherit" : palette.primary[700],
              textDecoration: "inherit",
            }}
          >
            Contact
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
