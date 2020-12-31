import Svg, {Path, PolyGon, G, Circle} from 'react-native-svg';
import React from 'react';
export const Menu = ({size, fill}) => {
  return (
    <Svg version="1.1" viewBox="0 0 512 512" fill={fill} style={{width: size, height: size}}>
      <G>
        <G>
          <G>
            <Circle cx="256" cy="256" r="64" />
            <Circle cx="256" cy="448" r="64" />
            <Circle cx="256" cy="64" r="64" />
          </G>
        </G>
      </G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
    </Svg>
  );
};
