import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

type TextInputFieldProps = TextInputProps

function TextInputField({
  placeholder,
  value,
  onChangeText,
  ...rest
}: TextInputFieldProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.field}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  )
}
export { TextInputField }
const styles = StyleSheet.create({
  field: {
    backgroundColor: '#eee',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
})
