import React from 'react'
import {Image, ImageSourcePropType, KeyboardTypeOptions, TextInput, View} from 'react-native';
import {CommonAppStyles, MyColors, MyImages} from '../../theme/AppTheme';
import customInputWithIconStyle from './styles';

export type ConfigProps = {
  image: ImageSourcePropType;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  isSecureEntry?: boolean;
  placeholderTextColor?: MyColors;
}

const defaultProps: ConfigProps = {
  image: MyImages.DEFAULT,
  placeholder: 'Insert some value here',
  keyboardType: 'default',
  isSecureEntry: false,
  placeholderTextColor: MyColors.Robin_egg_blue
}

export type Props = {
  value: string;
  keyStateField: any;
  onChangeText: (property: string, inputValue: string) => void;
  properties?: ConfigProps;
}

export const CustomInputWithIcon = ({
                                      value,
                                      onChangeText,
                                      keyStateField,
                                      properties : {
                                          image,
                                          placeholder,
                                          keyboardType,
                                          isSecureEntry,
                                          placeholderTextColor
                                      } = defaultProps,
}: Props) => {
  return (
    <>
      <View style={CommonAppStyles.formInput}>
        <Image source={image} style={CommonAppStyles.formInputIcon}/>
        <TextInput
          style={CommonAppStyles.formInputLabel}
          placeholder={placeholder}
          placeholderTextColor= {placeholderTextColor}
          keyboardType={keyboardType}
          secureTextEntry={isSecureEntry}
          value={ value }
          onChangeText={ (inputValue) => onChangeText(keyStateField, inputValue) }
        />
      </View>
    </>
  )
}
