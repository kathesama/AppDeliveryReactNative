import React from 'react'
import {Text, TouchableOpacity} from 'react-native';
import roundedButtonStyle from "./styles";

interface RoundedButtonProps {
  title: string;
  onPress: (element?: any) => void;
}
const RoundedButton = ({title, onPress } : RoundedButtonProps) => {
  const handleOnPress = () => {
    onPress();
  };

  return (
    <>
      <TouchableOpacity style={roundedButtonStyle.roundedButton} onPress={handleOnPress}>
        <Text style={roundedButtonStyle.textButton}>{title}</Text>
      </TouchableOpacity>
    </>
  )
}



export {
  RoundedButton
};