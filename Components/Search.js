import React from 'react'
import {StyleSheet, View, Button, TextInput} from 'react-native'

class Search extends React.Component {
  render () {
    return (
      <View style={styles.vue}>
        <TextInput style={styles.textinput} placeholder="Titre du film"/>
        <Button style={{ }} title="Rerchercher" onPress={() => {}} />
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      backgroundColor: '#FFFFFF'
    },

    bouton: {
      borderColor: '#000000',
      borderWidth: 1,
      backgroundColor: 'lime'
    },

    vue: {
      marginTop: 20,
      backgroundColor: 'lightgrey'
    }
  }
)

export default Search
