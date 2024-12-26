import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";

export default function Networking() {
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async (limit = 10) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    ).then((data) => data.json());
    setList(res);
    setIsLoading(false);
  };
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} color={"green"} />
        <Text style={styles.nameText}>Fetching Data...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.nameText}>{item.id}</Text>
                <Text style={styles.nameText}>{item.title}</Text>
                <Text style={styles.nameText}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          ListEmptyComponent={() => <Text>No Data Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
          refreshing={refreshing}
          onRefresh={() => handleRefresh()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    paddingTop: StatusBar.currentHeight,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#333333",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center", // Center the loading spinner
    alignItems: "center", // Center the loading spinner
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  nameText: {
    fontSize: 30,
  },
  typeText: {
    fontSize: 24,
    color: "#666666",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: "center",
  },
});
