import React from 'react'

const SvgWrapper = ({ icon: Icon, size = 24, color = 'currentColor', className = '', ...props }) => {
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
        style={{ width: size, height: size, color }}
        {...props}
      >
        <Icon width={size} height={size} fill={color} />
      </div>
    );
  };

export default SvgWrapper
