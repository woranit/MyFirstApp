import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.grey,
    marginBottom: 12,
  },
  image: {
    width: 32,
    height: 32,
  },
  imageContainer: {
    backgroundColor: colors.lightgrey,
    padding: 16,
    borderRadius: 8,
    marginTop: 13,
    marginBottom: 3,
  }
});
