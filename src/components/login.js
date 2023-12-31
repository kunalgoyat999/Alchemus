import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  Link,
  Checkbox,
} from '@chakra-ui/react';
import PasswordInput from '../helper/PasswordInput';
import FormController from '../helper/FormController';
import { Link as Links } from 'react-router-dom';

const LoginBox = () => {
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    loginId: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const newErrors = {};

    if (!formData.loginId.trim()) {
      newErrors.loginId = 'Login ID is required.';
    }

    if (!formData.password.trim() || formData.password === '') {
      newErrors.password = 'Password is required.';
    }

    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Perform your login logic here
      // You can access form data with formData.loginId and formData.password
      console.log(formData);
    }
  };

  return (
    <>
      <FormController
        label='Login Id'
        placeholder='Enter your Login Id'
        name='loginId'
        value={formData.loginId}
        onChange={(e) => setFormData({ ...formData, loginId: e.target.value })}
        error={errors.loginId}
      />

      <FormControl isRequired my='1em' isInvalid={!!errors.password}>
        <FormLabel>Enter your Password</FormLabel>
        <PasswordInput
          name='password'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControl>

      <Box className='checkBox_box'>
        <Checkbox size='sm' colorScheme='blue'>
          Remember Credentials
        </Checkbox>

        <Link color='red.400' fontSize='sm'>
          <Links to='/resetPassword'>Forgot Password</Links>
        </Link>
      </Box>
      <Box className='login_submit'>
        <Button
          type='submit'
          colorScheme='blue'
          bg='#4160D8'
          size='md'
          my='1em'
          w='30%'
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </Box>
    </>
  );
};

export default LoginBox;
