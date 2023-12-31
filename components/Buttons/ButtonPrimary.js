import {Text, Pressable} from 'react-native';
import React from 'react';

const ButtonPrimary = ({text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#6528F7',
        width: '90%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>{text}</Text>
    </Pressable>
  );
};

export default ButtonPrimary;
