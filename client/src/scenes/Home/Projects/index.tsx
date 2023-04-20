import BoxContent from "@/components/BoxContent";
import BoxShadow from "@/components/BoxShadow";
import FlexCenter from "@/components/FlexCenter";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Projects = () => {
  const { palette } = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1120px)");
  return (
    <Box width="100%" height="auto">
      <FlexCenter margin={2} flexDirection="column">
        <Typography variant="h2" sx={{ color: palette.tertiary[500] }}>
          PORTPOLIO
        </Typography>
        <Box
          display={isNonMobileScreens ? "flex" : "block"}
          textAlign="center"
          gap={1}
        >
          <Typography variant="h2" sx={{ color: palette.grey[200] }}>
            Each project is a unique piece of development
          </Typography>
          <EmojiEmotionsIcon sx={{ color: "white", fontSize: "2rem" }} />
        </Box>
      </FlexCenter>

      <Box
        display="grid"
        height="100%"
        padding={4}
        gap="1.5rem"
        justifyContent="center"
        gridTemplateColumns={isNonMobileScreens ? "75%" : "1fr"}
        gridAutoRows="1fr"
      >
        <BoxShadow>
          <BoxContent
            title="Finance"
            website="https://finance-client.onrender.com"
            desciption="A financial management website that business use
                        to track there overall growth and loss.
                        They are visually represented through charts and graphs."
            tech1="Mern"
            tech2="Recharts"
            tech3="Regression"
            github="https://github.com/jrick2/Finance-app-MERN"
            img="./src/assets/img3.jpg"
          />
        </BoxShadow>
        <BoxShadow>
          <BoxContent
            title="Social Media"
            website="https://client-blog-post-app.onrender.com"
            desciption="a social media website that's designed to connect
             you with like-minded individuals from all around the world. With this website, you can create a profile that showcases your interests, skills, and personality, and connect with others who share your passions"
            tech1="MUI"
            tech2="Redux Js"
            tech3="multer"
            github="https://github.com/jrick2/Mern-app-Blog-Post"
            img="./src/assets/img2.jpg"
          />
        </BoxShadow>
        <BoxShadow>
          <BoxContent
            title="Subscription"
            website="https://client-course.onrender.com"
            desciption="a subscription website
             that provides you with exclusive and personalized learning opportunities. With this website, you can access a wide range of courses and tutorials that are tailored to your specific interests and preferences"
            tech1="stripe"
            tech2="JWT"
            tech3="router dom"
            github="https://github.com/jrick2/fullStack-subscription"
            img="./src/assets/img.jpg"
          />
        </BoxShadow>
      </Box>
    </Box>
  );
};

export default Projects;
