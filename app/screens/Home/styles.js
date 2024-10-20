import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';
import { FONT_BODY_MEDIUM_REGULAR, FONT_CAPTION_BOLD, FONT_HEADING_XXX_LARGE_BOLD } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080910",
    padding: 16
  },
  containerList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  containerCard: {
    display: 'flex'
  },
  poster: {
    width: 180,
    height: 350
  },
  movieTitle: {
    ...FONT_BODY_MEDIUM_REGULAR,
    color: COLOR_WHITE,
    width: 180,
  }
});

export default styles;