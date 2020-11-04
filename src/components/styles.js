import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  main: {
    flex: 5,
  },
  top0: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    /*borderColor: 'blue',
    borderWidth: 2,*/
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 5,
  },
  icon: {
    width: 100,
    height: 100,
  },

  /*title: {
    /* textShadowRadius: 20,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },*/
  top: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  top1: {
    /*borderColor: 'red',
    borderWidth: 2,*/
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',

    /* paddingLeft: 20,*/
    /* justifyContent: 'center',*/
  },
  top2: {
    /*borderColor: 'red',
    borderWidth: 2,*/
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',

    /* paddingLeft: 20,*/
    /* justifyContent: 'center',*/
  },
  name: {
    flex: 1,
    textShadowRadius: 20,
    fontSize: 40,
    color: 'white',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  refresh: {
    width: 30,
    height: 30,
  },
  /*bgCard: {
    backgroundColor: '#ffecef',
    borderRadius: 15,
  },*/
  /*card1: {
    backgroundColor: '#ffecef',
    borderRadius: 15,
    flex: 1,
  },*/
  th: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  therm: {
    width: 60,
    height: 60,
    paddingBottom: 5,
    paddingTop: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  thmin: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  thmax: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  windTop: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  windSpeed: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  wIcon: {
    width: 60,
    height: 60,
    paddingBottom: 5,
    paddingTop: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  w1: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  w2: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  coord: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffecef',
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  txt: {
    flex: 1,
    alignItems: 'center',
  },
  wRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wCol1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'yellow',
    borderWidth: 2,
  },
  wCol2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 2,
  },
  desc: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
  /* desc1: {
    textTransform: 'capitalize',
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },*/
  temp: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  temp1: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  temp_min: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  temp_min1: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  temp_max: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  temp_max1: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  w: {
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  wind: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  rose: {
    width: 25,
    height: 25,
    zIndex: 10,
  },
  flag: {
    width: 30,
    height: 30,
    zIndex: 10,
  },
  wind1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  wind2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  hum: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  hum1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default styles;
