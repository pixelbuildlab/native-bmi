import React from 'react'
import {
  Pressable,
  PressableAndroidRippleConfig,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'

type PressableButtonProps = {
  onPress?: () => void
  title: string
  pressableStyles?: StyleProp<any>
  isDisable?: boolean
}

function PressableButton({
  title,
  onPress,
  pressableStyles = {},
  isDisable,
}: PressableButtonProps) {
  return (
    <View style={{ ...styles.container, ...pressableStyles }}>
      <Pressable
        style={{ ...styles.pressable }}
        android_ripple={isDisable ? null : rippleConfig}
        onPress={() => onPress && onPress()}
      >
        <Text style={styles.pressableText}>{title}</Text>
      </Pressable>
    </View>
  )
}
const rippleConfig: PressableAndroidRippleConfig = {
  color: '#d66ae5',
  borderless: true,
}

export { PressableButton }
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cd00ea',
    marginVertical: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableText: {
    color: 'white',
    padding: 16,
    fontSize: 15,
  },
})
