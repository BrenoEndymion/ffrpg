import React, { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, FlatList, Animated } from 'react-native';
import { withBadge, Avatar, Badge } from "react-native-elements";
import colors from '../config/colors';

import {
  Margin,
  SpaceBetween,
  Together,
} from '../components/styles/general';
import {
  NavHeader,
  ItemView,
  DoctorImage,
  MasterName,
  Specialty,
  Distance,
  ContainerItems,
  Shaddow,
  Container,
} from './styles/GroupsStyles';
import { TextInputWhite } from '../components/TextInputs';

//import Stars from 'react-native-star-review';
import fonts from '../config/fonts';

/*let delayValue = 500;
const animatedValue = new Animated.Value(0);

const optionsSwitch = [
  { label: 'Lista', value: '1' },
  { label: 'Mapa', value: '2' },
];*/

const doctors = [
  {
    id: 1,
    masterName: 'BrenoPontes',
    specialty: 'FFRPG',
    rate: 4,
  },
  {
    id: 2,
    masterName: 'MatheusGayzao',
    specialty: 'FFRPG',
    rate: 4,
  },
  {
    id: 3,
    masterName: 'JeffersonViadao',
    specialty: 'FFRPG',
    rate: 4,
  },
];

renderListG = (item, region) => {

  return (
    //<Animated.View style={[styles.button, {transform: [{translateX}]}]}>
    <Margin>
      <Shaddow>
        <ItemView style={styles.itemView}>
          <Together>
            <Avatar
              rounded
              source={require('../assets/images/logoffrpg.png')}
              size="medium"
            />

            <Badge
              status="success"
              containerStyle={{ position: 'absolute', top: 2, right: 3 }}
            />
          </Together>
          <SpaceBetween style={styles.spaceBetween}>
            <MasterName>{item.masterName}</MasterName>
            <Specialty>{item.specialty}</Specialty>
          </SpaceBetween>

          {/*}<Distance>{getDistanceFromLatLonInKm(
            { lat: region.latitude, lng: region.longitude },
            { lat: item.location.coordinates[0], lng: item.location.coordinates[1] }
          )} Km</Distance>{*/}
        </ItemView>
      </Shaddow>
    </Margin>
    //</Animated.View>
  );
};

export default function ListSearch() {
  const [data, setData] = useState([]);
  const [dataAux, setDataAux] = useState([]);
  const [value, setValue] = useState('');
  const [valueCidade, setValueCidade] = useState('');
  // MapView
  const [region, setRegion] = useState(null);

  /*useEffect(() => {
    /*Animated.spring(animatedValue, {
      toValue: 1,
      tension: 20,
      useNativeDriver: true,
    }).start();

    async function loadDocts() {
      const response = await api.get('/doctors').catch((err) => {
        console.log("erro" + err);
      });

      setData(response.data);
      setDataAux(response.data);

    }
    loadDocts();

    async function loadInitialPosition() {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then(location => {
          console.log(location);
          const { latitude, longitude } = location;
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          });
        })
        .catch(error => {
          const { code, message } = error;
          console.warn(code, message);
        });
    }
    loadInitialPosition();

  }, []);

  getDistanceFromLatLonInKm = (position1, position2) => {
    "use strict";
    const deg2rad = function (deg) { return deg * (Math.PI / 180); },
      R = 6371,
      dLat = deg2rad(position2.lat - position1.lat),
      dLng = deg2rad(position2.lng - position1.lng),
      a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
        + Math.cos(deg2rad(position1.lat))
        * Math.cos(deg2rad(position1.lat))
        * Math.sin(dLng / 2) * Math.sin(dLng / 2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (((R * c * 1000).toFixed()) / 1000);
  }


  searchFilterFunction = text => {
    Animated.spring(animatedValue, {
      toValue: 1,
      tension: 20,
      useNativeDriver: true,
    }).start();

    setValue(text);
    const newData = dataAux.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData); // this will return true if our itemData contains the textData
    });
    if (newData.length > 0) {
      setData(newData);
      Animated.spring(animatedValue, {
        toValue: 1,
        tension: 20,
        useNativeDriver: true,
      }).start();

    } else {
      setData(dataAux);

    }

  };

  searchFilterFunction = text => {

    setValue(text);
    const newData = dataAux.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData); // this will return true if our itemData contains the textData
    });

    setData(newData);

  };

  searchFilterFunctionCidade = textCidade => {

    setValueCidade(textCidade);
    const newData = dataAux.filter(item => {
      const itemData = `${item.city.toUpperCase()}`;
      const textData = textCidade.toUpperCase();
      return itemData.includes(textData); // this will return true if our itemData contains the textData
    });
    console.log(data);

    setData(newData);
  };*/


  return (
    <Container>
      <SafeAreaView style={styles.safeAreaView} />
      <NavHeader>
        <Margin>
          <TextInputWhite
            placeholder={'Pesquise sua mesa…'}
            secure={false}
            value={value}
            onChangeText={text => searchFilterFunction(text)}
          />
        </Margin>
      </NavHeader>

      <ContainerItems>
        <FlatList
          style={styles.list}
          data={doctors}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => renderListG(item, region)}
          ListEmptyComponent={() => <Text>Nehum registro</Text>}
        />

      </ContainerItems>
    </Container>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 0,
    backgroundColor: colors.blueDefault,
  },
  spaceBetween: {
    marginLeft: 10,
  },
  switchSelector: {
    position: 'absolute',
    bottom: 50,
  },
  switchText: {
    fontFamily: fonts.medium,
    textTransform: 'uppercase',
    fontSize: fonts.textInput,
  },
});
