import { Button as ChakraButton } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledButton = styled(ChakraButton);

export const Button = (props) => {
  return <ChakraButton className={"test-button"} {...props} />;
};
