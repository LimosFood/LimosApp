import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={props.width || 21}
      height={props.height || 26}
      fill="none"
      viewBox="0 0 13 18"
      {...props}>
      <Path
        d="M6.305 7.957a3.478 3.478 0 100-6.957 3.478 3.478 0 000 6.957zM1.088 16.652v-1.739a3.478 3.478 0 013.478-3.478h3.479a3.478 3.478 0 013.478 3.478v1.74"
        stroke={props.stroke || '#16CEBE'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
