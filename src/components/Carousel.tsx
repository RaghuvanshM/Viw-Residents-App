import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

interface CarouselItemProps {
  title: string;
  text: string;
}
interface CarouselProps {
  items: CarouselItemProps[];
  itemsPerInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({items, itemsPerInterval}) => {
  const itemsPerIntervals =
    itemsPerInterval === undefined ? 1 : itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (initWidth: number) => {
    setWidth(initWidth);
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerIntervals));
  };

  const getInterval = (offset: number) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 0.5 : 0.1,
        }}>
        &bull;
      </Text>,
    );
  }

  return (
    <View style={[styles.container]}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={w => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x) || 10000);
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast">
        {items.map((item, index) => {
          return (
            <View style={styles.slide} key={index}>
              <Text style={styles.slideTitle}>{item.title}</Text>
              <Text style={{...styles.slideText}}>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    width: '100%',
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    // paddingTop: 2,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
  slide: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
  slideTitle: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'DesertDogHmk',
    color: 'rgb(96, 96, 96)',
    marginBottom: 0,
    fontSize: 37,
  },
  slideText: {
    width: '100%',
    textAlign: 'center',
    color: 'rgb(96, 96, 96)',
    fontSize: 16,
    fontFamily: 'IBMPlexSans',
  },
  stat: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: '33%',
    flex: 1,
    maxWidth: '33%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  statText: {
    width: '100%',
    textAlign: 'left',
    color: '#8cb2bc',
    fontSize: 15,
    fontFamily: 'IBMPlexSans',
  },
  statHold: {
    width: '100%',
    marginBottom: 8,
  },
  statLabel: {
    width: '100%',
    textAlign: 'left',
    fontSize: 11,
    fontWeight: '600',
    paddingTop: 5,
  },
});
