import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type PressableButtonProps = { onPress?: () => void; title: string }

function PressableButton({ title, onPress }: PressableButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        android_ripple={{
          color: '#CBC3E3',
          borderless: true,
        }}
        onPress={() => onPress && onPress()}
      >
        <Text style={styles.pressableText}>{title}</Text>
      </Pressable>
    </View>
  )
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
  },
})
