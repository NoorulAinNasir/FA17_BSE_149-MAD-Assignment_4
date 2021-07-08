import React, {useState, useContext} from "react";
import {Text, View, StyleSheet, Button,TextInput,
   TouchableOpacity} from 'react-native';
import {UserContext} from "../ContextApi";

export default function AddCity({navigation}) {

	const {userData} = useContext(UserContext);
	const [data, setData] = userData;
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');


	const handleClick = () => {
		alert('Country and city added!');
		const pushedData = {country: country, city: city, 
      locations: []};
		setData(data => [pushedData, ...data]);
	}

  
	return (
		<View style={styles.container}>

<View
        style={{
          flexDirection: "row",
          margin: 5,
          width: "90%",
          height: "10%",
          borderRadius: 4,
          marginLeft: "15px",
          marginBottom: "-30px",
          border: "4px solid white",
        }}
      >
        <Text
          style={{
            fontWeight: "bolder",
            fontSize: 29,
            color: "white",
            marginLeft: 105,
            margin: 15,
            fontFamily: "times",
          }}
        >
         Tour App
        </Text>
      </View>


			<Text style={styles.secondhead}>Enter Country </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCountry(text)}
			
			/>
			<Text style={styles.secondhead1}> Enter City </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCity(text)}
			
			/>
			<TouchableOpacity
				style={styles.button}
			>
				<Text style={styles.head} onPress={handleClick}> Add  
        </Text>
			</TouchableOpacity>


			<TouchableOpacity
				style={styles.footbutton}
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

      {/* <Button title= 'Add City'  onPress={() =>
        
       navigation.navigate('AddCity')} /> */}
		</View>
	);
}

const styles = StyleSheet.create({
container: {
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    marginBottom: 120,
    backgroundColor: '#333d52',
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
    height: 40,
    margin: 12,
    marginLeft: 80,
    borderWidth: 2,
    fontSize: 22,
    width: 200, 
    color: 'white',
    borderColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    width: 200,
    marginLeft:80,
    marginBottom: 100,
  },
  
  head: {
    marginBottom: 3,
    color: '#333d52',
  fontSize: 18,
  fontWeight: "bolder"
 },
 footbutton: {
  marginLeft: 4,
  marginTop: 40,
  alignItems: 'center',
  backgroundColor: 'white',
  padding: 10,
  width: 176,
  height: 50,
},
 head1: { 
  // marginBottom: 3,
  paddingTop: 10,
  color: '#333d52',
  fontSize: 18,
  fontWeight: "bolder"
},
  secondhead: {
   color: 'white',
    fontSize: 23,  
    width: 140,
    marginTop: 110,
    marginLeft: 110,

 },
 secondhead1: {
  color: 'white',
    fontSize: 23,  
    width: 140,
    marginTop: 10,
    marginLeft: 120,

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
  textDecorationLine: 'underline' 
},
});
