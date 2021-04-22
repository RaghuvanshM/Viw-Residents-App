import React, {useRef} from 'react';
import {clamp, onGestureEvent, snapPoint, timing} from 'react-native-redash';
import Animated, {cond, eq, set, useCode} from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const {Value, add, call} = Animated;

interface CursorProps {
  size: number;
  count: number;
  currentIndex: number;
  changeIndex: (index: number) => void;
  children: JSX.Element[] | JSX.Element;
}

const Cursor: React.FC<CursorProps> = ({
  size,
  count,
  children,
  changeIndex,
  currentIndex,
}) => {
  const xLong = useRef(new Value(0));
  const snapPoints = new Array(count).fill(0).map((e, i) => i * size);
  const translationX = useRef(new Value(0));
  const velocityX = useRef(new Value(0));
  const state = useRef(new Value(State.UNDETERMINED));
  const gestureHandler = useRef(
    onGestureEvent({
      state: state.current,
      translationX: translationX.current,
      velocityX: velocityX.current,
    }),
  );
  const offset = useRef(new Value(snapPoints[currentIndex]));
  const value = useRef(add(offset.current, translationX.current));
  const translateX = useRef(
    clamp(
      cond(
        eq(state.current, State.END),
        set(
          offset.current,
          timing({
            from: value.current,
            to: snapPoint(value.current, velocityX.current, snapPoints),
          }),
        ),
        value.current,
      ),
      0,
      (count - 1) * size,
    ),
  );
  useCode(() => set(xLong.current, translateX.current), [
    xLong.current,
    translateX.current,
  ]);

  useCode(() => {
    return call([xLong.current], x => {
      const arr = snapPoints.findIndex(dx => dx === x[0]);
      if (arr !== -1) {
        changeIndex(arr);
      }
    });
  }, [xLong.current]);
  return (
    <PanGestureHandler {...gestureHandler.current}>
      <Animated.View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{translateX: xLong.current}],
        }}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};
export default Cursor;
