import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
interface WeekdaysCardProps {
  weekday: ItemProps;
}
const WeeddayComponent: React.FC<WeekdaysCardProps> = ({weekday}) => {
  console.log(weekday)
  return (
    <View style={weekday.value?styles.daysitem:styles.daysitemnotselected}>
      <Text style={weekday.value?styles.weedaytext:styles.weedaytextnotselected}>{weekday.label}</Text>
    </View>
  );
};
export default WeeddayComponent;
const styles = StyleSheet.create({
  daysitem: {
    padding: 10,
    borderWidth: 1,
    marginLeft: 10,
    width: wp('11%'),
    borderRadius:30,
    backgroundColor:'rgb(52, 101, 127)'
  },
  daysitemnotselected:{
    padding: 10,
    borderWidth: 1,
    marginLeft: 10,
    width: wp('11%'),
    borderRadius:30,
    borderColor:'rgb(52,101,127)'
  },
  weedaytext: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
    color:'white',
    justifyContent:'center',
    alignSelf:'center'
  },
  weedaytextnotselected:{
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
    color:'rgb(52,101,127)',
    justifyContent:'center',
    alignSelf:'center'
  }
});
