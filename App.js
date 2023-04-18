import React from 'react'
import { SafeAreaView } from 'react-native'

import LoginScreen from './src/screens/login/LoginScreen'
import RegisterScreen from './src/screens/register/RegisterScreen'

export default function App() {
  return (
    <SafeAreaView>
      <RegisterScreen />
      {/**
       * <LoginScreen />
       */}
    </SafeAreaView>
  )
}
