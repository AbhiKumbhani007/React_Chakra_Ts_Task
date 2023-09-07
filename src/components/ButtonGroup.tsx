import {
  Box,
  HStack,
  Text,
  useRadio,
  useRadioGroup,
  chakra,
  VStack,
} from "@chakra-ui/react";
import webAppLogo from "../icons/dashboard.svg";
import dataStoreLogo from "../icons/db.svg";

import clusterLogo from "../icons/cluster.svg";
import { buttonPrimary } from "../constants/colors";

interface RadioButtonGrpProps {
  options: string[];
  orientations: "horizontal" | "vertical";
  fontSize?: string;
}

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        _checked={{
          color: buttonPrimary,
        }}
        px={1}
        fontSize={{ base: "xs", md: "md" }}
        fontWeight={"semibold"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <chakra.img
          src={
            props.value === "Web Apps"
              ? webAppLogo
              : props.value === "DataStore"
              ? dataStoreLogo
              : props.value === "Clusters"
              ? clusterLogo
              : ""
          }
        />

        <Text paddingLeft={1}>{props.children}</Text>
      </Box>
    </Box>
  );
}

function RadioButtonGrp({ options, orientations }: RadioButtonGrpProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "Web Apps",
  });

  const group = getRootProps();

  const Stack = orientations === "horizontal" ? HStack : VStack;

  return (
    <Stack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </Stack>
  );
}

export default RadioButtonGrp;
