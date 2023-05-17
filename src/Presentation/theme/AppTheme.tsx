import {StyleSheet} from "react-native";

export enum MyImages {
  DEFAULT = require('../../../assets/icon.png'),
  chef = require('../../../assets/chef.jpg'),
  logoLandingPage = require('../../../assets/logo.png'),
  email = require('../../../assets/email.png'),
  password = require('../../../assets/password.png'),
  confirmPassword = require('../../../assets/confirm_password.png'),
  user = require('../../../assets/user.png'),
  userBlankContent = require('../../../assets/my_user.png'),
  selectImage = require('../../../assets/user_image.png'),
  phone = require('../../../assets/phone.png'),
}

export enum MyColors {
  White = 'white',
  Black = 'black',
  Oxford_dark_blue = '#021427',
  Oxford_blue = '#031e3a',
  Robin_egg_blue = '#031e3a',
  Old_gold = '#c6b906',
  Maize = '#ece032',
  Butterscotch = '#e38f38',
  Poppy = '#d93d3d',
  Pear = '#c3d350',
  Pear_light = '#e6f14a',
}

export const CommonAppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.Oxford_dark_blue,
    alignItems: "center",
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
    maxWidth: 550,
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