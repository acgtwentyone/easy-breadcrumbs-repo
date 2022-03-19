import React, { ReactElement } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  children: ReactElement<any, any> | null
  hitSlop?:
    | { top: number; right: number; left: number; bottom: number }
    | undefined
  onPress?: (crumbId: number) => void | undefined
  props?: any | undefined
  style?: {} | undefined
}

const AppTouchableOpacity: React.FC<Props> = ({
  children,
  hitSlop,
  onPress,
  props,
  style,
}: Props) => {
  return (
    <TouchableOpacity
      hitSlop={hitSlop ? hitSlop : { top: 8, bottom: 8, left: 16, right: 16 }}
      style={[styles.container, { ...style }]}
      {...props}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default AppTouchableOpacity
