import { Box, Button, Input, InputGroup } from "@chakra-ui/react";
import "../assests/styles.css";
import "../assests/css/searchpage.css";
import SelectInput from "../helper/SelectInput";
import { useState } from "react";
import Popularcaegories from "../components/popularcategories";
import Recentjobs from "../components/recentjobs";

const Searchpage = () => {
  let [opt, setOption] = useState(["opt1", "opt2", "opt3", "opt4"]);
  return (
    <>
      <Box className="search_box" bg="var(--lightBlue)">
        <Box className="search_boxInput" bg="white" borderRadius="5">
          <Input
            fontSize="small"
            placeholder="Enter Skills/Designations/compaines"
          />
          <SelectInput placeholder="Job Category" options={opt} />
          <SelectInput placeholder="Country" options={opt} />
          <Button colorScheme="blue" bg="#4160D8" fontSize="small" w="70%">
            Search
          </Button>
        </Box>
      </Box>
      <Popularcaegories />
      <Recentjobs />
    </>
  );
};

export default Searchpage;
