import React, {useRef} from 'react';
import {clamp, onGestureEvent, snapPoint, timing} from 'react-native-redash';
import Animated, {cond, eq, set, useCode} from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const {Value, add, call} = Animated;

interface CursorProps {
  // y: Animated.Value<number>;
  size: number;
  count: number;
  currentIndex: number;
  changeIndex: (index: number) => void;
  children: JSX.Element[] | JSX.Element;
}

const CursorVertical: React.FC<CursorProps> = ({
  size,
  count,
  children,
  changeIndex,
  currentIndex,
}: CursorProps) => {
  const snapPoints = new Array(count).fill(0).map((e, i) => i * size);
  const yLong = useRef(new Value(snapPoints[currentIndex]));
  const translationY = useRef(new Value(0));
  const velocityY = useRef(new Value(0));
  const state = useRef(new Value(State.UNDETERMINED));
  const gestureHandler = useRef(
    onGestureEvent({
      state: state.current,
      translationY: translationY.current,
      velocityY: velocityY.current,
    }),
  );
  const offset = useRef(new Value(snapPoints[currentIndex]));
  const value = useRef(add(offset.current, translationY.current));
  const translateY = useRef(
    clamp(
      cond(
        eq(state.current, State.END),
        set(
          offset.current,
          timing({
            from: value.current,
            to: snapPoint(value.current, velocityY.current, snapPoints),
          }),
        ),
        value.current,
      ),
      0,
      (count - 1) * size,
    ),
  );
  useCode(
    () => set(yLong.current, translateY.current),
    [yLong.current, translateY.current],
  );

  useCode(() => {
    return call([yLong.current], y => {
      const arr = snapPoints.findIndex(dy => dy === y[0]);
      if (arr !== -1) {
        changeIndex(arr);
      }
    });
  }, [yLong.current]);
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
          transform: [{translateY: yLong.current}],
        }}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};
export default CursorVertical;
