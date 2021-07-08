import React, {useContext} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../ContextApi';

export default function Cities({navigation}) {
  const {userData} = useContext(UserContext);
  const [data] = userData;
  return (
 
    <ScrollView style={styles.scrollview}>
      {/* <View style={{flexDirection: 'row', 
      justifyContent: 'space-between'}}> */}

        {/* <Button title= 'Add City'  onPress={() => 
          
        navigation.navigate('AddCity')} /> */}

        {/* <Text 
        style={{
          marginRight: 40, 
        color: 'white',
        marginTop: 30, 
        fontSize: 25, 
        fontWeight: 'bold'}}
        >Cities</Text> */}
        {/* <View /> */}
      {/* </View> */}


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
            marginLeft: 40,
            margin: 15,
            fontFamily: "times",
          }}
        >
         List of Added Cities
        </Text>
      </View>



      <View >
        {data.length > 0 ? (
          data.map((value, index) => (
            <View key={index}>

            <TouchableOpacity>

            <View style={{ 
              marginTop:90,
              // fontWeight:"bolder",
              flexDirection: 'row',
              justifyContent: 'space-between'}}
              > 
                  <Text  style={{
                    color: 'white',
                    fontWeight:"bolder",
                    fontSize: 22,
                    marginLeft:30,
                  }}>Country(s)</Text>


                  <Text  style={{
                    color: 'white',
                    fontWeight:"bolder",
                    fontSize: 22,
                    marginRight:60,
                  }}>City(s)</Text>
              </View>
            </TouchableOpacity>



              <TouchableOpacity
                onPress={() => navigation.navigate('Places', 
                {index: index})}>
                <View
                
                 style={styles.scrollItem}>
                  <Text  style={{
                    color: 'white',
                    // fontWeight:"bolder",
                    fontSize: 22,
                  }}>{value.country}</Text>
                  <Text  style={{
                    color: 'white',
                    // fontWeight:"bolder",
                    fontSize: 22,
                  }}>{value.city}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={styles.scrollItem1}>
          <Text  style={{
                     color: 'white',
                     fontSize: 23,  
                     width: 140,
                     marginTop: 120,
                     marginBottom: 220,
                     marginLeft: 100,
                     fontWeight:"bolder",
                  }}>No country available!</Text>
                  </View>
        )}
      </View>

      {/* <TouchableOpacity
				style={styles.footbutton}
			>
				<Text style={styles.head} onPress={() => 
        navigation.navigate('Cities')}>View City List!</Text>
		
      
    	</TouchableOpacity> */}

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

    </ScrollView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
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
    borderWidth: 1,
    width: 200,
  },
  scrollItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 299,
    width: '90%',
    height: 50,
    padding: 10,
    marginTop: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  
  scrollItem1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 369,
    width: '90%',
    height: 50,
    padding: 10,
    marginTop: 59,
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
    paddingTop: 30,
    backgroundColor: '#333d52',
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#008080',
    padding: 10,
    width: 170,
  },
  logo: {
    height: 128,
    width: 128,
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
    fontWeight: "bolder",
    textDecorationLine: 'underline' 
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
},
});
