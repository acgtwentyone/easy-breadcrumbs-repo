import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Crumb, EasyBreadcrumb } from 'react-native-easy-breadcrumbs'

interface Folder {
  id: number
  name: string
}

const App = () => {
  const [crumbs, setCrumbs] = useState([
    { id: 0, title: 'Root' },
    // { id: 2, title: 'Second Crumb' },
    // { id: 3, title: 'Third Crumb' },
    // { id: 4, title: 'Four Crumb' },
  ])
  const [selectedCrumb, setSelectedCrumb] = useState<Crumb>({
    id: 0,
    title: 'Root',
  })

  const __onCrumbPress = (crumb: Crumb) => {
    // console.log(crumb.id)
    // Alert.alert('Selected', `Crumb ${crumb.title} selected`)
  }

  const folders: Folder[] = [
    { id: 1, name: 'Documents 2019' },
    { id: 2, name: 'Documents 2020' },
    { id: 3, name: 'Documents 2021' },
  ]

  const __onFolderPress = (folder: Folder) => {
    // Alert.alert('Selected', `Crumb ${folder.name} selected`)
    let crumb = { id: folder.id, title: folder.name }
    if (crumbs.filter((item) => item.id === folder.id).length === 0) {
      setCrumbs([...crumbs, crumb])
      setSelectedCrumb(crumb)
    } else {
      setSelectedCrumb(crumb)
    }
  }

  return (
    <>
      <EasyBreadcrumb
        crumbs={crumbs}
        setCrumbs={setCrumbs}
        selectedCrumb={selectedCrumb}
        setSelectedCrumb={setSelectedCrumb}
        onCrumbPress={(crumb) => __onCrumbPress(crumb)}
        // chevron={false}
        // selectedCrumbTextStyle={styles.selectedCrumbText}
      />
      <View style={styles.folderContainer}>
        {folders.map((folder) => (
          <Text
            key={folder.id}
            style={styles.folderName}
            onPress={() => __onFolderPress(folder)}
          >
            {folder.name}
          </Text>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  folderContainer: {
    padding: 16,
  },

  folderName: {
    marginVertical: 8,
  },

  selectedCrumbText: {
    color: 'red',
  },
})

export default App
