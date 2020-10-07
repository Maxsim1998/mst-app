import { types } from 'mobx-state-tree';

// models
import { ItemsListModel } from './itemsModel';

const RootModel = types.model('RootModel', {
  images: ItemsListModel,
});

export const rootModel = RootModel.create({
  images: {},
});
