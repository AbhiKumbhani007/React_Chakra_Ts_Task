import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  Text,
  chakra,
} from "@chakra-ui/react";
import { TiFlash } from "react-icons/ti";
import { buttonPrimary, buttonSecondary } from "../../constants/colors";
import laptopLogo from "../../icons/laptop.svg";
import clusterLogo from "../../icons/cluster.svg";
import dataStoreLogo from "../../icons/datastore.svg";

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
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
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
        </MenuButton>
        <MenuList fontSize={"16"}>
          <MenuItem
            display={"flex"}
            alignItems={"center"}
            pb={2}
            _hover={{
              fontWeight: "medium",
            }}
          >
            <chakra.img src={laptopLogo} w={4} h={4} />
            <Text pl={2} fontSize={15}>
              New App
            </Text>
          </MenuItem>
          <MenuItem
            display={"flex"}
            alignItems={"center"}
            pb={2}
            _hover={{
              fontWeight: "medium",
            }}
          >
            <chakra.img src={dataStoreLogo} w={4} h={4} />
            <Text pl={2} fontSize={15}>
              New DataStore
            </Text>
          </MenuItem>
          <MenuItem
            display={"flex"}
            alignItems={"center"}
            pb={2}
            _hover={{
              fontWeight: "medium",
            }}
          >
            <chakra.img src={clusterLogo} w={4} h={4} />
            <Text pl={2} fontSize={15}>
              New Cluster
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default NavbarButtons;
