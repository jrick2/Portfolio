import FlexBetween from "@/components/Flexbetween";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { navLinks } from "@/components/contants";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width:1120px)");

  const { palette } = useTheme();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
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

      {isNonMobileScreens ? (
        <FlexBetween gap={2}>
          {navLinks.map((nav) => (
            <a
              href={`#${nav.id}`}
              onClick={() => setSelected(nav.title)}
              style={{
                textDecoration: "inherit",
                color:
                  selected === nav.title ? "inherit" : palette.primary[700],
              }}
            >
              {nav.title}
            </a>
          ))}
        </FlexBetween>
      ) : (
        <Box
          sx={
            isOpen
              ? {
                  width: "30%",
                  height: "30%",
                  display: "flex",
                  position: "fixed",
                  right: 0,
                  top: 0,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1.5rem",
                  backgroundColor: "inherit",
                }
              : ""
          }
        >
          {isOpen ? (
            <>
              {navLinks.map((nav) => (
                <a
                  href={`#${nav.id}`}
                  onClick={() => setSelected(nav.title)}
                  style={{
                    textDecoration: "inherit",
                    color:
                      selected === nav.title ? "inherit" : palette.primary[700],
                  }}
                >
                  {nav.title}
                </a>
              ))}
            </>
          ) : (
            ""
          )}
        </Box>
      )}

      <Button
        onClick={handleToggle}
        sx={{ display: isNonMobileScreens ? "none" : "block" }}
      >
        {isOpen ? (
          <CloseIcon sx={{ fontSize: "2rem" }} />
        ) : (
          <MenuIcon sx={{ fontSize: "2rem" }} />
        )}
      </Button>
    </FlexBetween>
  );
};

export default Navbar;
