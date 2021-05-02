import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import StarRating from './StarRating';

const Images = [
  {image: require('../assets/banners/11.jpg')}, 
];

const CardRes = ({itemData, onPress}) => {
  return (

    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={{
              uri: `${itemData.image}`,
            }}
            // source={Images[0].image}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{itemData.Restaurantname}</Text>
          <Text style={styles.cardTitle}>{itemData.pass}</Text>
          <Text style={styles.cardTitle}>{itemData.status}</Text>
          <Text style={styles.cardTitle}>{itemData.orderdate}</Text>
          
          <StarRating ratings={itemData.ratings} reviews={itemData.reviews} />
          {/* <Text numberOfLines={2} style={styles.cardDetails}>฿{itemData.price}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardRes;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
