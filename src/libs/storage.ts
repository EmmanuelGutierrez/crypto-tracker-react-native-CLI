import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  static instanse = new Storage();

  store = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.log('storage store err: ', error);
      return false;
    }
  };

  get = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('storage store err: ', error);
    }
  };

  multiGet = async (keys: string[]) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error) {
      console.log('storage store err: ', error);
    }
  };

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.log('storage store err: ', error);
    }
  };

  remove = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.log('storage store err: ', error);
      return false;
    }
  };
}
