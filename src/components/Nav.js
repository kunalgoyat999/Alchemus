import { Box, Image } from "@chakra-ui/react";
import alchemus from '../assests/AlchemusLogo_1.jpg'
const NavBar = () => {

    return (
        <Box w='80%' m='auto' my='1em'>
        <Image src={alchemus} alt='Alchemus Logo' />
      </Box>
    )
}

export default NavBar;