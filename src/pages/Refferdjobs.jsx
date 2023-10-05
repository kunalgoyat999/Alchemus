import { Box } from "@chakra-ui/react";
import Tablebox from "../components/table";
import DropdownBox from "../components/dropdown";
import { useState } from "react";



const RefferdJobs = () => {
  let [box, setbox] = useState([{
    title: "Employee Refferred Job(s) for (4)",
    Component: Tablebox,
  },
  {
    title: "Vendor Refferred Job(s) for (4)",
    Component: Tablebox,
  }
  ]);

  return (
    <>
      <Box width="60%" className="myprofile">
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