import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RoundedButton} from '../../components/RoundedButton/RoundedButton';
import {CommonAppStyles, MyImages} from '../../theme/AppTheme';
import {RootStackParamList} from '../../../../App';
import UseViewModel, {HomeStateEnum} from './ViewModel';
import {CustomInputWithIcon} from "../../components/CustomInputWithIcon/CustomInputWithIcon";

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { email, password, handleOnChange } = UseViewModel();

  const handlerRegister = () => {
    navigation.navigate('RegisterScreen');
  }

  const handleStateChange = (property: string, value: any) => {
    handleOnChange(property, value)
  }

  return (
    // Column: el tag view crea una columna
    <View style={CommonAppStyles.container}>
      <Image
        source={MyImages.chef}
        style={CommonAppStyles.imageBackground}
      />
      <View style={CommonAppStyles.logoContainer}>
        <Image source={MyImages.logoLandingPage} style={CommonAppStyles.logoImage}/>
        <Text style={CommonAppStyles.logoText}>Food App</Text>
      </View>

      <View style={CommonAppStyles.form}>
        <Text style={CommonAppStyles.formText}>
          Ingresar
        </Text>

        <CustomInputWithIcon
          value={ email }
          keyStateField={HomeStateEnum.EMAIL}
          onChangeText={ handleStateChange }
          properties={{
            image: MyImages.email,
            placeholder: 'Correo electrónico',
            keyboardType: 'email-address'
          }}
        />

        <CustomInputWithIcon
          value={ password }
          keyStateField={HomeStateEnum.PASSWORD}
          onChangeText={ handleStateChange }
          properties={{
            image: MyImages.password,
            placeholder: 'Contraseña',
            isSecureEntry: true,
          }}
        />

        <View style={CommonAppStyles.formButton}></View>

        <RoundedButton
          title = 'Entrar'
          onPress = {() => {
            console.log(email);
            console.log(password);
          }}
        />

        <View style={CommonAppStyles.formRegister}>
          <Text>¿Nuevo?</Text>
          <TouchableOpacity onPress={handlerRegister}>
            <Text style={CommonAppStyles.formRegisterText}>Regístrate</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}