import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10, backgroundColor: 'blue' }}>
      <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
