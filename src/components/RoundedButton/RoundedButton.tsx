import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


import {MyColors} from "../../theme/AppTheme";

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
      <TouchableOpacity style={styles.roundedButton} onPress={handleOnPress}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  roundedButton: {
    alignItems: 'center',
    backgroundColor: MyColors.Butterscotch,
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    color: MyColors.Oxford_blue,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export {
  RoundedButton
};