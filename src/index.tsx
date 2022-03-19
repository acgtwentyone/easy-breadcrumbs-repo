import React from 'react'
import { FlatList, NativeModules, StyleSheet, Text, View } from 'react-native'

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
  flatlist?: boolean
  unselectedCrumbStyle?: {}
  unselectedCrumbTextStyle?: {}
  horizontal?: boolean
  contentContainerStyle?: {}
  flatlistProps?: {}
}

interface RenderItemProps {
  item: Crumb
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
  flatlist = true,
  unselectedCrumbStyle,
  unselectedCrumbItemStyle,
  unselectedCrumbTextStyle,
  horizontal = false,
  contentContainerStyle,
  flatlistProps,
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

  const RenderItem: React.FC<RenderItemProps> = ({ item }) => (
    <>
      <AppTouchableOpacity
        key={item.id}
        onPress={() => onPress(item)}
        style={
          item === selectedCrumb
            ? [styles.selectedCrumb, { ...selectedCrumbStyle }]
            : [styles.unselectedCrumb, { ...unselectedCrumbStyle }]
        }
      >
        <View
          style={
            item === selectedCrumb
              ? [styles.selectedCrumbItem, { ...selectedCrumbItemStyle }]
              : [styles.unselectedCrumbItem, { ...unselectedCrumbItemStyle }]
          }
        >
          <Text
            style={
              item === selectedCrumb
                ? [styles.selectedCrumbText, { ...selectedCrumbTextStyle }]
                : [styles.unselectedCrumbText, { ...unselectedCrumbTextStyle }]
            }
          >
            {item.title}
          </Text>
        </View>
      </AppTouchableOpacity>
      )
    </>
  )

  const renderItem: React.FC<RenderItemProps> = ({ item }) => (
    <RenderItem item={item} />
  )

  const __renderCrumbs = () => {
    return (
      <>
        {crumbs.map((crumb) => {
          return <RenderItem item={crumb} />
        })}
      </>
    )
  }

  return (
    <>
      {flatlist ? (
        <FlatList
          data={crumbs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={horizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.contentContainerStyle,
            { ...contentContainerStyle },
          ]}
          {...flatlistProps}
        />
      ) : (
        <View style={[styles.container, { ...containerStyle }]}>
          {__renderCrumbs()}
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 16,
  },

  chevron: {
    marginLeft: 8,
  },

  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
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
