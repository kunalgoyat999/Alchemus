import { Box, Text } from "@chakra-ui/react";
import JobBox from "../helper/Job_box";

const Recentjobs = () => {
  return (
    <>
      <Box w="80%" m="auto">
        <Text fontSize="2xl" my="10" fontWeight="semibold">
          {" "}
          Popular Categories
        </Text>
        <Box className="recentjobs_container">
          <JobBox
            title="Software tester"
            type="Permanent"
            company="Marks INC."
            location="mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software tester"
            type="Permanent"
            company="Marks INC."
            location="mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software tester"
            type="Permanent"
            company="Marks INC."
            location="mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software tester"
            type="Permanent"
            company="Marks INC."
            location="mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software tester"
            type="Permanent"
            company="Marks INC."
            location="mumbai, india"
            date="9th nov 2022"
          />
          <JobBox
            title="Software tester"
            type="Permanent"
            company="Marks INC."
            location="mumbai, india"
            date="9th nov 2022"
          />
        </Box>
      </Box>
    </>
  );
};

export default Recentjobs;
