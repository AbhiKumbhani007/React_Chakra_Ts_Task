import {
  Box,
  ChakraProvider,
  Text,
  VStack,
  theme
} from "@chakra-ui/react";
import { useState } from "react";
import { Logo } from "./Logo";
import Navbar from "./components/Navbar/Navbar";

export const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (value: string) => setSearchText(value);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar searchText={handleSearchTextChange} />
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Logo h="20vmin" pointerEvents="none" />
          <Text fontSize={{base:"xs", lg:'lg', md:'md', sm:"sm"}} pt={4} maxWidth={"80%"} >
            Write Something in <b> Search Box</b>, and Click on <b>Bell Icon</b>{" "}
            to See Toast
          </Text>

          {searchText && (
            <Box display={"flex"}>
              <Text fontWeight={"semibold"} px={2}>
                Search Text:
              </Text>
              <Text> {searchText}</Text>
            </Box>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
};
