import React from 'react'
import {Image, StyleSheet, Text, TextInput, ToastAndroid, View} from "react-native";
import {MyColors, MyImages} from "../../theme/AppTheme";
import {RoundedButton} from "../../components/RoundedButton/RoundedButton";

export const RegisterScreen = () => {
  return (
    // Column: el tag view crea una columna
    <View style={styles.container}>
      <Image
        source={MyImages.chef}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <Image source={MyImages.selectImage} style={styles.logoImage}/>
        <Text style={styles.logoText}>Selecciona una imagen</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>
          Registrarse
        </Text>

        <View style={styles.formInput}>
          <Image source={MyImages.user} style={styles.formInputIcon}/>
          <TextInput
            style={styles.formInputLabel}
            placeholder="Nombre(s)"
            placeholderTextColor= {MyColors.Robin_egg_blue}
            keyboardType='default'
          />
        </View>

        <View style={styles.formInput}>
          <Image source={MyImages.userBlankContent} style={styles.formInputIcon}/>
          <TextInput
            style={styles.formInputLabel}
            placeholder="Apellido(s)"
            placeholderTextColor= {MyColors.Robin_egg_blue}
            keyboardType='default'
          />
        </View>

        <View style={styles.formInput}>
          <Image source={MyImages.email} style={styles.formInputIcon}/>
          <TextInput
            style={styles.formInputLabel}
            placeholder="Correo electrónico"
            placeholderTextColor= {MyColors.Robin_egg_blue}
            keyboardType='email-address'
          />
        </View>

        <View style={styles.formInput}>
          <Image source={MyImages.phone} style={styles.formInputIcon}/>
          <TextInput
            style={styles.formInputLabel}
            placeholder="Celular"
            placeholderTextColor= {MyColors.Robin_egg_blue}
            keyboardType='number-pad'
          />
        </View>

        <View style={styles.formInput}>
          <Image source={MyImages.password} style={styles.formInputIcon}/>
          <TextInput
            style={styles.formInputLabel}
            placeholder="Contraseña"
            placeholderTextColor= {MyColors.Robin_egg_blue}
            keyboardType='default'
            secureTextEntry
          />
        </View>

        <View style={styles.formInput}>
          <Image source={MyImages.confirmPassword} style={styles.formInputIcon}/>
          <TextInput
            style={styles.formInputLabel}
            placeholder="Confirmar contraseña"
            placeholderTextColor= {MyColors.Robin_egg_blue}
            keyboardType='default'
            secureTextEntry
          />
        </View>

        <View style={styles.formButton}></View>

        <RoundedButton
          title = 'Confirmar'
          onPress = {() => {
            ToastAndroid.show('Testing...', ToastAndroid.SHORT);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyColors.Pear,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center', //alinea los hijos al centro
    top: '5%',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: MyColors.White,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    height: '70%',
    backgroundColor: MyColors.White,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formInputLabel: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.Maize,
    marginLeft: 10,
  },
  formInputIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formButton: {
    marginTop: 30,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: MyColors.Poppy,
    fontSize: 15,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: MyColors.Maize,
    marginLeft: 10,
  }
})

