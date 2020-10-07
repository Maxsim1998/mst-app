import React from 'react';
// styles
import { Wrap, Title } from './styles';
// hooks
import { useItemsListModel } from '../../hooks';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  const { selectedCount } = useItemsListModel();

  return (
    <Wrap>
      <Title>PhotoSelector, selected: {selectedCount}</Title>
    </Wrap>
  );
});
