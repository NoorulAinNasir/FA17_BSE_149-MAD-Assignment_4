import React, {useContext, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {UserContext} from '../ContextApi';

export default function Places({navigation}) {
  const index = navigation.getParam('index');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const {userData} = useContext(UserContext);
  const [data, setData] = userData;
  const updateLocation = () => {
    alert('Location name and info added!');
    navigation.navigate('Cities');
    data[index].locations.push({name: name, info: info});
    setData(data);
  };
  return (
    <ScrollView style={styles.scrollview}>
      <View style={{  
          margin: 5,
          width: "95%",
          height: "12%",
          borderRadius: 4,
          marginLeft: "10px",
          marginBottom: "-30px",
          border: "4px solid white",}}>
        {/* <Button title={'Cities'} onPress={() => 

        navigation.navigate('Cities')} /> */}
        
         <Text style={{
           fontWeight: "bolder",
            fontSize: 29,
            color: "white",
            marginLeft: 105,
            // margin: 15,
            fontFamily: "times", }}>
          {data[index].city}
        </Text>
        <View />  
        </View>  
      <View>
        {data[index].locations.length > 0 ? (
          data[index].locations.map((value, index) => (
            <View key={index}>
              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'white',
                  borderWidth: 2,
                  width:"97%",
                  marginTop:90,
                  marginBottom:164,  
                  marginRight:8, 
                  marginLeft:8, 
                  fontSize: 25,
                  color: 'white',

                }}>
                <Text style={{ 
                  fontSize: 25,
                  color: 'white',
                 
                }}>{"Location Name:  "+  value.name}</Text>
                <Text style={{ 
                  fontSize: 25,
                  color: 'white', 
                }}>{"Location Info:  "+ value.info}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={{color:'white', 
          alignItems: 'center',
          marginTop:191,
          marginLeft:50,
          marginBottom:106,
          fontSize:22,
          fontWeight:"bolder",
          }}>No location for this city!</Text>
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Info"
        onChangeText={text => setInfo(text)}
      />
      	<TouchableOpacity
				style={styles.footbutton}
			>
				<Text style={styles.button} 
        onPress={updateLocation}>Add Location!</Text>
			</TouchableOpacity>
      {/* <Button title= 'Add City'  onPress={() => 
        
      navigation.navigate('AddCity')} /> */}
   

      <TouchableOpacity
				style={styles.footbutton1}
			>
			
      	<Text style={styles.head1} 
        onPress={() => navigation.navigate('Cities')}>
        Cities List</Text>
		
      
    	</TouchableOpacity>



      <TouchableOpacity
				style={styles.footbutton2}
			>
			
      	<Text style={styles.head2} 
       onPress={() => navigation.navigate('AddCity')}>
        Add City</Text>
		  
      
    	</TouchableOpacity>
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor:'#324AB2',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    alignItems: 'center',
    placeholderTextColor: 'white',
    // height: 40,
    padding: 10,
    marginTop: 12,
    marginLeft: 5,
    borderWidth: 2,
    fontSize: 19,
    width: "97%", 
    color: 'white',
    borderColor: 'white',
  },
  scrollItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#324AB2',
    width: '90%',
    height: 50,
    padding: 10,
    margin: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  scrollviewText: {
    fontSize: 25,
    color: 'white',
  },
  scrollview: {
    width: '100%',
    height: '100%',
    paddingTop: 24,
    backgroundColor: '#333d52',
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
  button: {
    marginBottom: 3,
    color: '#333d52',
  fontSize: 18,
  fontWeight: "bolder"
  },
  footbutton: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    width: "97%",
    marginLeft:5,
    marginBottom: 0,
  },
   head1: { 
    // marginBottom: 3,
    paddingTop: 10,
    color: '#333d52',
    fontSize: 18,
    fontWeight: "bolder"
  },
  
  footbutton2: {
    marginLeft: 181,
    marginTop: -50,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 174,
    height: 50,
  },
  
  head2: { 
    // marginLeft: 3,
    paddingTop: 10,
    color: '#333d52',
    fontSize: 18,
    fontWeight: "bolder", 
    // fontStyle: 'italic' ,
    // textDecorationLine: 'underline' 
  },
  logo: {
    height: 128,
    width: 128,
  },

  footbutton1: {
    marginLeft: 4,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 176,
    height: 50,
  },
});
