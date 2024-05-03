import { ChakraProvider } from "@chakra-ui/react";
import AppContainer from "../AppContainer";
import theme from "../../config/theme";
import ContactForm from "../ContactForm/ContactForm";

function ContactCard() {
  return (
    <ChakraProvider theme={theme}>
      <AppContainer>
        <ContactForm />
      </AppContainer>
    </ChakraProvider>
  );
}

export default ContactCard;
