import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  usernameText: {
    marginBottom: 10,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  QuizButton: {
    marginTop: 20,
  },
  LeaderBoardButton: {
    backgroundColor: COLORS.SECONDARY,
    marginTop: 20,
  },
  textInput: {
    fontSize: 16,
    paddingHorizontal: 7,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    borderRadius: 5,
    height: 50,
    width: 300,
  },
});

export default styles;
