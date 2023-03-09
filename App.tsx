import { Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import Onboarding, { OnboardingProps } from "./src/screens/Onboarding";
import StringInputField from "./src/components/StringInputField";
import RadioInputField from "./src/components/RadioInputField";
import DateInputField from "./src/components/DateInputField";
import TagSelectorInputField from "./src/components/TagSelectorInputField";

type RootStackParamList = {
  Name: undefined;
  BirthDate: undefined;
  Gender: undefined;
  PrefferedGender: undefined;
  FavouriteGenre: undefined;
  YourProfilePhoto: undefined;
  DoneMakingProfile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const NameScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  const [value, onChangeText] = React.useState("Useless Placeholder" as string);
  const handleNext = () => {
    // Navigate to the next screen with the name as a parameter
    navigation.navigate("BirthDate" as never);
  };

  return (
    <Onboarding title={""} description={"Please enter your First Name"}>
      <StringInputField
        placeholder="Jaegar"
        value={value}
        onChangeText={onChangeText}
      />
      <Button title="Next" onPress={handleNext} />
    </Onboarding>
  );
};

const BirthDate = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    // Navigate to the next screen with the name as a parameter
    navigation.navigate("Gender" as never);
  };

  return (
    <Onboarding title={""} description={"Please enter your Birthdate"}>
      <DateInputField DateTimemode={"date"} />
      <Button title="Next" onPress={handleNext} />
    </Onboarding>
  );
};

const GenderScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    // Navigate to the next screen with the name as a parameter
    navigation.navigate("PrefferedGender" as never);
  };
  const gender = ["Male", "Female"];

  return (
    <Onboarding title={""} description={"Please enter your gender"}>
      <RadioInputField gender={gender} />
      <Button title="Next" onPress={handleNext} />
    </Onboarding>
  );
};

const PrefferedGenderScreen = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    // Navigate to the next screen with the name as a parameter
    navigation.navigate("FavouriteGenre" as never);
  };
  const gender = ["Male", "Female", "Jojo", "Jojo with a cooch", "Rodger?"];

  return (
    <Onboarding title={""} description={"Please enter your preffered gender"}>
      <RadioInputField gender={gender} />
      <Button title="Next" onPress={handleNext} />
    </Onboarding>
  );
};

const FavouriteGenreScreen = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    // Navigate to the next screen with the name as a parameter
    navigation.navigate("YourProfilePhotoScreen" as never);
  };
  const options = [
    "Action",
    "Beat 'em up",
    "Tactical role-playing",
    "Simulation",
    "Turn-based tactics",
  ];
  return <TagSelectorInputField options={options} />;
};

const YourProfilePhotoScreen = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    // Navigate to the next screen with the name as a parameter
    navigation.navigate("PrefferedGender" as never);
  };
  const gender = ["Male", "Female", "Jojo", "Jojo with a cooch", "Rodger?"];

  return (
    <Onboarding title={""} description={"Please enter your preffered gender"}>
      <RadioInputField gender={gender} />
      <Button title="Next" onPress={handleNext} />
    </Onboarding>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Name">
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="BirthDate" component={BirthDate} />
        <Stack.Screen name="Gender" component={GenderScreen} />
        <Stack.Screen
          name="PrefferedGender"
          component={PrefferedGenderScreen}
        />
        <Stack.Screen name="FavouriteGenre" component={FavouriteGenreScreen} />
        {/*  <Stack.Screen
          name="YourProfilePhoto"
          component={YourProfilePhotoScreen}
        /> 
        <Stack.Screen
          name="DoneMakingProfile"
          component={DoneMakingProfileScreen}
        /> 
        
        
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
