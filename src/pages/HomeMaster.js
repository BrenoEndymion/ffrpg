
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container, BtnCircle, ContainerItems, Shaddow, ItemView, MasterName, Specialty } from './styles/HomeMasterStyles';
import { BtnDefaultCircle } from "../components/Buttons";
import { AlignCenter, MarginTop, SpaceBetween, Together, ShaddowGreen, Margin } from '../components/styles/general';
import {Header, Avatar, Badge} from "react-native-elements";
import colors from '../config/colors';
import Icon from "../components/Icons"
import ProgressLoader from 'rn-progress-loader';
import { Actions } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import fonts from '../config/fonts';
import api from '../services/api';
import { useSelector } from 'react-redux';


export default function HomeMaster(props) {
  
    const [hasHero, setHasHero] = useState(false);
    const [visible, setVisible] = useState(true);
    const user = useSelector(state => state.data);
    const [rooms, setRooms] = useState({});

    /*const rooms = [
        {
          id: 1,
          masterName: 'Retorno de julgran',
          specialty: 'FFRPG',
          rate: 4,
        },
      ];*/

      useEffect(() => {

        async function loadRooms() {
          const data = new FormData();
          data.append('master_id', user._id);

          const response = await api.post('/masterroom', data);
          if (response.status == 200 || response.status == "200") {
            if(response.data.ok == 1){
              setHasHero(true);
              setVisible(false);
              setRooms(response.data.rooms);
            }
          } else {
            Alert.alert(
              'Erro',
              'Houve um erro ao buscar mesas.',
              [
                  { text: 'OK', onPress: () => setVisible(false) },
              ],
              { cancelable: false },
           ); 
          }
          setVisible(false);
        }
        
        loadRooms();
    }, []);

      renderList = (item, region) => {

        return (
          //<Animated.View style={[styles.button, {transform: [{translateX}]}]}>
          <Margin>
            <Shaddow>
              <ItemView style={styles.itemView}>
                <Together>
                  <Avatar
                    rounded
                    source={(item.url_image_room != "" ? {uri: `http://localhost:8080/files/${item.url_image_room}` } : require(`../assets/images/logoffrpg.png`))}
                    size="medium"
                  />
      
                  <Badge
                    status={(item.online ? "success" : "warning" ) }
                    containerStyle={{ position: 'absolute', top: 2, right: 3 }}
                  />
                </Together>
                <SpaceBetween style={styles.spaceBetween}>
                  <MasterName>{user.name}</MasterName>
                  <Specialty>{item.name}</Specialty>
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

    return (
        <Container>
          <ProgressLoader
                visible={visible}
                isModal={true} isHUD={true}
                hudColor={"#000000"}
                color={"#FFFFFF"} />
          <Header
              //leftComponent={<GoBack />}
              statusBarProps={{ barStyle: 'light-content' }}
              barStyle="light-content"
              centerComponent={{ text: ( hasHero ? 'Suas mesas' : 'Crie sua Mesa'), style: styles.headerText }}
              containerStyle={{
                  backgroundColor: colors.blueDefault,
                  justifyContent: 'space-around',
              }}
          />
          { !hasHero &&
            <Margin style={styles.nochar}>
              <ShaddowGreen>
                <BtnCircle onPress={() => Actions.createroom()} ><Icon name="plus" color={{color: colors.blueDefault }} /></BtnCircle>
              </ShaddowGreen>
            </Margin>
          }
          { hasHero && 
              <ContainerItems>
              <FlatList
                style={styles.list}
                data={rooms}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item }) => renderList(item)}
                ListEmptyComponent={() => <Text>Nehum registro</Text>}
              />
      
            </ContainerItems>
          }
        </Container>
    );
}

const styles = StyleSheet.create({
    nochar: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    headerText: {
      fontSize: 20,
      color: colors.white,
    },
    spaceBetween: {
        marginLeft: 10,
      },
  });
  