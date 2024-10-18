import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';
import { FONT_CAPTION_BOLD, FONT_HEADING_XXX_LARGE_BOLD } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080910"
  },
  century: {
    ...FONT_HEADING_XXX_LARGE_BOLD,
    color: COLOR_BLACK
  },
  janna: {
    ...FONT_CAPTION_BOLD,
    color: COLOR_BLACK
  }
});

export default styles;