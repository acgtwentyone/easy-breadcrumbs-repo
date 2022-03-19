import React from 'react'
import { NativeModules, ScrollView, StyleSheet, Text, View } from 'react-native'

import AppTouchableOpacity from './AppTouchableOpacity'

export interface Crumb {
  id: number
  title: string
}

interface Props {
  containerStyle?: {}
  selectedCrumbItemStyle?: {}
  unselectedCrumbItemStyle?: {}
  crumbs: Crumb[]
  selectedCrumbTextStyle?: {}
  onCrumbPress?: ((crumb: Crumb) => void | undefined) | undefined | null
  selectedCrumb: Crumb | null
  selectedCrumbStyle?: {}
  setSelectedCrumb: (crumb: Crumb) => void
  setCrumbs: (crumbs: Crumb[]) => void
  scrollable?: boolean
  unselectedCrumbStyle?: {}
  unselectedCrumbTextStyle?: {}
}

export const EasyBreadcrumb: React.FC<Props> = ({
  crumbs,
  onCrumbPress,
  containerStyle,
  selectedCrumbTextStyle,
  selectedCrumbItemStyle,
  selectedCrumbStyle,
  selectedCrumb,
  setCrumbs,
  setSelectedCrumb,
  scrollable = true,
  unselectedCrumbStyle,
  unselectedCrumbItemStyle,
  unselectedCrumbTextStyle,
}) => {
  const onPress = (crumb: Crumb) => {
    onCrumbPress ? onCrumbPress(crumb) : ''
    // make a separate copy of the crumbs
    var copyOfCrumbs = [...crumbs]
    const selectedIndex = copyOfCrumbs.indexOf(
      crumbs.filter((item) => item.id === crumb.id)[0]
    )
    if (selectedIndex !== -1) {
      copyOfCrumbs.splice(selectedIndex + 1)
      setCrumbs(copyOfCrumbs)
    }
    setSelectedCrumb(crumb)
  }

  const __renderCrumbs = () => {
    return (
      <>
        {crumbs.map((crumb) => {
          return (
            <AppTouchableOpacity
              key={crumb.id}
              onPress={() => onPress(crumb)}
              style={
                crumb === selectedCrumb
                  ? [styles.selectedCrumb, { ...selectedCrumbStyle }]
                  : [styles.unselectedCrumb, { ...unselectedCrumbStyle }]
              }
            >
              <View
                style={
                  crumb === selectedCrumb
                    ? [styles.selectedCrumbItem, { ...selectedCrumbItemStyle }]
                    : [
                        styles.unselectedCrumbItem,
                        { ...unselectedCrumbItemStyle },
                      ]
                }
              >
                <Text
                  style={
                    crumb === selectedCrumb
                      ? [
                          styles.selectedCrumbText,
                          { ...selectedCrumbTextStyle },
                        ]
                      : [
                          styles.unselectedCrumbText,
                          { ...unselectedCrumbTextStyle },
                        ]
                  }
                >
                  {crumb.title}
                </Text>
              </View>
            </AppTouchableOpacity>
          )
        })}
      </>
    )
  }

  return (
    <>
      {scrollable ? (
        <View>
          <ScrollView
            contentContainerStyle={[styles.scrollview, { ...containerStyle }]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {__renderCrumbs()}
          </ScrollView>
        </View>
      ) : (
        <View style={[styles.container, { ...containerStyle }]}>
          {__renderCrumbs()}
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  chevron: {
    marginLeft: 8,
  },

  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
  },

  scrollview: {
    paddingHorizontal: 16,
  },

  selectedCrumbItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },

  unselectedCrumbItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },

  selectedCrumbText: {
    fontWeight: 'bold',
    color: '#000',
  },

  unselectedCrumbText: {
    fontWeight: 'normal',
  },

  selectedCrumb: {
    marginEnd: 16,
  },

  unselectedCrumb: {
    marginEnd: 16,
  },
})

export default NativeModules.RNEasyBreadcrumbsModule
