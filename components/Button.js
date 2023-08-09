import {TouchableOpacity, View, Text, Image } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS, assets } from '../constants'
 

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
        style={{
            width: 40,
            height: 40,
            borderRadius: SIZES.extraLarge,
            backgroundColor: COLORS.white,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props
        }}
        onPress={handlePress}
    >
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{width: 24, height: 24}}
        />
      
    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
    return (
      <TouchableOpacity
        style={{
            borderRadius: SIZES.extraLarge,
            backgroundColor: COLORS.primary,
            minWidth: minWidth,
            padding: SIZES.small,
            ...props
        }}
        onPress={handlePress}
    >
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center'

        }}>
          Place a bid
        </Text>
      
    </TouchableOpacity>
    )
  }