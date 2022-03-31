import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={props.width || 14}
      height={props.height || 23}
      fill="none"
      {...props}
      viewBox="0 0 14 23 ">
      <Path
        d="M11.75 2.25l-9.5 9.25 9.5 9.25"
        stroke={props.stroke || '#16CEBE'}
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
