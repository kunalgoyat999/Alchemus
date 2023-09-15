import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Box,
  Button,
  Link
} from '@chakra-ui/react';
import PasswordInput from '../helper/PasswordInput';
import FormController from '../helper/FormController';
import {  Link as Links } from 'react-router-dom';

const Loginbox = () => {
  return (
    <>
      <FormController lable='Login Id' placeholder='Enter your Login Id' />

      <FormControl isRequired my='1em'>
        <FormLabel>Enter your Password</FormLabel>
        <PasswordInput />
      </FormControl>

      <Box className='checkBox_box' >
        <Checkbox size='sm' colorScheme='blue'>
          Remember credentials
        </Checkbox>
        
        <Link color='red.400' fontSize='sm' ><Links to='/resetPassword'>Forget Password</Links></Link>
      </Box>
      <Box className='login_submit'>
        <Button colorScheme='blue' bg='#4160D8' size='md' my='1em' w='30%'>Log In</Button>
      </Box>
    </>
  )
}

export default Loginbox;