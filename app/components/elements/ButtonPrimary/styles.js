import { StyleSheet } from 'react-native';

import {
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_FONT_PRIMARY_LIGHT
} from '../../../styles';
import { COLOR_FONT_DISABLED_LIGHT, COLOR_FOREGROUND_BRAND_PRIMARY_LIGHT, COLOR_FOREGROUND_DISABLED_LIGHT, COLOR_WHITE, FONT_BODY_SMALL_BOLD } from '../../../styles/index';
import { BORDER_RADIUS_XL, SPACING_LG, SPACING_MD, SPACING_XS } from '../../../styles/size';

const container = {
  // height: 40,
  flexDirection: 'row',
  gap: SPACING_XS,
  paddingVertical: SPACING_LG,
  paddingHorizontal: 18,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: BORDER_RADIUS_XL,
};

export default StyleSheet.create({
  container: {
    ...container,
    width: 151,
    backgroundColor: COLOR_FOREGROUND_BRAND_PRIMARY_LIGHT
  },
  containerFullWidth: {
    ...container,
    width: '100%',
    backgroundColor: COLOR_FOREGROUND_BRAND_PRIMARY_LIGHT
  },
  containerDisabled: {
    ...container,
    backgroundColor: COLOR_FOREGROUND_DISABLED_LIGHT
  },
  containerFlat: {
    ...container,
    backgroundColor: 'transparent'
  },
  containerPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  leftRightContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: COLOR_WHITE,
    textAlign: 'center',
    ...FONT_BODY_SMALL_BOLD
  },
  textDisabled: {
    color: COLOR_FONT_DISABLED_LIGHT,
    ...FONT_BODY_SMALL_BOLD
  },
  textPressed: {
    color: COLOR_FONT_PRIMARY_LIGHT
  },
  button: {
    lineHeight: 40
  },
  buttonPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  buttonDisabled: {}
});