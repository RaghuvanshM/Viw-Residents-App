import React, {Fragment, useEffect} from 'react';
import {View} from 'react-native';
import Cursor from './Cursor';
import CursorVertical from './CursorVertical';
import Labels from './Labels';
import {useState} from 'react';
import StyleSheetFactory from './Stylesheet';

// const isHorizontal = false;
interface SliderProps {
  size: any;
  isHorizontal?: boolean;
  count?: number;
  backgroundColor?: string;
  allColors?: string[];
  children: JSX.Element[] | JSX.Element;
  defaultIndex?: number;
  texts?: any;
  showSlider?: boolean;
  changeSelectedIndex?: (index: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  size,
  isHorizontal = false,
  count = 4,
  backgroundColor = 'rgba(3,3,3,0.5)',
  changeSelectedIndex,
  showSlider = true,
  defaultIndex = 0,
  children,
  texts,
  allColors = ['#033D65', '#3173A2', '#66ADE0', '#BBD9EF'],
}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  useEffect(() => {
    if (changeSelectedIndex) {
      changeSelectedIndex(selectedIndex);
    }
  }, [selectedIndex, changeSelectedIndex]);
  const style = StyleSheetFactory.getSheet(
    isHorizontal,
    size,
    backgroundColor,
    count,
  );
  if (isHorizontal) {
    return (
      <View style={style.container}>
        <Labels
          {...{count}}
          size={size}
          texts={texts}
          selected={selectedIndex}
          isHorizontal={isHorizontal}
          allColors={allColors}
        />
        {showSlider && (
          <Cursor
            size={size / count}
            {...{count}}
            changeIndex={setSelectedIndex}
            currentIndex={selectedIndex}>
            {children}
          </Cursor>
        )}
      </View>
    );
  }
  return (
    <View style={style.container}>
      <Labels
        {...{count}}
        size={size}
        texts={texts}
        selected={selectedIndex}
        isHorizontal={isHorizontal}
        allColors={allColors}
      />
      {showSlider && (
        <CursorVertical
          size={size / count}
          {...{count}}
          changeIndex={setSelectedIndex}
          currentIndex={selectedIndex}>
          <Fragment>{children}</Fragment>
        </CursorVertical>
      )}
    </View>
  );
};
export default Slider;
