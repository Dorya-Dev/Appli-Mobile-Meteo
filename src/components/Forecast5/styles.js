import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  main: {
    flex: 3,
  },
  /* iconWind: {
    width: 50,
    height: 50,
  },*/
  date: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffecef',
    height: 30,
    width: 130,
    justifyContent: 'center',
  },
  iconView: {
    alignItems: 'center',
  },

  cardView: {
    borderRadius: 15,
  },
  bgCard: {
    backgroundColor: '#ffecef',
    borderRadius: 15,
  },
  icon: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  desc: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  desc1: {
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  temp: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  temp1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  temp_min: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  temp_min1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  temp_max: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  temp_max1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  wind: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  wind1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
});
export default styles;
