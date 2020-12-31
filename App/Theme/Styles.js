import { StyleSheet } from 'react-native'
import Colors from './Colors'
import { TernaryRegular } from './Fonts'

export const AppStyles = StyleSheet.create({
  app_name: {
    color: Colors.fontColor,
    textShadowRadius: 21,
    textShadowColor: '#fff',
    shadowOffset: { width: 15, height: 15 },
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 8,
    fontSize: 15,
    fontFamily:TernaryRegular
  },
})
