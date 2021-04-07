/**
 * Created by Harrison on 2019/4/4.
 * AsyncStorage
 */
 import AsyncStorage from "@react-native-community/async-storage";

 const CACHE_VERSION = 1;

 export enum LocalStorageKeys {
    USER_IS_LOGIN = "USER_IS_LOGIN"
 }
 
 export default class StorageUtil {
     static storageKeyName(key: string): string {
         return `${key}_${CACHE_VERSION}`;
     }
 
     /**
      * save Json object
      * @param key
      * @param value
      * @param callback
      */
     static async saveJsonObject(key: string, value: any) {
         return StorageUtil.saveString(key, JSON.stringify(value));
     }
 
     /**
      * get Json object
      * @param key
      * @param defaultObject
      */
     static async getJsonObject(key: string, defaultObject?: any) {
         let result = null;
         try {
             result = await StorageUtil.getString(key, null);
             return result ? JSON.parse(result) : defaultObject || null;
         } catch (err) {
             if (defaultObject) {
                 return Promise.resolve(defaultObject);
             } else {
                 return Promise.reject(err);
             }
         }
     }
 
     /**
      * save a key
      * @param key
      * @param value
      */
     static async saveString(key: string, value: string) {
         if (key != null && value != null) {
             try {
                 const existKeys = await StorageUtil.getAllKeys();
                 existKeys.forEach(existKey => existKey.startsWith(key) && existKey !== StorageUtil.storageKeyName(key) && StorageUtil.remove(existKey, true));
                 await AsyncStorage.setItem(StorageUtil.storageKeyName(key), value);
             } catch (err) {
                 return Promise.reject(err);
             }
             return Promise.resolve(true);
         } else {
             return Promise.reject(new Error("Key and value can not be null"));
         }
     }
 
     /**
      * get a key
      * @param key
      * @param defaultValue
      */
     static async getString(key: string, defaultValue: string | null = null) {
         const noDataError = {msg: "No value found !"};
         if (key != null) {
             const result = await AsyncStorage.getItem(StorageUtil.storageKeyName(key));
             return result || defaultValue;
         } else {
             if (defaultValue) {
                 return Promise.resolve(defaultValue);
             } else {
                 return Promise.reject(noDataError);
             }
         }
     }
 
     /**
      * remove a key
      * @param key
      */
     static async remove(key: string, exactKey?: boolean) {
         const result = true;
         try {
             if (exactKey) {
                 await AsyncStorage.removeItem(key);
             } else {
                 const existKeys = await StorageUtil.getAllKeys();
                 const promises = Promise.all(existKeys.map(existKey => existKey.startsWith(key) && existKey !== key && StorageUtil.remove(existKey, true)));
                 await promises;
             }
         } catch (err) {
             return Promise.reject(err);
         }
         return result;
     }
 
     /**
      * get all keys
      */
     static async getAllKeys() {
         try {
             return await AsyncStorage.getAllKeys();
         } catch (err) {
             return Promise.reject(err);
         }
     }
 }
 