import { STORAGE_KEYS } from './config';
import StorageUtil from '../../common/StorageUtil';

const getListIndexes = () => StorageUtil.getItem(STORAGE_KEYS.KB_SHOP_LIST_INDEX) || [];

const getList = () => {
  const indexes = getListIndexes();
  return indexes.map(id => StorageUtil.getItem(STORAGE_KEYS.KB_SHOP_PRE + id));
};


const saveList = (data) => {
  StorageUtil.setItem(STORAGE_KEYS.KB_SHOP_LIST_INDEX, data);
};

const getShop = (id) => StorageUtil.getItem(STORAGE_KEYS.KB_SHOP_PRE + id);

const addShop = (data) => {
  const now = new Date().getTime();
  StorageUtil.setItem(STORAGE_KEYS.KB_SHOP_PRE + data.shopId, Object.assign(data, {
    createTime: now,
    shopLastModified: now,
  }));
  const indexes = getListIndexes();
  indexes.push(data.shopId);
  saveList(indexes);
};

const saveShop = (id, data) => {
  StorageUtil.setItem(STORAGE_KEYS.KB_SHOP_PRE + id, Object.assign(data, {
    shopLastModified: new Date().getTime(),
  }));
};

const delShop = (id) => {
  StorageUtil.delItem(STORAGE_KEYS.KB_SHOP_PRE + id);
  const indexes = getListIndexes();
  for (let i = 0; i < indexes.length; i++) {
    if (indexes[i] === id) {
      indexes.splice(i, 1);
      break;
    }
  }
  saveList(indexes);
};

export default {
  getList,
  getShop,
  addShop,
  saveShop,
  delShop,
};
