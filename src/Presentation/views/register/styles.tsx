import {StyleSheet} from 'react-native';
import {CommonAppStyles, MyColors} from '../../theme/AppTheme';

const registerStyles = StyleSheet.create({
  container: {
    ...CommonAppStyles.container,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyColors.Pear,
  },
  logoContainer: {
    ...CommonAppStyles.logoContainer,
    top: '5%',
    alignItems: 'center',
  },
  logoText: {
    ...CommonAppStyles.logoText,
    color: MyColors.White,
  },
  form: {
    ...CommonAppStyles.form,
    height: '70%',
  },
})

export default registerStyles;