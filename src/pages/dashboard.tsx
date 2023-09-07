import { Box, Text } from "@chakra-ui/react";
import DashboardCard from "../components/Dashboard/Card";
import { dashboardCardText } from "../constants/colors";

function Dashboard() {
  return (
    <Box className="w-full h-full flex items-center justify-center p-5 lg:px-10 lg:pt-5">
      <Box className="w-full lg:w-11/12">
        <Box className="flex flex-col justify-start items-start">
          <Text fontWeight={"bold"} fontSize={{ base: "xl", lg: "2xl" }}>
            Get Started
          </Text>
          <Text
            fontSize={{ base: 14, lg: 16 }}
            fontWeight={"normal"}
            color={dashboardCardText}
            textAlign={"left"}
          >
            Choose what you want to deploy and we’ll get it done in seconds
          </Text>
        </Box>
        <Box pt={5}>
          <DashboardCard />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
