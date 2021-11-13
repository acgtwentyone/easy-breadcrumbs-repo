import React, { useEffect } from 'react'
import RNEasyBreadcrumbModule, { Counter } from 'react-native-easy-breadcrumbs'

const App = () => {
  useEffect(() => {
    console.log(RNEasyBreadcrumbModule)
  })

  return <Counter />
}

export default App
