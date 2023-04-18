type Props = {
  logo: string;
  link: string;
  rgb?: string;
};

const Link = ({ logo, link, rgb }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        alt=""
        src={logo}
        width="40"
        height="40"
        style={{
          backgroundColor: rgb ? rgb : "",
          borderRadius: rgb ? rgb : "inherit",
        }}
      />
    </a>
  );
};

export default Link;
