import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckedAndroid = ({checked, style, ...props}) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      {...props}>
      {checked ? (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-4.808 1.4-1.346 3.6 3.462L17.6 7 19 8.346 10 17z"
          fill="#2C98F0"
        />
      ) : (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
          fill="#62ACED"
        />
      )}
    </Svg>
  );
};

export default CheckedAndroid;
