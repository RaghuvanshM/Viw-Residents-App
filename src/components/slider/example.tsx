import React, {Fragment, useState} from 'react';
import {Image} from 'react-native';
import image from '../../assets/images';
import Slider from './Slider';
const Example = () => {
  const [selectedIndex, setSelectedIndex] = useState(3);
  return (
    <Slider
      isHorizontal={true}
      changeSelectedIndex={setSelectedIndex}
      defaultIndex={2}>
      <Fragment>
        {selectedIndex === 3 && (
          <Image
            source={image.blueDarkBtn}
            resizeMode={'cover'}
            style={{
              borderWidth: 2,
              width: 150,
              height: 150,
              marginTop: 40,
            }}
          />
        )}
        {selectedIndex === 2 && (
          <Image
            source={image.blueMediumBtn}
            resizeMode={'cover'}
            style={{
              borderWidth: 2,
              width: 150,
              height: 150,
              marginTop: 40,
            }}
          />
        )}
        {selectedIndex === 1 && (
          <Image
            source={image.blueLightBtn}
            resizeMode={'cover'}
            style={{
              borderWidth: 2,
              width: 150,
              height: 150,
              marginTop: 40,
            }}
          />
        )}
        {selectedIndex === 0 && (
          <Image
            source={image.blueClearBtn}
            resizeMode={'cover'}
            style={{
              borderWidth: 2,
              width: 150,
              height: 150,
              marginTop: 30,
            }}
          />
        )}
      </Fragment>
    </Slider>
  );
};
export default Example;
