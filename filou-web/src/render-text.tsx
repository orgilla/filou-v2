import * as React from 'react';
import { FelaComponent } from '@filou/core';
import cloudinary from './cloudinary';

const renderText = (item: any = [], index: any = 0): React.ReactNode => {
  if (!item) {
    return null;
  }
  if (item && typeof item === 'string') {
    return <p>{item}</p>;
  }
  if (Array.isArray(item)) {
    return item.map(renderText);
  }
  if (Array.isArray(item.text)) {
    return item.text.map(renderText);
  }
  if ((item.type === 'paragraph' || !item.type) && item.text) {
    return <p key={index}>{item.text}</p>;
  } else if (item.type === 'image') {
    return (
      <FelaComponent
        style={{
          float: 'left',
          width: '200px',
          height: 'auto',
          ifSmallDown: {
            width: '100%',
            maxWidth: 200,
            marginX: 'auto',
            float: 'initial'
          }
        }}
        render={({ className }) => (
          <img
            key={index}
            className={className}
            src={cloudinary(item.url, 'w_400')}
          />
        )}
      />
    );
  }
  return null;
};

export default renderText;
