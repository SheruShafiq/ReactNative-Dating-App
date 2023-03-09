import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
export type RadioInputFieldProps = {
  gender: string[];
};

const Radio = ({ gender }: RadioInputFieldProps) => {
  const [checked, setChecked] = useState(0);
  return (
    <View>
      <View>
        {gender.map((gender, key) => {
          return (
            <View key={gender}>
              {checked == key ? (
                <TouchableOpacity style={styles.btn}>
                  <Text>{gender}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                  }}
                  style={styles.btn}
                >
                  {/* <Image
                    style={styles.img}
                    source={require("../images/radio_Unchecked.png")}
                  /> */}
                  <Text>{gender}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
      <Text>{gender[checked]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: "row",
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    paddingHorizontal: 10,
    alignItems: "center",
  },
});

export default Radio;
