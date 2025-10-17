import { AppWrapper } from "./App.styles"
import { Header } from "./components/header/Header"
import { TimeDashboard } from "./components/time-dashboard/TimeDashboard"

export const App = () => {
  return (
    <AppWrapper>
      <Header/>
      <TimeDashboard />
    </AppWrapper>
  )
}

