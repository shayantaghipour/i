import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return <VStack py={8} px={6} gap={4}>
    <SuggestedHeader />

    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
        Suggested for you
      </Text>
      <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
        See All
      </Text>
    </Flex>


    <SuggestedUser name="Michael Jackson" followers={1392} avatar='https://hips.hearstapps.com/hmg-prod/images/michael-jackson-performs-in-concert-circa-1986-news-photo-1680813884.jpg' />
    <SuggestedUser name="Eminem" followers={567} avatar='https://www.chipublib.org/wp-content/uploads/sites/3/2022/09/36079964425_7b3042d5e1_k.jpg' />
    <SuggestedUser name="Snoop Dog" followers={759} avatar={'https://m.media-amazon.com/images/M/MV5BMjE2OTUwNTk4NF5BMl5BanBnXkFtZTcwMjMwOTk0NA@@._V1_FMjpg_UX1000_.jpg'} />

    <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
      © 2025 Buit By{" "}
      <Link href="https://github.com/shayantaghipour" target="_blank" color="blue.500" fontSize={14}>
          Shayan Taghipour
      </Link>

    </Box>
  </VStack>;
};

export default SuggestedUsers