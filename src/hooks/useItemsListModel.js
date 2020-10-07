import { useContext } from 'react';
import MSTContext from '../MSTContext';

export function useItemsListModel() {
  const Root = useContext(MSTContext);

  return Root.images;
}
