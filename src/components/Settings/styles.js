import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
  main: {
    flex: 1,
  },
  container: {
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 2,
    width: 150,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffecef',
    height: 30,
    width: 130,
    justifyContent: 'center',
    marginBottom: 15,
  },
});
export default styles;
