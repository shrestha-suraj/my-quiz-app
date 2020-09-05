import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeTab from "./tabs/hometab/home.tab";
import ScoreTab from "./tabs/scoretab/score.tab";
import TrailerTab from "./tabs/trailertab/trailer.tab";
import Header from "./components/header/header.component";
import GameTab from "./tabs/gametab/game.tab";

const App: React.FC = () => {
  const [showTrailer, setTrailer] = useState<boolean>(true);

  setTimeout(() => {
    setTrailer(false);
  }, 2000);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showTrailer ? null : <Header title="Quiz Me" />}
      {/* {showTrailer?<TrailerTab/>:<HomeTab/>} */}
      {showTrailer?<TrailerTab/>:<GameTab/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default App;
