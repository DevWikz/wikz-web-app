import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import OnBoardingPage from './pages/OnBoardingPage/OnBoarding.page'
import AppNavbarComp from './components/navbars/app.navbar.comp'
import HomePage from './pages/HomePage/Home.page'
import AppFooterComp from './components/footer/app.footer.comp'

const App = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(true)

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

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(<App />)
