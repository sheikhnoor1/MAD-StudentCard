import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <StatusBar style="dark" />

      <ProfileCard
  name="Sheikh Noor"
  studentId="22-49639-3"
  department="Computer Science - AIUB"
  bio="Passionate about mobile app development."
  skills={[
    "React Native",
    "JavaScript",
    "Expo"
  ]}
/>

      <ProfileCard
  name="Rakib Rahman"
  studentId="22-67890-2"
  department="Computer Science - AIUB"
  bio="Interested in AI and full-stack web development."
  skills={[
    "Python",
    "AI",
    "Node.js"
  ]}
/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F0F4F8",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
});