import { Input, InputGroup, InputRightElement, chakra } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import searchLogo from "../icons/search_logo.svg";

function Searchbar(props: { onChange: (text: string) => void}) {
  const { onChange } = props;

  const [searchText, setSearchText] = useState("");

  const previousSearchText = useRef("");

  const handleSearchTextChange = (value: string) => setSearchText(value);

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;

    if (previousSearchText.current !== searchText || onChange) {
      typingTimer = setTimeout(() => {
        onChange(searchText);
      }, 1000);
    }
    return () => {
      clearTimeout(typingTimer);
    };
  }, [searchText, onChange]);

  return (
    <InputGroup
      size={"md"}
      w={{lg: "md"}}
    >
      <Input
        pr="4.5rem"
        type={"text"}
        placeholder="Quick Search"
        value={searchText}
        bg={"white"}
        onChange={(e) => handleSearchTextChange(e.target.value)}
      />
      <InputRightElement width="4.5rem">
        <chakra.img src={searchLogo} />
      </InputRightElement>
    </InputGroup>
  );
}

export default Searchbar;
