import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (<Box mr="4" textAlign="right">
        <Text>
          Tiago Pierre
        </Text>
        <Text color="gray.300" fontSize="small">
          tiago_pierre@outlook.com
        </Text>
      </Box>)}
      <Avatar size="md" name='Tiago Pierre' src="https://github.com/tiagopierre.png" />
    </Flex>)
}