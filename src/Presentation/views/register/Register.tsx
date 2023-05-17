import React from 'react'
import {Image, Text, View} from 'react-native';
import {CommonAppStyles, MyImages} from '../../theme/AppTheme';
import {RoundedButton} from '../../components/RoundedButton/RoundedButton';
import UseViewModel, {RegisterStateEnum} from './ViewModel';
import {CustomInputWithIcon} from '../../components/CustomInputWithIcon/CustomInputWithIcon';
import registerStyles from "./styles";

export const RegisterScreen = () => {
  const {
    name,
    lastName,
    email,
    phone,
    password,
    passwordConfirm,
    handleOnChange,
    register
  } = UseViewModel();
  
  return (
    // Column: el tag view crea una columna
    <View style={registerStyles.container}>
      <Image
        source={MyImages.chef}
        style={CommonAppStyles.imageBackground}
      />

      <View style={registerStyles.logoContainer}>
        <Image source={MyImages.selectImage} style={CommonAppStyles.logoImage}/>
        <Text style={registerStyles.logoText}>Selecciona una imagen</Text>
      </View>

      <View style={registerStyles.form}>
        <Text style={CommonAppStyles.formText}>
          Registrarse
        </Text>

        <CustomInputWithIcon
          value={ name }
          keyStateField={RegisterStateEnum.NAME}
          onChangeText={ handleOnChange }
          properties={{
            image: MyImages.user,
            placeholder: 'Nombre(s)',
          }}
        />

        <CustomInputWithIcon
          value={ lastName }
          keyStateField={RegisterStateEnum.LAST_NAME}
          onChangeText={ handleOnChange }
          properties={{
            image: MyImages.userBlankContent,
            placeholder: 'Apellido(s)',
          }}
        />

        <CustomInputWithIcon
          value={ email }
          keyStateField={RegisterStateEnum.EMAIL}
          onChangeText={ handleOnChange }
          properties={{
            image: MyImages.email,
            placeholder: 'Correo electrónico',
            keyboardType: 'email-address'
          }}
        />

        <CustomInputWithIcon
          value={ phone }
          keyStateField={RegisterStateEnum.PHONE}
          onChangeText={ handleOnChange }
          properties={{
            image: MyImages.phone,
            placeholder: 'Celular',
            keyboardType: 'number-pad'
          }}
        />

        <CustomInputWithIcon
          value={ password }
          keyStateField={RegisterStateEnum.PASSWORD}
          onChangeText={ handleOnChange }
          properties={{
            image: MyImages.password,
            placeholder: 'Contraseña',
          }}
        />

        <CustomInputWithIcon
          value={ passwordConfirm }
          keyStateField={RegisterStateEnum.PASSWORD_CONFIRM}
          onChangeText={ handleOnChange }
          properties={{
            image: MyImages.confirmPassword,
            placeholder: 'Confirmar contraseña',
            isSecureEntry: true,
          }}
        />

        <View style={CommonAppStyles.formButton}></View>

        <RoundedButton
          title = 'Confirmar'
          onPress = {register}
        />
      </View>
    </View>
  );
}

