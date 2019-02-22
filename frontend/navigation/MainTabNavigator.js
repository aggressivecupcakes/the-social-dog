import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import Login from "../components/login/index.js";
import Signup from "../components/signup";
import Map from "../components/map/index.js";
import CreateProfile from "../components/createProfile";
import CreateProfileAddFamily from "../components/createProfileAddFamily";
import Colors from "../constants/Colors";
import AddEventForm from "../components/addEventForm/addEventForm";
import EventScreen from "../screens/EventScreen";
import FriendScreen from "../screens/FriendScreen";
import createProfile from "../components/createProfile";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type="AntDesign"
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "calendar"}`
          : "calendar"
      }
    />
  )
};

const EventStack = createStackNavigator({
  Events: EventScreen
});

EventStack.navigationOptions = {
  tabBarLabel: "Events",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type="AntDesign"
      name={Platform.OS === "ios" ? "calendar" : "calendar"}
    />
  )
};

const FriendStack = createStackNavigator({
  Login: FriendScreen
});

FriendStack.navigationOptions = {
  tabBarLabel: "Friends",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type="Feather"
      name={Platform.OS === "ios" ? "users" : "users"}
    />
  )
};

const CreateProfileStack = createStackNavigator({
  CreateProfile: CreateProfile
});

CreateProfileStack.navigationOptions = {
  tabBarLabel: "Create Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const CreateProfileAddFamilyStack = createStackNavigator({
  CreateProfileAddFamily: CreateProfileAddFamily
});

CreateProfileAddFamilyStack.navigationOptions = {
  tabBarLabel: "Add Family",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: createProfile
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type="Feather"
      name={Platform.OS === "ios" ? "user" : "user"}
    />
  )
};

export default createBottomTabNavigator(
  {
    EventStack,
    FriendStack,
    ProfileStack,
    CreateProfileStack,
    CreateProfileAddFamilyStack
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.desire
    }
  }
);
