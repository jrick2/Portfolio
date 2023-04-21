import { useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import About from "./About";
import FlexCenter from "@/components/FlexCenter";
import FlexBetween from "@/components/Flexbetween";
import LogoLink from "./components/LogoLink";

const LandingPage = () => {
  const { palette } = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1120px)");
  return (
    <>
      <FlexCenter id="home" flexDirection="column" width="100%" height="70%">
        {/* Upper Haft */}
        {/* Title  */}
        <FlexCenter
          flexDirection="column"
          width={isNonMobileScreens ? "60% " : "100%"}
          color={palette.primary[100]}
        >
          <CodeIcon sx={{ fontSize: "6rem" }} />

          <Typography
            variant="h1"
            sx={{
              fontSize: isNonMobileScreens ? "3.4rem" : "2.7rem",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Hi, My name is Josh Rick
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: isNonMobileScreens ? "4rem" : "3.5rem",
              color: palette.secondary[500],
              textAlign: "center",
            }}
          >
            Back-end developer
          </Typography>
          <FlexBetween gap={2}>
            <a
              style={{ color: "inherit" }}
              href="https://github.com/jrick2/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ fontSize: "2.4rem" }} />
            </a>
            <a
              style={{ color: "inherit" }}
              href="https://www.linkedin.com/in/joshrick-abellera-a217ab249/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: "2.4rem" }} />
            </a>
          </FlexBetween>
        </FlexCenter>
        {/* Lower Haft */}
        {/* Logo Links */}
        {isNonMobileScreens ? (
          <FlexBetween margin={2} justifySelf="center" gap={4}>
            <LogoLink />
          </FlexBetween>
        ) : (
          <FlexBetween flexDirection="column">
            <LogoLink />
          </FlexBetween>
        )}
      </FlexCenter>
      <About />
    </>
  );
};

export default LandingPage;
