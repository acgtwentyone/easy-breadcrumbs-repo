import React, { useState } from 'react'
import { EasyBreadcrumb } from 'react-native-easy-breadcrumbs'

const App = () => {
  const [crumbs, setCrumbs] = useState([
    { id: 0, title: 'Crumb 1' },
    { id: 1, title: 'Crumb 2' },
  ])
  const [selectedCrumb, setSelectedCrumb] = useState<number>(0)

  return (
    <EasyBreadcrumb
      crumbs={crumbs}
      setCrumbs={setCrumbs}
      selectedCrumb={selectedCrumb}
      setSelectedCrumb={setSelectedCrumb}
    />
  )
}

export default App
