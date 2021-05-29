import React, {FC, useEffect, useRef, useState} from 'react';
import {Platform, Text} from 'react-native';
import moment from 'moment';

interface TimerProps {
  roomSubText: number;
  remainingTime: number;
}
const Timer: FC<TimerProps> = ({roomSubText, remainingTime}) => {
  const [time, setTime] = useState(roomSubText);
  const intrevals: any = useRef(null);

  useEffect(() => {
    if (+roomSubText > 0) {
      intrevals.current = setInterval(() => {
        if (!isNaN(+roomSubText)) {
          setTime(t => {
            if (t === 0 || +t - 1 === 0) {
              clearInterval(intrevals.current);
            }
            return +t - 1;
          });
        }
      }, 1000);
    } else {
      setTime(0);
    }
    return () => {
      if (intrevals.current) {
        clearInterval(intrevals.current);
      }
    };
  }, [remainingTime, roomSubText]);

  return (
    <Text
      style={{
        color: '#fff',
        fontSize: 14,
        ...Platform.select({
          ios: {fontFamily: 'IBMPlexSans'},
          android: {fontFamily: 'IBMPlexSans-Regular'},
        }),
      }}>
      {moment()
        .startOf('day')
        .set('seconds', +time > 0 ? +time : 0)
        .format('HH:mm:ss') || roomSubText}
    </Text>
  );
};
export default Timer;
