import { JSX } from "react";
import { StyleSheet, View } from "react-native";
import CircleButton from "../components/CircleButton";
import Header from "../components/Header";
import MemoListItem from "../components/MemoListItem";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default Index;
