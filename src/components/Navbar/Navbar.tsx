import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  chakra,
  useToast,
} from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";
import bellLogo from "../../icons/bell.svg";
import billingLogo from "../../icons/billing.svg";
import logoutLogo from "../../icons/logout.svg";
import settingsLogo from "../../icons/settings.svg";
import Searchbar from "../Searchbar";
import NavbarButtons from "./NavbarButtons";

export default function Navbar(props: { searchText: (text: string) => void }) {
  const { searchText } = props;

  const toast = useToast();

  return (
    <Box
      px={4}
      boxShadow={"md"}
      position={"sticky"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"full"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Text fontWeight={"semibold"}>Cloud Nation.</Text>
          </HStack>

          <Box display={{ base: "none", md: "flex" }}>
            <Searchbar onChange={searchText} />
          </Box>

          <Flex alignItems={"center"}>
            <Box display={{ base: "none", md: "inline-flex" }}>
              <NavbarButtons />
            </Box>
            <Button
              aria-label={""}
              className="px-[10px]"
              bg={"white"}
              _hover={{
                bg: "white",
              }}
              onClick={() =>
                toast({
                  title: "Notification",
                  description: "You have 1 new notification",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                })
              }
              display={{ base: "none", lg: "flex", md: "flex" }}
            >
              <chakra.img src={bellLogo} />
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList fontSize={"16"} width={270}>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  pb={2}
                  _hover={{
                    fontWeight: "medium",
                  }}
                >
                  <MdAccountCircle size={22} />
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Text pl={2}>Account</Text>
                    <Text fontSize={"13"} color={'gray.600'} pl={2}>
                      abhi1234kumbhani@gmail.com
                    </Text>
                  </Box>
                </MenuItem>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  pb={2}
                  _hover={{
                    fontWeight: "medium",
                  }}
                >
                  <chakra.img src={settingsLogo} w={5} h={5} />
                  <Text pl={2}>Settings</Text>
                </MenuItem>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  pb={2}
                  _hover={{
                    fontWeight: "medium",
                  }}
                >
                  <chakra.img src={billingLogo} w={5} h={5} />
                  <Text pl={2}>Billings</Text>
                </MenuItem>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  pb={2}
                  _hover={{
                    fontWeight: "medium",
                  }}
                >
                  <chakra.img src={logoutLogo} w={5} h={5} />
                  <Text pl={2}>Sign Out</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
