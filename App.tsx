import {Image, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import {RoundedButton} from './src/components/RoundedButton/RoundedButton';

import {MyColors, MyImages} from "./src/theme/AppTheme";

export default function App() {
  return (
    // Column: el tag view crea una columna
    <View style={styles.container}>
      <Image
        source={MyImages.chef}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image source={MyImages.logoLandingPage} style={styles.logoImage}/>
        <Text style={styles.logoText}>Food App</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>
          Ingresar
        </Text>

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
          <Image source={MyImages.password} style={styles.formInputIcon}/>
          <TextInput
            style={styles.formInputLabel}
            placeholder="Contraseña"
            placeholderTextColor= {MyColors.Robin_egg_blue}
            keyboardType='default'
            secureTextEntry
          />
        </View>

        <View style={styles.formButton}></View>

        <RoundedButton
          title = 'Entrar'
          onPress = {() => {
            ToastAndroid.show('Testing...', ToastAndroid.SHORT);
          }}
        />

        <View style={styles.formRegister}>
          <Text>¿Sin cuenta?</Text>
          <Text style={styles.formRegisterText}>Regístrate</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.Oxford_dark_blue,
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
    top: '15%'
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: MyColors.Pear_light,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    height: '40%',
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
});



