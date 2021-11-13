import React from 'react'
import { NativeModules, StyleSheet, Text, View } from 'react-native'

import AppTouchableOpacity from '../src/AppTouchableOpacity'

interface Crumb {
  id: number
  title: string
}

interface Props {
  containerStyle?: {}
  crumbItemStyle?: {}
  crumbs: Crumb[]
  crumbTextStyle?: {}
  onCrumbPress?: ((crumbId: number) => void | undefined) | undefined | null
  selectedCrumb: number | null
  selectedCrumbStyle?: {}
  setSelectedCrumb: (crumbId: number) => void
  setCrumbs: (crumbs: Crumb[]) => void
  unselectedCrumbStyle?: {}
}

export const EasyBreadcrumb: React.FC<Props> = ({
  crumbs,
  onCrumbPress,
  containerStyle,
  crumbItemStyle,
  crumbTextStyle,
  selectedCrumbStyle,
  unselectedCrumbStyle,
  selectedCrumb,
  setSelectedCrumb,
}) => {
  const onPress = (crumbId: number) => {
    setSelectedCrumb(crumbId)
    onCrumbPress ? onCrumbPress(crumbId) : ''
  }

  return (
    <View style={[styles.container, { ...containerStyle }]}>
      {crumbs.map(({ id, title }) => {
        return (
          <AppTouchableOpacity
            key={id}
            onPress={onPress}
            style={
              id === selectedCrumb
                ? [styles.selectedCrumb, { ...selectedCrumbStyle }]
                : [styles.unselectedCrumb, { ...unselectedCrumbStyle }]
            }
          >
            <View style={[styles.crumbItem, { ...crumbItemStyle }]}>
              <Text style={(styles.crumbText, { ...crumbTextStyle })}>
                {title}
              </Text>
            </View>
          </AppTouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 200,
  },

  crumbItem: {},

  crumbText: {},

  selectedCrumb: {},

  unselectedCrumb: {},
})

export default NativeModules.RNEasyBreadcrumbsModule
