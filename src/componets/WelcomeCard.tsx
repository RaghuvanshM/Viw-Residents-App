import React, {FC} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

interface WelcomeCardProps {
  cardTitle: string;
  savings?: boolean;
  cardDescription: string;
}
const WelcomeCard: FC<WelcomeCardProps> = ({
  savings = false,
  cardTitle,
  cardDescription,
}) => {
  return (
    <View style={styles.shadowWrap}>
      <View style={styles.card}>
        <View
          style={{
            backgroundColor: savings ? 'rgb(135,191,43)' : 'transparent',
            marginBottom: 5,
            paddingVertical: 5,
          }}>
          <Text
            style={[
              styles.title,
              {
                color: savings ? '#fff' : 'rgb(52,101,127)',
                paddingTop: !savings ? 10 : 0,
              },
            ]}>
            {cardTitle}
          </Text>
        </View>

        <Text style={styles.description}>{cardDescription}</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Got it</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WelcomeCard;
const styles = StyleSheet.create({
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
  card: {
    borderRadius: 8,
    margin: 10,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    overflow: 'hidden',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "IBMPlexSans-Bold",
    color: 'rgb(52,101,127)',
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    fontFamily: "IBMPlexSans-Regular",
    color: 'rgb(52,101,127)',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(88,166,232)',
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
