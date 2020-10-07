import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
// hooks
import { useItemsListModel } from '../../hooks';
// components
import { PhotoList } from '../../components';
// styles
import { Wrap } from './styles';

export const MainPage = observer(() => {
  const model = useItemsListModel();
  useEffect(() => {
    model.fetchItems();
  }, [model]);
  return (
    <Wrap>
      <PhotoList items={model.items} />
    </Wrap>
  );
});
