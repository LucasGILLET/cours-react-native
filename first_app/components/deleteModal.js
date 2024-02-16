import React from 'react';
import { Text, View, StyleSheet, Modal, TextInput, Pressable } from 'react-native';

export default class DeleteModal extends React.Component {
render() {
    const deleteTask = () => {
        this.props.setSampleGoals(this.props.sampleGloals.filter((x, i) => i !== this.props.index))
        this.props.setModalVisible(false)
    }

    return (
        <View style={styles.centeredView}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.props.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                this.props.setModalVisible(!this.props.modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Voulez-vous vraiment supprimer cet élément ?</Text>
                    <View style={styles.buttons}>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => this.props.setModalVisible(!this.props.modalVisible)}>
                            <Text style={styles.textStyle}>Annuler</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => deleteTask()}>
                            <Text style={styles.textStyle}>Supprimer</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
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
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
      },
})