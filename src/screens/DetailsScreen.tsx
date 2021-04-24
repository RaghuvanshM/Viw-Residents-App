import {Image, Text, View} from 'react-native';
import React from 'react';
import FadedComponent from '../components/FadedComponent';
import images from "../assets/images";

const DetailsScreen = () => {
  return (
    <View>
      <Image
        resizeMode="cover"
        style={{height: 200, width: '100%', backgroundColor: "red"}}
        source={images.vbgNature}
      />
      <View
        style={{
          flex: 1,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <FadedComponent color="#fff" height={100} direction={'up'}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <Text style={{color: 'white'}}>Hellow</Text>
          </View>
        </FadedComponent>
      </View>
    </View>
  );
};

export default DetailsScreen;
