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
    if (direction === 'up') {
      setPixelsStyle({...pixelsStyle, bottom: 0});
      collection.push(0);
      i = pi;
      while (i < 1) {
        collection.push(i);
        i += pi;
      }
      collection.push(1);
    } else {
      setPixelsStyle({...pixelsStyle, top: 0});
      collection.push(1);
      i = 1.0;
      while (i > 0) {
        collection.push(i);
        i -= pi;
      }
      collection.push(0);
    }
    let r = 0;
    let g = 0;
    let b = 0;
    const colors: any = hexToRgb(color);
    if (colors) {
      r = colors.r;
      g = colors.g;
      b = colors.b;
    }
    setCollection(collection);
    setR(r);
    setG(g);
    setB(b);
  }, [direction]);

  const hexToRgb = (hex: string) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
