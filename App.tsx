import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { StyleSheet, View,Platform } from "react-native";
import HomeTab from "./tabs/hometab/home.tab";
import ScoreTab from "./tabs/scoretab/score.tab";
import TrailerTab from "./tabs/trailertab/trailer.tab";
import Header from "./components/header/header.component";
import GameTab from "./tabs/gametab/game.tab";

import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';

const Stack=createStackNavigator()

const App: React.FC = () => {
  const [showTrailer, setTrailer] = useState<boolean>(true);

  useEffect(()=>{
      checkStorage()
  },[])

  const checkStorage=async()=>{
    try {
      const value=await AsyncStorage.getItem('topTenNames')
      if(!value){
        await AsyncStorage.setItem('topTenNames',JSON.stringify([]))
      }
      const name=await AsyncStorage.getItem("name")
      if(!name){
        await AsyncStorage.setItem("name","")
      }
      const score=await AsyncStorage.getItem("score")
      if(!score){
        await AsyncStorage.setItem("score","0")
      }
    } catch (e) {
      console.log(e)
    }
  }


  setTimeout(() => {
    setTrailer(false);
  }, 2000);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showTrailer ? null : <Header title="Quiz Me" />}
      {showTrailer?<TrailerTab/>:<Navigation/>}
    </View>
  );
};

const Navigation=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="hometab" screenOptions={{headerShown:false}}>
        <Stack.Screen name="hometab" component={HomeTab}/>
        <Stack.Screen name="gametab" component={GameTab}/>
        <Stack.Screen name="scoretab" component={ScoreTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default App;
