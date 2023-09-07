import { Box, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import RadioButtonGrp from "../ButtonGroup";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import NavbarMenu from "./NavbarMenu";
import { secondaryNavbarBg } from "../../constants/colors";

function NavbarBottomTab(props: { searchText: (text: string) => void }) {
  const { searchText } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={secondaryNavbarBg}
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

export default NavbarBottomTab;
