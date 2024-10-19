import { Box, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box as="footer" py={4} textAlign="center" color="grey" mt={8}>
      <Text>
        © {new Date().getFullYear()} Philip Lee. All rights reserved.
      </Text>
    </Box>
  )
}
