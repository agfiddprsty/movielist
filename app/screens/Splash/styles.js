import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';
import { FONT_BODY_MEDIUM_REGULAR, FONT_CAPTION_BOLD, FONT_HEADING_XXX_LARGE_BOLD } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080910",
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  poster: {
    width: 350,
    height: 350
  }
});

export default styles;