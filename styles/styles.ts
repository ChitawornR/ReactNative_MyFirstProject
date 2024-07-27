import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#dddddd",
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 50,
    borderWidth: 1,
    borderColor: "red",
  },
  profileName: {
    fontWeight: "bold",
    color: "#f1b9b9",
    fontSize: 18,
  },
});

export default styles;
