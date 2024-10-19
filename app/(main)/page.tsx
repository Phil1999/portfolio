import { Box, Container, Heading, Image } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        Hello, I&apos;m a software engineer based in Seattle, Washington!
      </Box>

      <Box display={{ md: 'flex' }} alignItems="center">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Philip Lee
          </Heading>
          <p>Software Engineer ( Developer)</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/headshot.png"
            alt="Profile Image"
            mx="auto"
          />
        </Box>
      </Box>
    </Container>
  )
}
