import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

const FormController = ({ label, placeholder, name, value, onChange, error }) => {
  return (
    <FormControl my="1em" isInvalid={error}>
      <FormLabel>{label}</FormLabel>
      <Input
        fontSize="small"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormController;
