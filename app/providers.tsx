'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../libs/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
