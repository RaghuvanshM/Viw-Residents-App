import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface RadioProps {
  style?: any;
  selected: boolean;
  text: string;
  changeRadio?: () => void;
}
const RadioButton: React.FC<RadioProps> = ({
  style,
  selected,
  changeRadio,
  text,
}) => {
  return (
    <TouchableOpacity onPress={changeRadio} style={styles.radioWrapper}>
      <View
        style={[
          styles.radioOuterLayer,
          selected && styles.radioOuterLayerSelected,
          style,
        ]}>
        {selected ? <View style={styles.radioInnerSelectedLayer} /> : null}
      </View>
      <Text style={[styles.radioText, selected && styles.radioTextSelected]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default RadioButton;
const styles = StyleSheet.create({
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterLayer: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.54)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterLayerSelected: {
    borderColor: 'rgb(33,150,243)',
  },
  radioInnerSelectedLayer: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: 'rgb(33,150,243)',
  },
  radioText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Medium',
    opacity: 0.5,
    color: 'rgb(52, 101, 127)',
  },
  radioTextSelected: {
    fontFamily: 'IBMPlexSans-Bold',
    opacity: 1,
  },
});
