import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from '../../assets/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
function accecpt1(props) {
  const {
    nameStore,
    status,
    date,
    credit,
    point,
    serialNumber,
    img,
  } = props.data;
  return (
    <TouchableOpacity
      style={[styles.randomMenuCard, { height: 90, marginVertical: 5 }]}
      onPress={() => {
        props.navigation.navigate('HomeScreen');
      }}>
      <View style={styles.randomMenuCardImgWrapper}>
        <Image
          // source={require('../../assets/banners/food-banner4.jpg')}
          source={{ uri: img }}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={[styles.cardInfo, { flex: 3 }]}>
        <Text style={styles.randomMenuCardTitle}>{nameStore}</Text>
        {/* <Text style={[styles.randomMenuCardDetails, {paddingTop: 5}]}>
          {date}
        </Text> */}
        {/* <Text
          style={[
            styles.randomMenuCardDetails,
            {alignSelf: 'flex-end', position: 'absolute', top: 37, left: 162},
          ]}>
          +{credit} s-credit
        </Text>
        <Text
          style={[
            styles.randomMenuCardDetails,
            {alignSelf: 'flex-end', position: 'absolute', top: 58, left: 162},
          ]}>
          +{point} points
        </Text> */}
      </View>
    </TouchableOpacity>
  );
}

export default accecpt1;
