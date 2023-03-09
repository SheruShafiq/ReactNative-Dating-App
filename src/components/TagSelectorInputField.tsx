import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export type DateInputProps = {
  options: string[];
};

const TagSelectorInputField = ({ options }: DateInputProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <View>
      <Text>Select your options</Text>
      <View>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              selectedOptions.includes(option) && styles.selectedOption,
            ]}
            onPress={() => handleSelectOption(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.selectedOptions}>
        Selected options: {selectedOptions.join(", ")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {},
  selectedOption: {
    backgroundColor: "#0066CC",
  },
  optionText: {
    fontSize: 16,
  },
  selectedOptions: {
    marginTop: 20,
  },
});

export default TagSelectorInputField;
