import { Box, Text } from "@chakra-ui/react";
import Categoriebox from "../helper/popularcatbox";
import engineer from "../assests/images/common/Engeneeringlogo@2x.png";

const Popularcaegories = () => {
  return (
    <Box w="80%" m="auto">
      <Text fontSize="2xl" my="10" fontWeight="semibold">
        {" "}
        Popular Categories
      </Text>
      <Box className="popular_container">
        <Categoriebox title="engineer" logo={engineer} />
        <Categoriebox title="engineer" logo={engineer} />
        <Categoriebox title="engineer" logo={engineer} />

        <Categoriebox title="engineer" logo={engineer} />
        <Categoriebox title="engineer" logo={engineer} />
      </Box>
    </Box>
  );
};

export default Popularcaegories;
