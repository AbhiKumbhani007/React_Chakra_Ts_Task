import { Box, Button, Popover, Stack } from "@chakra-ui/react";
import Searchbar from "../Searchbar";
import NavbarButtons from "./NavbarButtons";
interface RadioButtonGrpProps {
  options: string[];
  searchText: (text: string) => void;
}

function NavbarMenu({ options, searchText }: RadioButtonGrpProps) {
  const handleSearchTextChange = (value: string) => searchText(value);

  return (
    <Popover>
      <Box
        p={4}
        display={{ md: "none" }}
        boxShadow={"md"}
        bg={"gray.100"}
        zIndex={90}
      >
        <Searchbar onChange={handleSearchTextChange} />

        <Stack gap={0} mt={3} ml={1} align={"left"}>
          {options.map((option, index) => (
            <Stack direction={"row"} align={"center"} key={index}>
              <Button
                variant="ghost"
                p={0}
                m={0}
                fontSize={"13"}
                fontWeight={"medium"}
                bg={"inherit"}
              >
                {option}
              </Button>
            </Stack>
          ))}
        </Stack>
        <NavbarButtons />
      </Box>
    </Popover>
  );
}

export default NavbarMenu;
