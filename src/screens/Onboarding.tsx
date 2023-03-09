import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

export type OnboardingProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Onboarding = ({ title, description, children }: OnboardingProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
