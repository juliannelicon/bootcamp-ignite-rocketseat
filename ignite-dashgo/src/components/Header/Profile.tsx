import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Julianne</Text>
          <Text color="gray.300" fontSize="small">
            juliannelicon@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Julianne" src="https://github.com/juliannelicon.png"/>
    </Flex>
  );
}