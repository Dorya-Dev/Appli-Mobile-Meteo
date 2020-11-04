import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import Menu from '../assets/components/Menu/Menu';
import Forecast5 from './Forecast5/Forecast5';
import {Icon, Card} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../assets/images';
/*import thblue from '../assets/images/thblue.svg';*/

/*import Icon from 'react-native-vector-icons';*/

function Weather() {
  const [weatherData, setWeatherData] = useState({
    weather: [{}],
    main: {},
    wind: {},
  });

  const [zipCode, setZipCode] = useState('06200');
  const handleZipCodeInput = (value) => {
    setZipCode(value);
    saveValue();
  };

  saveValue = async () => {
    try {
      await AsyncStorage.setItem('zipcode', zipCode);
      console.log("It's working");
    } catch (e) {
      console.log('Not working');
      // save error
    }

    console.log('Done.');
  };

  useEffect(() => {
    getWeather();
  }, []);

  function getWeather() {
    const options = {
      method: 'GET',
    };
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?zip=' +
        zipCode +
        ',fr&appid=b6497aa622623d34b037dcf0e8a4f213&units=metric&lang=fr',
      options,
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (weather) => {
          console.log(weather);
          if (weather) {
            setWeatherData(weather);
            saveValue();
          }
        },
        (error) => {
          console.log(error);
        },
      );
  }
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.bg}
        source={require('../assets/images/bg9.jpg')}>
        {/*<Menu />*/}
        <View style={styles.top0}>
          <Text style={styles.name}>{weatherData.name}</Text>
        </View>
        <View style={styles.top}>
          <View style={styles.topView}>
            <View style={styles.top1}>
              <Text style={styles.temp1}> {weatherData.main.temp} °C </Text>
            </View>

            <View style={styles.top2}>
              <View style={styles.container}>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    width: 80,
                    marginBottom: 10,
                    textAlign: 'center',
                  }}
                  onChangeText={handleZipCodeInput}
                  value={zipCode}
                />
                <TouchableOpacity style={styles.button} onPress={getWeather}>
                  <Text style={styles.txt}>
                    <Image
                      style={styles.refresh}
                      source={require('../assets/images/refresh1.png')}
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.iconView}>
            {/*<Image
              style={styles.icon}
              source={{
                uri:
                  'http://openweathermap.org/img/wn/' +
                  weatherData.weather[0].icon +
                  '.png',
              }}
              />*/}
            <Image
              source={images[weatherData.weather[0].icon]}
              style={{height: 50, width: 50}}
            />
          </View>
        </View>

        <View style={styles.wRow}>
          {/*<Text style={styles.hum}>
                Humidité :*/}
          <View style={styles.thmin}>
            <Image
              style={styles.therm}
              source={require('../assets/images/therm-.png')}
            />
            <Text style={styles.temp_min1}>{weatherData.main.temp_min} °C</Text>
          </View>

          <View style={styles.thmax}>
            <Image
              style={styles.therm}
              source={require('../assets/images/therm+.png')}
            />
            <Text style={styles.temp_max1}>{weatherData.main.temp_max} °C</Text>
          </View>

          {/* <Forecast5 />*/}
        </View>
        <View style={styles.th}>
          <View style={styles.thmin}>
            <Image
              style={styles.therm}
              source={require('../assets/images/humidity.png')}
            />
            <Text style={styles.temp_min1}>{weatherData.main.humidity} %</Text>
          </View>

          <View style={styles.thmin}>
            <Image
              style={styles.therm}
              source={require('../assets/images/pressure.png')}
            />
            <Text style={styles.temp_min1}>
              {weatherData.main.pressure} hPa
            </Text>
          </View>
          <View style={styles.windTop}>
            <Image
              style={styles.therm}
              source={require('../assets/images/winds.png')}
            />
            <Text style={styles.w1}>{weatherData.wind.speed} km/h</Text>
          </View>
          <View style={styles.windSpeed}>
            <Image
              style={styles.therm}
              source={require('../assets/images/weathercock.png')}
            />
            <Text style={styles.w2}>{weatherData.wind.deg} °</Text>
          </View>
        </View>
        {/*<Forecast5 />*/}
      </ImageBackground>
    </View>
  );
}
export default Weather;
