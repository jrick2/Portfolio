import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FlexCenter from "./FlexCenter";
import GitHubIcon from "@mui/icons-material/GitHub";

type Props = {
  title: string;
  desciption: string;
  img: string;
  github: string;
  website: string;
  tech1?: string;
  tech2?: string;
  tech3?: string;
};

const BoxContent = ({
  title,
  desciption,
  img,
  github,
  website,
  tech1,
  tech2,
  tech3,
}: Props) => {
  const { palette } = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1120px)");

  return (
    <>
      {isAboveMediumScreens ? (
        <FlexCenter textAlign="center" height="100%">
          <Box margin={2}>
            <a href={website} target="_blank" rel="noreferrer">
              <img
                alt=""
                src={img}
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </a>
          </Box>

          <Box width="70%">
            <Box>
              <Typography
                variant="h2"
                margin={0.5}
                sx={{ color: palette.secondary.light, fontWeight: 400 }}
              >
                {title}
              </Typography>
              <Typography sx={{ color: palette.grey[400] }}>
                {desciption}
              </Typography>
              <FlexCenter gap={1} margin={1}>
                <Typography sx={{ fontSize: "18px", color: palette.grey[500] }}>
                  {tech1}
                </Typography>
                <Typography
                  sx={{ fontSize: "18px", color: palette.secondary[500] }}
                >
                  {tech2}
                </Typography>
                <Typography
                  sx={{ fontSize: "18px", color: palette.tertiary[500] }}
                >
                  {tech3}
                </Typography>
              </FlexCenter>
            </Box>
            <a href={github} style={{ color: "inherit" }}>
              <Button>
                <Typography>Code</Typography>
                <GitHubIcon />
              </Button>
            </a>

            <a href={website} style={{ color: "inherit" }}>
              <Button>
                <Typography>Live </Typography>
                <OpenInNewIcon />
              </Button>
            </a>
          </Box>
        </FlexCenter>
      ) : (
        <FlexCenter flexDirection="column" height="100%">
          <Typography
            variant="h2"
            margin={0.5}
            sx={{ color: palette.secondary.light, fontWeight: 400 }}
          >
            {title}
          </Typography>
          <Box margin={0.5}>
            <a href={website} target="_blank" rel="noreferrer">
              <img
                alt=""
                src={img}
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </a>
          </Box>

          <FlexCenter flexDirection="column" width="100%" textAlign="center">
            <Box>
              <Typography sx={{ color: palette.grey[400] }}>
                {desciption}
              </Typography>
            </Box>
            <FlexCenter gap={1} margin={1}>
              <Typography sx={{ fontSize: "18px", color: palette.grey[500] }}>
                {tech1}
              </Typography>
              <Typography
                sx={{ fontSize: "18px", color: palette.secondary[500] }}
              >
                {tech2}
              </Typography>
              <Typography
                sx={{ fontSize: "18px", color: palette.tertiary[500] }}
              >
                {tech3}
              </Typography>
            </FlexCenter>
            <FlexCenter margin={0.5}>
              <a href={github} style={{ color: "inherit" }}>
                <Button>
                  <Typography>Code</Typography>
                  <GitHubIcon />
                </Button>
              </a>

              <a href={website} style={{ color: "inherit" }}>
                <Button>
                  <Typography>Live</Typography>
                  <OpenInNewIcon />
                </Button>
              </a>
            </FlexCenter>
          </FlexCenter>
        </FlexCenter>
      )}
    </>
  );
};

export default BoxContent;
