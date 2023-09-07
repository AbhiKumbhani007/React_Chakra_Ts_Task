import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { useState } from "react";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarBottomTab from "./components/Navbar/NavbarBottom";
import Dashboard from "./pages/dashboard";
import Footer from "./components/Footer";
import { scrollbarStyle } from "./utility/commonStyles";

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
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
      >
        <Box
          maxWidth={{ xl: "1920px" }}
          marginLeft={{ xl: "auto" }}
          marginRight={{ xl: "auto" }}
          width={"100%"}
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
