import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text,FlatList, Image, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'İkili Gümüş Set',
    subtitle: "Afrodit Set Gümüş Mermer / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.",

    
    image: 'https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg',
    price: '310',
    discountedPrice: '120',

  },
  {
    id: '2',
    title: 'Fincan Takımlı Tepsi ',
    subtitle: "Fincan Takımlı Tepsi Seti / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.",
    image: 'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg',
    price: '460',
    discountedPrice: '490',

  },
  {
    id: '3',
    title: 'İkili Altın Set',
    subtitle: "Afrodit Set Altın Mermer / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.",
    image: 'https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg',
    price: '540',
    discountedPrice: '430',
  },
  {
    id: '4',
    title: 'Masa Lambası',
    subtitle: "Masa Lambası / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.",
    image: 'https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg',
    price: '630',
    discountedPrice: '230',
  },
];



const HomeScreen = () => {
  
function renderItem ({item,index}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 5,
        color: 'black',
      }}>
      <View
        style={{
          width: '90%',
          height: 550,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 5,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          elevation: 5,
        }}>
        <View
          style={{
            width: '100%',
            height: 380,
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            source={{uri: item.image}}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            marginBottom: 10,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>

        <View
          style={{
            width: '80%',
            height: 100,
            borderColor: 'grey',
            alignItems: 'center',
            marginTop: 5,
            borderTopColor: 'black',
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
          }}>
          
          <View
            style={{
              position: "absolute",
              backgroundColor:"darkcyan",
              left: -50,
              bottom:0,
              width: 80,
              height: 40,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowRadius: 10,
              shadowColor: 'purple',
              shadowOpacity: 0.7,
              elevation: 5,

            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
                color: 'black',
              }}>
              {item.price}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
                color: 'red',
              }}>
              {item.discountedPrice}
            </Text>
          </View>


          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
              alignSelf: 'flex-start',
              marginLeft:40,
            }}>
            <Text
              style={{
                fontSize: 12,
                marginTop: 10,
                color: 'black',
                textAlign: 'left',
              }}>
              {item.subtitle}
            </Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
  }
  return (

    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowOpacity: 0.25,
          elevation: 5,

        }}
      >
        <Text
          style={{
            fontSize: 30,
            color:"black",
            fontWeight: "bold",
            fontFamily: "cursive",
            
          }}>
          
          Fenne Design

        </Text>

      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
}

export default HomeScreen;
