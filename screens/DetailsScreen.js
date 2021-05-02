import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Box2 from '../components/OrdersBox/Box2';
import Box3 from '../components/OrdersBox/Box3';


  const DetailsScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <CardOrder 
                itemData={item}
                onPress={()=> navigation.navigate('OrderDetail', {itemData: item })}
            />
        );
    };
  
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://foodfan-server.herokuapp.com/Menu/MenuAll')//
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    
    return (
      <ScrollView>
      <View style={styles.randomMenuCardsWrapper} >
      <FlatList
                data={data}
                renderItem={({item}) => (
                  <Box2 data={item} navigation={navigation} />
                )}
                keyExtractor={item => item._id}
              />                 
      </View>
      </ScrollView>


    );
  
};
  export default DetailsScreen;


const styles = StyleSheet.create({

  randomMenuCardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  
  
});