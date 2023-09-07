import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { TiFlash } from "react-icons/ti";

function NavbarButtons() {
  return (
    <Box display={"flex"}>
      <Button
        fontSize={"md"}
        borderRadius={10}
        marginRight={2}
        fontWeight={600}
        color={"#9837CA"}
        bg={"#F6E4FF"}
        size={{ base: "sm", md: "md" }}
        _hover={{
          bg: "#F6E4FF",
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
          <Text
            fontSize={"sm"}
            display={"flex"}
            wordBreak={"normal"}
            paddingLeft={2}
          >
            Credits Left
          </Text>
        </Box>
      </Button>

      <Button
        fontSize={"sm"}
        borderRadius={10}
        className="px-[10px]"
        fontWeight={600}
        color={"white"}
        bg={"#9837CA"}
        size={{ base: "sm", md: "md" }}
        _hover={{
          bg: "#9837CA",
        }}
        rightIcon={<ChevronDownIcon />}
      >
        Add New
      </Button>
    </Box>
  );
}

export default NavbarButtons;
