import { StyleSheet } from 'react-native';
import { COLOR_FONT_SECONDARY_HOVER_LIGHT, COLOR_FOREGROUND_ERROR_PRIMARY_LIGHT, COLOR_WHITE, FONT_BODY_MEDIUM_BOLD, FONT_BODY_SMALL_REGULAR } from '../../../styles/index';
import { BORDER_RADIUS_XL, SPACING_LG, SPACING_MD, SPACING_XL } from '../../../styles/size';

export default StyleSheet.create({
  containerTextField: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerField: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  prefix: {
    flex: 1,
    backgroundColor: COLOR_FONT_SECONDARY_HOVER_LIGHT,
    color: COLOR_WHITE,
    paddingVertical: SPACING_LG,
    paddingHorizontal: SPACING_XL,
    ...FONT_BODY_MEDIUM_BOLD,
    borderRadius: BORDER_RADIUS_XL,
    textAlign: 'center'
  },
  emptyPrefix: {
    flex: 1,
    paddingVertical: SPACING_LG,
    paddingHorizontal: SPACING_XL,
    ...FONT_BODY_SMALL_REGULAR,
    borderRadius: BORDER_RADIUS_XL,
    textAlign: 'center'
  },
  textField: {
    flex: 4,
    backgroundColor: COLOR_FONT_SECONDARY_HOVER_LIGHT,
    color: COLOR_WHITE,
    paddingVertical: SPACING_LG,
    paddingHorizontal: SPACING_XL,
    ...FONT_BODY_SMALL_REGULAR,
    borderRadius: BORDER_RADIUS_XL,
    color: COLOR_WHITE,
    width: '100%',
    borderWidth: 1,
    borderColor: COLOR_WHITE
  },
  errorText: {
    flex: 4,
    ...FONT_BODY_SMALL_REGULAR,
    color: COLOR_FOREGROUND_ERROR_PRIMARY_LIGHT
  },
  containerColumn: {
    display: 'flex',
    flexDirection: 'column',
    flex: 5,
    alignItems: 'center',
  }
});