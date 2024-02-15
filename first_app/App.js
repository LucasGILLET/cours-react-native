import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, Item, TouchableOpacity, Modal, Pressable } from 'react-native';
import React from 'react';



export default function App() {
  
  const [text, onChangeText] = React.useState('');
  const [sampleGloals, setSampleGoals] = React.useState(
    [
      "Faire ses courses",
      "Aller à la salle de sport 3 fois par semaine",
      "Monter à plus de 5000m d'altitude",
      "Acheter mon premier appartement",
      "Perdre 5kgs",
      "Gagner en productivité",
      "Apprendre un nouveau langage",
      "Faire une mission freelance",
      "Organiser un meetup autour de la tech",
      "Faire un triathlon"
    ]
  )
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalInput, setModalInput] = React.useState({index: 0, data: ''});

  const addTask = () => {
    sampleGloals.push(text)
    onChangeText('')
  }

  const deleteTask = (index) => {
    setSampleGoals(sampleGloals.filter((x, i) => i !== index))
  }

  const openModificationModal = (index, data) => {
    setModalInput({index: index, data: data})
    setModalVisible(true)
  }

  const modifyTask = () => {

    // permet de modifier l'index correspondant
    // facon alternative : 
      // setSampleGoals(() => sampleGloals.map((goal, i) => {
      //   if (i == modalInput.index) {
      //     goal = modalInput.data
      //   }
      //   return goal;
      // }))
    let newSampleGoals = sampleGloals
    newSampleGoals[modalInput.index] = modalInput.data
    setSampleGoals(newSampleGoals)


    // ferme la modale
    setModalVisible(false)
    // reset la modale
    setModalInput({index: 0, data: ""})
  }




  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.firstTitle}>
        Hello <Text style={styles.appjs}>App.js</Text>
      </Text>

      <Text style={styles.list_title}>Ma liste : </Text>

      <FlatList 
        data={sampleGloals} 
        renderItem={({item, index}) => 
          <Pressable onPress={() => openModificationModal(index, item)}>
            <View style={styles.element}>
                <Text style={styles.item}>- {item}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(index)}>
                  <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>
          </Pressable>
        }
      />

      <TextInput style={styles.input} editable name='Hey' value={text} placeholder="Nouvelle todo" onChangeText={onChangeText} inputMode='text'/>

      <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.button.text}>AJOUTER</Text>
      </TouchableOpacity>


      {/* MODAL */}
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Modifier l'élément</Text>
              <TextInput style={styles.input} editable name='Hey' value={modalInput.data} placeholder="Modifier todo" onChangeText={(e) => setModalInput({index: modalInput.index, data: e})} inputMode='text'/>
              <View style={styles.buttons}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Annuler</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => modifyTask()}>
                  <Text style={styles.textStyle}>Modifier</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <StatusBar style="auto" />

  </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  firstTitle: {
    color: '#ff0000'
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    maxHeight: 'auto'
  },
  title: {
    fontSize: 32,
  },
  appjs: {
    fontWeight: 'bold',
  },
  list_title: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF4FF4',
    borderRadius: 10,
    padding: 5,
    text: {
      color: '#FFFFFF'
    }
  },
  input: {
    marginTop: 5,
    width: 350,
    backgroundColor: '#FFF345',
    color: '#000000',
    fontStyle: 'italic',
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginBottom: 5,
    borderRadius: 10,
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 2,
  },
  deleteButton: {
    backgroundColor: '#FF4F4F', 
    borderRadius: 20,
    padding: 5,
    marginRight: 5,
    height: 30,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },






  // MODAL

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
});