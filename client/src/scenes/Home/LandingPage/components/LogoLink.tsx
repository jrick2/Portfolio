import FlexBetween from "@/components/Flexbetween";
import Link from "@/components/LogoLink";
import { Typography, useTheme } from "@mui/material";

const LogoLink = () => {
  const { palette } = useTheme();

  return (
    <>
      {/* To make it cleaner */}
      <Typography
        variant="h1"
        sx={{ color: palette.primary[100], fontSize: "2rem", fontWeight: 500 }}
      >
        Tech Stack
      </Typography>
      <FlexBetween gap={3} marginTop={1}>
        <Link
          link="https://www.nodejs.com/"
          logo="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
        />
        <Link
          link="https://www.python.org"
          logo="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        />

        <Link
          link="https://www.typescriptlang.org/"
          logo="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
        />

        <Link
          link="https://www.expressjs.com/"
          logo="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
          rgb="white"
        />

        <Link
          link="https://react.dev/"
          logo="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        />

        <Link
          link="https://www.mongodb.com/"
          logo="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
        />

        <Link
          link="https://code.visualstudio.com/"
          logo="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
        />
      </FlexBetween>
    </>
  );
};

export default LogoLink;
