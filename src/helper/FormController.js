import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Box,
  Button,
} from "@chakra-ui/react";
import PasswordInput from "./PasswordInput";

const FormController = ({ lable, placeholder, w }) => {
  console.log(placeholder, "ff");
  return (
    <>
      <FormControl isRequired my="1em">
        <FormLabel>{lable}</FormLabel>
        <Input fontSize="small" placeholder={placeholder} w={w || "100%"} />
      </FormControl>
    </>
  );
};

export default FormController;
