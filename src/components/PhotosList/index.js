import React from 'react';
import T from 'prop-types';
// components
import Item from './Item';
// styles
import { Wrap } from './styles';

export const PhotoList = ({ items }) => {
  return (
    <Wrap>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Wrap>
  );
};

PhotoList.propTypes = {
  items: T.arrayOf(T.object).isRequired,
};
