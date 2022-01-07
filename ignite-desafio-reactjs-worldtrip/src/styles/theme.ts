import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585B",
      "600": "#4B4D63",
      "500": "#999999",
      "400": "#DADADA",
    },
    yellow: {
      "800": "#FFBA08",
    },
    black: {
      "900": "#000000",
      "800": "#1D1D1D",
    },
    white: {
      "900": "#FFFFFF",
      "800": "#F5F8FA",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white.800',
        color: 'gray.700'
      }
    }
  }
})