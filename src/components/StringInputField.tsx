import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";

export type StringInputFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const StringInputField = ({
  placeholder,
  value,
  onChangeText,
}: StringInputFieldProps) => {
  return (
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default StringInputField;

const styles = StyleSheet.create({});
