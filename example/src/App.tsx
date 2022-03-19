import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Crumb, EasyBreadcrumb } from 'react-native-easy-breadcrumbs'

// interface Folder {
//   id: number
//   name: string
// }

const App = () => {
  const [crumbs, setCrumbs] = useState<Crumb[]>([
    { id: 0, title: 'Root' },
    /**
     * opcional additional items ex:
     */
    // { id: 2, title: 'Second Crumb' },
    // { id: 3, title: 'Third Crumb' },
    // { id: 4, title: 'Four Crumb' },
  ])
  // set first crumb as selected
  const [selectedCrumb, setSelectedCrumb] = useState<Crumb>({
    id: 0,
    title: 'Root',
  })

  /**
   * Fired when a crumb is pressed
   * @param crumb Crumb
   */
  const __onCrumbPress = (crumb: Crumb) => {
    console.log(crumb.id)
    // console.log('Selected', `Crumb ${crumb.title} selected`)
  }

  /**
   * Ex: imagine we are using creating a breadcrumb to navigate between folders
   */
  // const folders: Folder[] = [
  //   { id: 1, name: 'Documents 2019' },
  //   { id: 2, name: 'Documents 2020' },
  //   { id: 3, name: 'Documents 2021' },
  // ]

  /**
   * Intended to set selected crumb based on folder pressed
   * @param folder Folder
   */
  // const __onFolderPress = (folder: Folder) => {
  //   let crumb = { id: folder.id, title: folder.name }
  //   if (crumbs.filter((item) => item.id === crumb.id).length === 0)
  //     setCrumbs([...crumbs, crumb])

  //   setSelectedCrumb(crumb)
  // }

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
      {/* <View style={styles.folderContainer}>
        {folders.map((folder) => (
          <Text
            key={folder.id}
            style={styles.folderName}
            onPress={() => __onFolderPress(folder)}
          >
            {folder.name}
          </Text>
        ))}
      </View> */}
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
