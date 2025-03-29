import { GlobalStyles, ThemeProvider } from "@mui/material"
import { RegistrationPage } from "./pages/RegistrationPage"
import theme from "./theme"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ html: { margin: 0 }, body: { margin: 0 } }} />
      <RegistrationPage />
    </ThemeProvider>

  )
}
