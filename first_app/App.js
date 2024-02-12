import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, Item, TouchableOpacity } from 'react-native';
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

  const onPress = () => {
    sampleGloals.push(text)
    onChangeText('')
  }



  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.firstTitle}>
        Hello <Text style={styles.appjs}>App.js</Text>
      </Text>

      <Text style={styles.list_title}>Ma liste : </Text>

      <FlatList 
        data={sampleGloals} 
        renderItem={({item}) => <Text style={styles.item}>- {item}</Text>}
      />

      <TextInput style={styles.input} editable name='Hey' value={text} placeholder="Nouvelle todo" onChangeText={onChangeText} inputMode='text'/>

      <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.button.text}>AJOUTER</Text>
      </TouchableOpacity>

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
    backgroundColor: '#f9c2ff',
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
    width: 350,
    backgroundColor: '#FFF345',
    color: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 5,
  },
});