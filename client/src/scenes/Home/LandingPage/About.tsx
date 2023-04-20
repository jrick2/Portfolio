import FlexCenter from "@/components/FlexCenter";
import { Typography, useTheme, useMediaQuery, Box } from "@mui/material";

const upperContent = `
As a self-taught web developer, I have dedicated significant
effort to honing my skills and improving my efficiency. However,
my journey towards success was not always smooth sailing. In my
early years, I found myself stuck in a vicious cycle of wasting
time and making little progress, which left me feeling unfulfilled
and frustrated with my life. I recognized the need for change and
took inspiration from the words of a wise man who said, "1 Day or
Day 1." These words resonated deeply with me, and I made a
decision to take action and pursue a career in tech. It was a
challenging path, filled with doubts and sorrows, but I persevered
and emerged as a skilled web developer.`;
const lowerContent = `
As I delved deeper into the world of tech, I realized that web
development was my passion. I spent countless hours learning about
programming languages, web frameworks, and other tools of the
trade. Despite the steep learning curve, I was determined to
succeed, and I poured my heart and soul into my work. Over time, I
began to see the fruits of my labor. I created websites and web
applications that will help people solve real-world problems. it
wont be a matter of time before feedback from clients and users,
which will boosted my confidence and reinforced my belief in the
value of my work.`;

const About = () => {
  const { palette } = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1200px)");
  return (
    <FlexCenter
      flexDirection="row"
      width="100%"
      height={isNonMobileScreens ? "100%" : "auto"}
      sx={{
        backgroundColor: "#2d2d34",
      }}
    >
      {isNonMobileScreens ? (
        <FlexCenter justifySelf="center">
          <FlexCenter
            width="20%"
            flexDirection="column"
            color={palette.grey[400]}
          >
            <img
              alt=""
              src="./src/assets/images.jpg"
              style={{ width: "100%" }}
            />
            <Typography variant="h1" sx={{ fontWeight: "500" }}>
              Unavailable
            </Typography>
          </FlexCenter>

          <FlexCenter
            flexDirection="column"
            width="50%"
            color={palette.grey[400]}
            textAlign="center"
          >
            <Box>
              <Typography
                variant="h2"
                sx={{ color: palette.tertiary[500], fontWeight: 600 }}
              >
                About Me
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: palette.secondary.dark, fontWeight: 600 }}
              >
                A dedicated Developer Based on Laguna, Philippines
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "1rem", margin: "1rem" }}>
              {upperContent}
            </Typography>
            <Typography sx={{ fontSize: "1rem", margin: "1rem" }}>
              {lowerContent}
            </Typography>
          </FlexCenter>
        </FlexCenter>
      ) : (
        <FlexCenter margin={3} flexDirection="column">
          {/* If is Mobile */}
          <FlexCenter
            width="30%"
            flexDirection="column"
            color={palette.grey[100]}
          >
            <img
              alt=""
              src="./src/assets/images.jpg"
              style={{ width: "100%" }}
            />
          </FlexCenter>

          <FlexCenter
            flexDirection="column"
            color={palette.grey[400]}
            textAlign="center"
          >
            <Typography
              variant="h1"
              sx={{ color: palette.tertiary[500], fontWeight: 600 }}
            >
              About Me
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: palette.secondary.dark, fontWeight: 600 }}
            >
              A dedicated Developer Based on Laguna, Philippines
            </Typography>
            <Typography sx={{ fontSize: "1rem", margin: "1rem" }}>
              {upperContent}
            </Typography>
            <Typography sx={{ fontSize: "1rem", margin: "1rem" }}>
              {lowerContent}
            </Typography>
          </FlexCenter>
        </FlexCenter>
      )}
    </FlexCenter>
  );
};

export default About;
