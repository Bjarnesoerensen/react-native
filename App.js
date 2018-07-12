import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,

    }
  }

  componentDidMount () {
    return fetch('https://api.web-developer-js.de/api')
      .then ((response)=> response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })
      })

      .catch((error) => {
        console.log(error)
      });
  }

  render() {

    if (this.state.isLoading) {
      return(
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    } else {
      let data = this.state.dataSource.map((val, key) =>{
        return  <View key={key} style={styles.item}>
        
                  <Text style={{fontSize:25, color: 'red'}}>{val.title}</Text>
                  <Text style={{fontSize:20}}>{val.text}</Text>
                  <Text style={{fontSize:15}}>{val.uuid}</Text>
                </View>
      });

      return (
        
        <ScrollView>
        <Text style={{alignSelf: 'center', fontSize:30, paddingTop:30, color: 'red'}}>Fetching my little API</Text>
        {data}
        </ScrollView>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
        
  },
  item: {          
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 20,
      borderBottomColor: '#eee',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 10,
  }
});