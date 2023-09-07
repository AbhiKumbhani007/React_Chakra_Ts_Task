import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  chakra,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdAccountCircle, MdPayment } from "react-icons/md";
import bellLogo from "../../icons/bell.svg";
import RadioButtonGrp from "../ButtonGroup";
import Searchbar from "../Searchbar";
import NavbarButtons from "./NavbarButtons";
import NavbarMenu from "./NavbarMenu";

export default function Navbar(props: { searchText: (text: string) => void }) {
  const { searchText } = props;

  const toast = useToast();

  return (
    <Box
      maxWidth={{ xl: "1920px" }}
      marginLeft={{ xl: "auto" }}
      marginRight={{ xl: "auto" }}
      width={"100%"}
    >
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
                display={{ base: "none", lg: "flex", md:'flex' }}
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
                <MenuList fontSize={"16"}>
                  <MenuItem
                    display={"flex"}
                    alignItems={"center"}
                    pb={2}
                    _hover={{
                      fontWeight: "medium",
                    }}
                  >
                    <MdAccountCircle size={22} />
                    <Text pl={2}>Account</Text>
                  </MenuItem>
                  <MenuItem
                    display={"flex"}
                    alignItems={"center"}
                    pb={2}
                    _hover={{
                      fontWeight: "medium",
                    }}
                  >
                    <FiSettings size={22} />
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
                    <MdPayment size={22} />
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
                    <AiOutlinePoweroff size={22} />
                    <Text pl={2}>Sign Out</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <NavbarBottomTab searchText={searchText} />
    </Box>
  );
}

function NavbarBottomTab(props: { searchText: (text: string) => void }) {
  const { searchText } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={4}
      >
        <HStack spacing={8} alignItems={"center"}>
          <RadioButtonGrp
            options={["Web Apps", "DataStore", "Clusters"]}
            orientations="horizontal"
          />
        </HStack>
        <HStack
          spacing={8}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <RadioButtonGrp
            options={["Documentation", "Support"]}
            orientations="horizontal"
          />
        </HStack>
        <IconButton
          size={"sm"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>
      {isOpen ? (
        <NavbarMenu
          searchText={searchText}
          options={["Documentation", "Support", "Notifications"]}
        />
      ) : null}
    </>
  );
}
