import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export default function CustomField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
      }}
    >
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={true}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text
          style={{
            color: '#8B0000',
            fontWeight: '700'
          }}
        >
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
