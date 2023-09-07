import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { useState } from "react";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import NavbarBottomTab from "./components/Navbar/NavbarBottom";
import Dashboard from "./pages/dashboard";

export const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (value: string) => setSearchText(value);

  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        fontSize="xl"
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"} // Ensures the root box takes up at least the full height of the viewport
        justifyContent={"space-between"} // Distribute space between items
        alignItems={"center"}
        w={"full"}
      >
        <Box
          maxWidth={{ xl: "1920px" }}
          marginLeft={{ xl: "auto" }}
          marginRight={{ xl: "auto" }}
          width={"100%"}
          flex="1" // This will make sure it takes all available space, pushing the footer to the bottom
        >
          <Navbar searchText={handleSearchTextChange} />
          <NavbarBottomTab searchText={handleSearchTextChange} />
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Router>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};
