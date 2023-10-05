import Tablebox from "../components/table";
import { Box } from "@chakra-ui/react";


const SavedJobs = () => {
    return (
        <>

            <Tablebox btncolor='red' btn_title='DELETE' path='*' jobslist={[]} />
            
        </>
    )
}

export default SavedJobs;