import { useState, useEffect } from 'react'

import './index.css'
import OnBoardingPage from './pages/OnBoardingPage/OnBoarding.page'
import AppNavbarComp from './components/navbars/app.navbar.comp'
import HomePage from './pages/HomePage/Home.page'
import AppFooterComp from './components/footer/app.footer.comp'

const App = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnBoarding(false)
    }, 5000) // 5 saniye sonra kaybolacak

    return () => clearTimeout(timer) // Cleanup function
  }, [])

  return (
    <div>
      {showOnBoarding && <OnBoardingPage />}  
      <AppNavbarComp />  
      <HomePage />
      <AppFooterComp />
    </div>
  )
}

export default App