import {
  Image,
  StyleSheet,
  Platform,
  Text,
  ImageComponent,
  ImageBackground,
  ImageBackgroundComponent,
  ImageBase,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import Greet from "@/components/codevolution/Greet";
import MultiStyleBox from "@/components/codevolution/MultiStyle";
import Box from "@/components/codevolution/Box";
import DimensionsAPI from "@/components/codevolution/DimensionsAPI";
import UseWindowDim from "@/components/codevolution/UseWindowDim";
const logo = require("../../assets/images/adaptive-icon.png");

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Ram Ram Vaai!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   <ScrollView>
    //     <Image
    //       source={{ uri: "https://picsum.photos/200" }}
    //       style={{ height: 200 }}
    //     />
    //     <Button
    //       title="Open Modal"
    //       onPress={() => setIsModalVisible(true)}
    //       color="crimson"
    //     />
    //     <Modal
    //       visible={isModalVisible}
    //       onRequestClose={() => setIsModalVisible(false)}
    //       animationType="slide"
    //       presentationStyle="pageSheet" //works only in ios
    //     >
    //       <Image
    //         source={{ uri: "https://picsum.photos/200" }}
    //         style={{ height: 200, marginTop: 40 }}
    //       />
    //       <Button
    //         title="Close Modal"
    //         onPress={() => setIsModalVisible(false)}
    //       />
    //     </Modal>
    //   </ScrollView>
    // </View>
    // <View style={{ flex: 1, backgroundColor: "goldenrod", padding: 60 }}>
    //   <StatusBar backgroundColor={"crimson"} barStyle={"dark-content"} />
    //   <ActivityIndicator size={"large"} />
    //   <ActivityIndicator size={"small"} />
    //   <ActivityIndicator size={"large"} color={"red"} />
    //   <ActivityIndicator size={"large"} animating={false} />
    // </View>
    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   <Button
    //     title="Test ALert"
    //     onPress={() =>
    //       Alert.alert("Why are you mad?", "I am not mad, I am serious", [
    //         {
    //           text: "Why?",
    //           onPress: () => {
    //             console.log("You can kill Batman");
    //           },
    //         },
    //         {
    //           text: "Wingardium Leviossa",
    //           onPress: () => {
    //             console.log("Voldi Baddy!");
    //           },
    //         },
    //       ])
    //     }
    //   />
    // </View>
    // <View style={styles.container}>
    //   {/* <Greet name={"Bruce Bhai Banner"} /> */}
    //   {/* <MultiStyleBox name1={"Superman"} name2={"IronMan"} /> */}
    //   <Box style={{ backgroundColor: "#121212" }}>Box 1</Box>
    //   <Box style={{ backgroundColor: "#5456f5" }}>Box 2</Box>
    //   <Box style={{ backgroundColor: "#656" }}>Box 3</Box>
    //   <Box style={{ backgroundColor: "#aaa666" }}>Box 4</Box>
    //   <Box style={{ backgroundColor: "navy" }}>Box 5</Box>
    //   <Box style={{ backgroundColor: "crimson" }}>Box 6</Box>
    //   <Box style={{ backgroundColor: "#faa555" }}>Box 7</Box>
    // </View>
    <View style={styles.container}>
      {/* <DimensionsAPI></DimensionsAPI> */}
      <UseWindowDim/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 64,
    // borderWidth: 6,
    // borderColor: "red",
    backgroundColor: "plum",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
