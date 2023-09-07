import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { TiFlash } from "react-icons/ti";
import { buttonPrimary, buttonSecondary } from "../../constants/colors";

function NavbarButtons() {
  return (
    <Box display={"flex"}>
      <Button
        fontSize={"md"}
        borderRadius={10}
        marginRight={2}
        fontWeight={600}
        color={buttonPrimary}
        bg={buttonSecondary}
        size={{ base: "sm", md: "md" }}
        _hover={{
          bg: buttonSecondary,
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TiFlash size={24} />
          <Text>350</Text>
          <Box display={"flex"} flexDirection={"column"} pl={2} py={1}>
            <Text fontSize={"12"} display={"flex"} wordBreak={"normal"}>
              Credits
            </Text>
            <Text fontSize={"12"} display={"flex"} wordBreak={"normal"}>
              Left
            </Text>
          </Box>
        </Box>
      </Button>

      <Button
        fontSize={"sm"}
        borderRadius={10}
        className="px-[10px]"
        fontWeight={600}
        color={"white"}
        bg={buttonPrimary}
        size={{ base: "sm", md: "md" }}
        _hover={{
          bg: buttonPrimary,
        }}
        rightIcon={<ChevronDownIcon />}
      >
        Add New
      </Button>
    </Box>
  );
}

export default NavbarButtons;
