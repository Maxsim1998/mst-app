import { types, getParent, flow } from 'mobx-state-tree';
import api from '../api';

export const ItemModel = types
  .model('ItemModel', {
    isSelected: types.optional(types.boolean, false),
    id: types.identifier,
    src: types.string,
    description: types.string,
    color: types.optional(types.string, ''),
    created_at: types.string,
  })
  .actions((self) => ({
    toggleSelect() {
      self.isSelected = !self.isSelected;

      const list = getParent(self, 2);
      list.setSelected(self);
    },
  }));

export const ItemsListModel = types
  .model('ItemsListModel', {
    items: types.array(ItemModel),
    selected: types.maybe(types.reference(ItemModel)),
  })
  .actions((self) => ({
    fetchItems: flow(function* fetchItems() {
      self.state = 'pending';
      try {
        const res = yield api.getPhotos();
        const prepareData = (data) =>
          data.map(
            ({
              id,
              description,
              alt_description,
              urls,
              color,
              created_at,
            }) => ({
              id,
              color,
              created_at,
              description:
                description || alt_description || 'There is no description',
              src: urls.regular,
            })
          );
        self.items = prepareData(res);
        self.state = 'done';
      } catch (error) {
        console.error('Failed to fetch photos', error);
        self.state = 'error';
      }
    }),
    setSelected(model) {
      self.selected = model;
    },
  }))
  .views((self) => ({
    get selectedList() {
      return self.items.filter((i) => i.isSelected);
    },
    get selectedCount() {
      return self.items.filter((i) => i.isSelected).length;
    },
  }));
