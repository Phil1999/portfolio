import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Box, Flex } from '@chakra-ui/react'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />

      <Box as="main" flex="1" px={4} pt="60px">
        {children}
      </Box>

      <Footer />
    </Flex>
  )
}
