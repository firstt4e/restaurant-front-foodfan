import { View, Text, Button, StyleSheet, Switch, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import CheckboxList from 'rn-checkbox-list';


const DecisionScreen = () => {



    return (
      <ScrollView>
        
        
      <View style={styles.card} >
      <Image
                    source={{ uri: 'http://chakuma.com/wp-content/uploads/2021/04/Logo-chakuma-306x108.gif' }}
                    resizeMode="cover"
                    style={{height: 80 , width: 200}}
                  />
        <Text style={styles.cardTitle}>ข้าวกะเพรา</Text>
        
      </View>


      <View style={styles.cardInfo}>
        <Text>หมูกรอบ + ไข่ดาว</Text>
      </View>
      <View>
        <Button
          title="รับออเดอร์"
          onPress={() => Alert.alert('ยืนยันรายการ')}
          color="#00FF2A"
        />
        <Button
          title="ยกเลิกออเดอร์"
          onPress={() => Alert.alert('ยกเลิกออเดอร์แล้ว')}
          color="#FF0000"
        />
      </View>
      
      
      
     
      </ScrollView>
      
      
      

      

    );
    
};

export default DecisionScreen;

const styles = StyleSheet.create({
  cardInfo: {
    backgroundColor:"#FFFFFF",
    marginHorizontal:20,
    padding:15,
    shadowColor:'rgba(0,0,0,0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,  
    minHeight:150,
    elevation:2,
    borderRadius:5,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
    overflow:"hidden",
    position:'relative',
  },
  card:{
    backgroundColor:"#FFFFFF",
    marginHorizontal:20,
    padding:15,
    shadowColor:'rgba(0,0,0,0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,  
    minHeight:60,
    elevation:2,
    borderRadius:5,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:10,
    overflow:"hidden",
    position:'relative',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
