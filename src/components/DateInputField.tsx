import { StyleSheet, Button, View, Text } from "react-native";
import React, { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export type DateInputProps = {
  DateTimemode: any;
};

const DateInput = ({ DateTimemode }: DateInputProps) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View>
      <Text>The Date is: {date.toDateString()}</Text>
      <Button onPress={showDatepicker} title="Select date and time" />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={DateTimemode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({});
