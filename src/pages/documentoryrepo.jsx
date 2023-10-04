import { Box } from "@chakra-ui/react";
import Tablebox from "../components/table";
import DropdownBox from "../components/dropdown";



const DocumentoryRepo = () => {
    return (
        <>
        <Box m='auto'  w='80%' mt='7em'>
        <DropdownBox title={'Emplotment offer Letter'} Component={Tablebox} />
        </Box>
        </>
    )
}

export default DocumentoryRepo;
