import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ProfileCardProps {
  name: string;
  studentId: string;
  department: string;
  bio: string;
}

export default function ProfileCard({
  name,
  studentId,
  department,
  bio,
}: ProfileCardProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.idBadge}>ID: {studentId}</Text>
      <Text style={styles.role}>{department}</Text>

      <View style={styles.divider} />

      <Text style={styles.bio}>{bio}</Text>

      <Pressable
        style={styles.button}
        onPress={() => setIsFollowing(!isFollowing)}
      >
        <Text style={styles.buttonText}>
          {isFollowing ? "Following" : "Follow"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 28,
    width: "88%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#0D9488",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0D1F4E",
    marginBottom: 2,
  },
  idBadge: {
    fontSize: 12,
    color: "#0D9488",
    backgroundColor: "#E1F5EE",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    marginBottom: 4,
    overflow: "hidden",
  },
  role: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 16,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E2E8F0",
    marginBottom: 16,
  },
  bio: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#0D9488",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});