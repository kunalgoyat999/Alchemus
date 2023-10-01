import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Radio,
  Link,
  Button,
  background,
} from "@chakra-ui/react";
import "../App.css";
const Tablebox = ({ btn_title, path, jobslist }) => {
  return (
    <>
      <Button
        colorScheme="blue"
        bg="#4160D8"
        fontSize="medium"
        fontWeight="normal"
        px="3em"
        ml="10%"
        my="2em"
        mt='7em'
      >
        {`${btn_title} >`}
      </Button>
      <TableContainer
        w="80%"
        m="auto"
        border="1px solid #D9D9D9"
        borderRadius="0.5em"
      >
        <Table variant="striped" colorScheme="whiteAlpha" size="lg">
          <Thead className="table_head">
            <Tr background="#FAFAFA">
              <Th></Th>
              <Th>#Reffernce</Th>
              <Th>Location</Th>
              <Th>Date Applied</Th>
              <Th>Job Category</Th>
              <Th>Job Type</Th>
              <Th>Resume</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody className="table_body">
            <Tr>
              <Td>
                <input
                  type="radio"
                  name="Job_title"
                  id="table_radio"
                  value="1"
                  defaultChecked
                />
              </Td>
              <Td>
                <Link color="blue.500">65454-sdvsdv</Link>{" "}
              </Td>
              <Td>Irvine , California , USA</Td>
              <Td>08/30/2023</Td>
              <Td>incurence</Td>
              <Td>Claims Analyst</Td>
              <Td>
                <Link color="blue">dfvdvd</Link>
              </Td>
              <Td>
                {" "}
                <Box className="Box_Status">Applied</Box>{" "}
              </Td>
            </Tr>
            <Tr background="#FAFAFA">
              <Td>
                <input
                  type="radio"
                  name="Job_title"
                  id="table_radio"
                  value="1"
                />
              </Td>
              <Td>
                <Link color="blue.400">65454-sdvsdv</Link>{" "}
              </Td>
              <Td>Irvine , California , USA</Td>
              <Td>08/30/2023</Td>
              <Td>incurence</Td>
              <Td>Claims Analyst</Td>
              <Td>
                <Link color="blue">dfvdvd</Link>
              </Td>
              <Td>
                {" "}
                <Box className="Box_Status">Applied</Box>{" "}
              </Td>
            </Tr>
            <Tr>
              <Td>
                <input
                  type="radio"
                  name="Job_title"
                  id="table_radio"
                  value="1"
                />
              </Td>
              <Td>
                <Link color="blue.400">65454-sdvsdv</Link>{" "}
              </Td>
              <Td>Irvine , California , USA</Td>
              <Td>08/30/2023</Td>
              <Td>incurence</Td>
              <Td>Claims Analyst</Td>
              <Td>
                <Link color="blue">dfvdvd</Link>
              </Td>
              <Td>
                {" "}
                <Box className="Box_Status">Applied</Box>{" "}
              </Td>
            </Tr>
            <Tr background="#FAFAFA">
              <Td>
                <input
                  type="radio"
                  name="Job_title"
                  id="table_radio"
                  value="1"
                />
              </Td>
              <Td>
                <Link color="blue.400">65454-sdvsdv</Link>{" "}
              </Td>
              <Td>Irvine , California , USA</Td>
              <Td>08/30/2023</Td>
              <Td>incurence</Td>
              <Td>Claims Analyst</Td>
              <Td>
                <Link color="blue">dfvdvd</Link>
              </Td>
              <Td>
                {" "}
                <Box className="Box_Status">Applied</Box>{" "}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tablebox;
