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
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    isPosting: false,
  });

  const fetchData = async (limit = 10) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    ).then((data) => data.json());
    setList(res);
    setIsLoading(false);
  };
  const handlePostData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "Content-Type": "applicatio/json",
      },
      body: JSON.stringify({
        title: `${postData.title}`,
        body: `${postData.body}`,
      }),
    });
    const newRes = await response.json();
    setList({ newRes, ...list });
    setPostData({ title: "", body: "", isPosting: false });
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
      <>
        <View style={styles.inputContainer}>
          <Text style={styles.nameText}>Title</Text>
          <TextInput
            placeholder="Enter title"
            style={styles.input}
            value={postData.title}
            onChangeText={(value) =>
              setPostData((prev) => ({ ...prev, title: value }))
            }
          />
          <Text style={styles.nameText}>Body</Text>
          <TextInput
            placeholder="Enter Body"
            style={styles.input}
            value={postData.body}
            onChangeText={(value) =>
              setPostData((prev) => ({ ...prev, body: value }))
            }
          />
          <Button
            disabled={postData.isPosting}
            title={postData.isPosting ? "Posting..." : "Post Data"}
            onPress={() => {
              setPostData((prev) => ({ ...prev, isPosting: true }));
              handlePostData();
            }}
          />
        </View>

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
            ListHeaderComponent={
              <Text style={styles.headerText}>Post List</Text>
            }
            ListFooterComponent={
              <Text style={styles.footerText}>End of List</Text>
            }
            refreshing={refreshing}
            onRefresh={() => handleRefresh()}
          />
        </View>
      </>
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
