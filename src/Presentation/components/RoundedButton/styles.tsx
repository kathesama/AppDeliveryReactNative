import {StyleSheet} from "react-native";
import {MyColors} from "../../theme/AppTheme";

const roundedButtonStyle = StyleSheet.create({
  roundedButton: {
    alignItems: 'center',
    backgroundColor: MyColors.Butterscotch,
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    color: MyColors.White,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default roundedButtonStyle;