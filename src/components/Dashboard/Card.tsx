import { Box, Button, Divider, Grid, Text, chakra } from "@chakra-ui/react";
import contentArray from "./content";
import { buttonPrimary } from "../../constants/colors";

interface CardProps {
  id: number;
  title: string;
  bgColour: string;
  textColour: string;
  btnText: string;
  logo: string;
  description: string;
  span: number;
}

function DashboardCard() {
  return (
    <Box>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
      >
        {contentArray.map((item) => (
          <Card item={item} />
        ))}
      </Grid>
    </Box>
  );
}

export default DashboardCard;

function Card(props: { item: CardProps }) {
  const { id, title, bgColour, textColour, btnText, logo, description, span } =
    props.item;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      p={5}
      key={id}
      bg={bgColour}
      borderRadius={18}
      gridColumn={["span 1", "span 1", `span ${span}`]}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text fontSize={18} fontWeight={"semibold"}>
            {title}
          </Text>
          <Box>
            <chakra.img src={logo} alt="laptop" h={6} w={6} />
          </Box>
        </Box>
        <Divider borderBottomWidth={3} py={2} />
        <Box display={"flex"} justifyContent={"start"}>
          <Text
            fontSize={14}
            fontWeight={"normal"}
            color={textColour}
            textAlign={"justify"}
          >
            {description}
          </Text>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"end"} alignItems={"center"} pt={4}>
        <Button
          bg={buttonPrimary}
          color={"white"}
          borderRadius={10}
          size={"sm"}
          _hover={{
            bg: buttonPrimary,
          }}
        >
          {btnText}
        </Button>
      </Box>
    </Box>
  );
}
