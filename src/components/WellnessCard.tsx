import React, {FC} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import images from '../assets/images';
interface WellnessCardProps {}
const WellnessCard: FC<WellnessCardProps> = ({}) => {
  return (
    <View style={styles.shadowWrap}>
      <View style={styles.card}>
        <Image
          style={{
            width: '100%',
            height: 170,
          }}
          source={images.femaleHikerBg}
        />
        <View style={{backgroundColor: '#fff'}}>
          <Text
            style={{
              padding: 10,
              fontFamily: 'SFProDisplay-Bold',
              backgroundColor: 'rgb(171,65,221)',
              color: '#fff',
              fontSize: 20,
            }}>
            Today is a great day for a hike!
          </Text>
          <View style={styles.bottomRow}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 40, height: 40, marginRight: 10}}
                source={images.sunset}
              />
              <View>
                <Text style={styles.rowTitle}>
                  Hike Seneca Rocks, Virginia{' '}
                </Text>

                <Text style={styles.rowSubtitle}>Moderate 7 mile hike</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Image
                style={{tintColor: '#fff', height: 14}}
                source={images.arrowRight}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default WellnessCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    marginHorizontal: 15,
  },
  bottomRow: {
    justifyContent: 'space-between',
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SFProDisplay-Bold',
  },
  rowSubtitle: {
    color: 'rgba(144, 194, 221, 0.6)',
    fontSize: 14,
    fontFamily: 'SFProDisplay-Regular',
  },
  shadowWrap: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
