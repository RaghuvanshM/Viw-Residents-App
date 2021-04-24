import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

interface FadedComponentProps {
  children: any;
  color: string;
  height: number;
  direction: string;
}
const divisor = 1000;
const pi = 1 / divisor;

const FadedComponent: React.FC<FadedComponentProps> = ({
  children,
  height,
  color = '#000000',
  direction = 'up',
}) => {
  const [collection, setCollection]: any = useState([]);
  const [r, setR]: any = useState(0);
  const [g, setG]: any = useState(0);
  const [b, setB]: any = useState(0);
  const [pixelsStyle, setPixelsStyle]: any = useState({
    width: '100%',
    position: 'absolute',
    height,
    flexDirection: 'column',
  });

  useEffect(() => {
    let i;
    const collections = [];
    if (direction === 'up') {
      setPixelsStyle({...pixelsStyle, bottom: 0});
      collections.push(0);
      i = pi;
      while (i < 1) {
        collections.push(i);
        i += pi;
      }
      collections.push(1);
    } else {
      setPixelsStyle({...pixelsStyle, top: 0});
      collections.push(1);
      i = 1.0;
      while (i > 0) {
        collections.push(i);
        i -= pi;
      }
      collections.push(0);
    }
    let red = 0;
    let green = 0;
    let blue = 0;
    const colors: any = hexToRgb(color);
    if (colors) {
      red = colors.r;
      green = colors.g;
      blue = colors.b;
    }
    setCollection(collections);
    setR(red);
    setG(green);
    setB(blue);
  }, [direction, color, pixelsStyle]);

  const hexToRgb = (hex: string) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, red, green, blue) => {
      return red + red + green + green + blue + blue;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  return (
    <View style={{flexDirection: 'column'}}>
      <View style={pixelsStyle}>
        {collection.map((o: any, key: any) => (
          <View
            key={key}
            style={{
              height: height / divisor,
              backgroundColor: `rgba(${r}, ${g}, ${b}, ${o})`,
            }}
          />
        ))}
      </View>
      {children}
    </View>
  );
};

export default FadedComponent;
