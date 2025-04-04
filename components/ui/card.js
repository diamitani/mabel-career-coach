import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
