import React from 'react';

interface IMask extends React.HTMLAttributes<HTMLDivElement> {
  zIndex?: number;
  className?: string;
}

const Mask: React.FC<IMask> = ({ zIndex, className, style, ...rest }) => {
  return (
    <div
      className={className}
      style={Object.assign({}, { zIndex }, style)}
      {...rest}
    />
  );
};

export default Mask;
