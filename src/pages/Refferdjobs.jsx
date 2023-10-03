import { Box } from "@chakra-ui/react";
import Tablebox from "../components/table";
import DropdownBox from "../components/dropdown";
import { useState } from "react";



const RefferdJobs = () => {
    let [box,setbox] = useState([ {
        title:"Employe Refferd Jobs",
        Component : Tablebox,
    },
    {
        title:"Vendor Refferd Jobs",
        Component : Tablebox,
    }
]);

    return (
      <>
        <Box width="80%" className="myprofile">
         {
          box?.map(element =>
                  <DropdownBox title={element.title} Component={element.Component} />
          )
         } 
        </Box>
      </>
    );
}

export default RefferdJobs;