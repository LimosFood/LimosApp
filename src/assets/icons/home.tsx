import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={28} height={28} fill="none" viewBox="0 0 28 28">
      <Path
        d="M24.5 9.066l-8.015-6.223a4.012 4.012 0 00-4.921 0L3.547 9.066A4 4 0 002 12.224v10.802c0 .796.317 1.559.88 2.122a3.009 3.009 0 002.126.878h18.037c.797 0 1.561-.316 2.125-.878.564-.563.88-1.326.88-2.122V12.224c0-1.235-.57-2.4-1.548-3.158z"
        stroke={props.stroke || '#B5B5B5'}
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.028 14.138c1.785 0 3.45.514 4.856 1.402v4.902a5.604 5.604 0 10-9.115 6.441h-4.087a9.104 9.104 0 018.346-12.745zm4.856 12.746v-.842c-.173.3-.373.58-.596.842h.596z"
        fill={props.fill || '#B5B5B5'}
      />
    </Svg>
  );
}

export default SvgComponent;
