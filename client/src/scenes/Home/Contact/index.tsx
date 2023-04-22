import FlexCenter from "@/components/FlexCenter";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import FlexBetween from "@/components/Flexbetween";
const Contact = () => {
  const { palette } = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:550px)");
  return (
    <FlexCenter
      className="contact"
      id="contact"
      height="77%"
      flexDirection="column"
    >
      <Box margin={2} textAlign="center">
        <Typography variant="h2" sx={{ color: palette.tertiary[500] }}>
          CONTACT
        </Typography>
        <Typography variant="h2" sx={{ color: palette.grey[500] }}>
          Be the change
        </Typography>
        <ArrowDownwardIcon
          sx={{ color: palette.primary.light, fontSize: "3rem" }}
        />
      </Box>

      {isNonMobileScreens ? (
        <FlexBetween gap={1.5}>
          <Box display="flex" gap={2}>
            <FlexCenter>
              <LocationOnIcon
                sx={{ fontSize: "2rem", color: palette.secondary.dark }}
              />
            </FlexCenter>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="h4"
                sx={{ fontSize: "20px", fontWeight: "900" }}
              >
                Location
              </Typography>
              <Typography variant="h4" sx={{ fontSize: "18px" }}>
                Laguna, Philippines
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap={2}>
            <FlexCenter>
              <EmailIcon
                sx={{ fontSize: "2rem", color: palette.secondary.light }}
              />
            </FlexCenter>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="h4"
                sx={{ fontSize: "20px", fontWeight: "900" }}
              >
                Mail
              </Typography>
              <Typography variant="h4" sx={{ fontSize: "18px" }}>
                abellerajoshrick@gmail.com
              </Typography>
            </Box>
          </Box>
        </FlexBetween>
      ) : (
        <FlexBetween flexDirection="column" gap={1.5}>
          <Box display="flex" gap={2}>
            <FlexCenter>
              <LocationOnIcon
                sx={{ fontSize: "1.5rem", color: palette.secondary.dark }}
              />
            </FlexCenter>
            <Box display="flex" flexDirection="row" gap={2}>
              <Typography
                variant="h4"
                sx={{ fontSize: "20px", fontWeight: "900" }}
              >
                Location
              </Typography>
              <Typography variant="h4" sx={{ fontSize: "18px" }}>
                Laguna, Philippines
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap={2}>
            <FlexCenter>
              <EmailIcon
                sx={{ fontSize: "1.5rem", color: palette.secondary.light }}
              />
            </FlexCenter>
            <Box display="flex" flexDirection="row" gap={1}>
              <Typography
                variant="h4"
                sx={{ fontSize: "20px", fontWeight: "900" }}
              >
                Mail
              </Typography>
              <Typography variant="h4" sx={{ fontSize: "18px" }}>
                abellerajoshrick@gmail.com
              </Typography>
            </Box>
          </Box>
        </FlexBetween>
      )}
    </FlexCenter>
  );
};

export default Contact;
