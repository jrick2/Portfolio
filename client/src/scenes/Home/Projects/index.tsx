import BoxContent from "@/components/BoxContent";
import BoxShadow from "@/components/BoxShadow";
import FlexCenter from "@/components/FlexCenter";
import { Box, useMediaQuery } from "@mui/material";

const Projects = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1120px)");
  return (
    <Box width="100%" height="100%">
      <FlexCenter>Hello</FlexCenter>

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
            title="Code Abe"
            website="https://client-blog-post-app.onrender.com"
            desciption="As a self-taught web developer, I have dedicated significant effort to honing my skills and improving my efficiency.aaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            tech1="React"
            tech2="Css"
            tech3="Express"
            github="https://github.com/jrick2/Finance-app-MERN"
            img="./src/assets/img3.jpg"
          />
        </BoxShadow>
        <BoxShadow>
          <BoxContent
            title="Code Abe"
            website="https://client-blog-post-app.onrender.com"
            desciption="As a self-taught web developer, I have dedicated significant effort to honing my skills and improving my efficiency."
            github="https://github.com/jrick2/Finance-app-MERN"
            img="./src/assets/img3.jpg"
          />
        </BoxShadow>
        <BoxShadow>
          <BoxContent
            title="Code Abe"
            website="https://client-blog-post-app.onrender.com"
            desciption="As a self-taught web developer, I have dedicated significant effort to honing my skills and improving my efficiency."
            github="https://github.com/jrick2/Finance-app-MERN"
            img="./src/assets/img3.jpg"
          />
        </BoxShadow>
      </Box>
    </Box>
  );
};

export default Projects;
