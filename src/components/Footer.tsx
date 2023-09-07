import { Box, Link } from "@chakra-ui/react";

const footerLeftSide = ["© CloudNation 2023", "Support", "Documnetation"];

const footerRightSide = ["Privacy", "Terms of Services "];

function Footer() {
  return (
    <Box
      className="w-full h-full flex items-center justify-center px-10 pb-3"
      maxWidth={{ xl: "1920px" }}
      marginLeft={{ xl: "auto" }}
      marginRight={{ xl: "auto" }}
    >
      <Box
        className="w-full lg:w-11/12 flex flex-col lg:flex-row md:flex-row sm:flex-row justify-start items-center lg:justify-between lg:items-center md:justify-between md:items-center sm:justify-start sm:items-center"
        gap={{ base: 3, lg: 6 }}
      >
        <Box
          className="flex flex-row justify-start items-center lg:justify-start lg:items-start md:justify-start md:items-start sm:justify-start sm:items-start"
          gap={{ base: 3, lg: 6 }}
        >
          {footerLeftSide.map((item, index) => (
            <Link fontWeight={"semibold"} fontSize={"13"} key={index} href="#">
              {item}
            </Link>
          ))}
        </Box>
        <Box
          className="flex flex-row justify-start items-center lg:justify-start lg:items-start md:justify-start md:items-start sm:justify-start sm:items-start"
          gap={{ base: 3, lg: 6 }}
        >
          {footerRightSide.map((item, index) => (
            <Link fontWeight={"semibold"} fontSize={"13"} key={index} href="#">
              {item}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
