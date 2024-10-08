import { StyleSheet, Text, View, Alert, Modal, Pressable, Button } from "react-native";
import React, { useState } from "react";

const ModalExample = ():React.JSX.Element => {

  const [modalVisible,setModalVisible] = useState(false)

  return (
    <View style={styles.centeredView}>
      {/* Show Modal Button */}
      <Pressable 
      style={[styles.button,styles.buttonOpen]}
      onPress={()=>setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

      {/* Modal component for pop-up */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={()=> setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          {/* Text on Modal */}
          <Text style={styles.modalText}>Hello React Native</Text>
          {/* Button for close Modal */}
          <Pressable 
          style={[styles.button,styles.buttonClose]}
          onPress={()=> setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>

      </Modal>
    </View>
  );
};

export default ModalExample;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
