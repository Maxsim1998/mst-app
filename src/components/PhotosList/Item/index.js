import React from 'react';
import T from 'prop-types';
import { observer } from 'mobx-react-lite';
// styles
import { Wrap, Photo, Info, IconWrap, Content } from './styles';
// icons
import { Selected } from '../../../svg';

const Item = observer(({ item }) => {
  const { description, isSelected, color, src, toggleSelect } = item;
  return (
    <Wrap onClick={toggleSelect}>
      {isSelected && (
        <IconWrap>
          <Selected />
        </IconWrap>
      )}
      <Content>
        <Photo photosrc={src} color={color} />
        <Info>{description}</Info>
      </Content>
    </Wrap>
  );
});

Item.propTypes = {
  item: T.object.isRequired,
};

export default Item;
