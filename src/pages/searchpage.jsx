import { Box, Button, Image, Input, InputGroup } from "@chakra-ui/react";
import "../assests/styles.css";
import "../assests/css/searchpage.css";
import SelectInput from "../helper/SelectInput";
import { useEffect, useState } from "react";
import Popularcaegories from "../components/popularcategories";
import Recentjobs from "../components/recentjobs";
import home_banner from '../assests/images/common/Home_banner.jpg'
const Searchpage = () => {
  let [opt, setOption] = useState(["opt1", "opt2", "opt3", "opt4"]);
  let [query,setQuery] = useState ("")
  let [onSearch, setOnsearch] = useState(true);
  useEffect(()=>{
    
  },[query])

  return (
    <>
    <Image src={home_banner} alt="home_banner" className="home_banner"/>
      <Box className="search_box" bg="var(--lightBlue)">
        <Box className="search_boxInput" bg="white" borderRadius="5">
          <Input
            fontSize="small"
            placeholder="Enter Skills/Designations/compaines"
            value={query}
            onChange={(e)=>{
               setQuery(e.target.value)
            }}
          />
          <SelectInput placeholder="Job Category" options={opt} />
          <SelectInput placeholder="Country" options={opt} />
          <Button colorScheme="blue" bg="#4160D8" fontSize="small" w="70%" onClick={()=>setOnsearch(false)}>
            Search
          </Button>
        </Box>
      </Box>
      {
      onSearch&&query==="" && <Popularcaegories />
      }
      <Recentjobs />
    </>
  );
};

export default Searchpage;
