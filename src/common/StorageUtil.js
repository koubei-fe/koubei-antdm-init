export default class StorageUtil {
  static setItem(key, val, isSession = false) {
    const adapter = isSession ? sessionStorage : localStorage;
    adapter.setItem(key, JSON.stringify(val));
  }
  static getItem(key, isSession = false) {
    const adapter = isSession ? sessionStorage : localStorage;
    return JSON.parse(adapter.getItem(key));
  }
  static delItem(key, isSession = false) {
    const adapter = isSession ? sessionStorage : localStorage;
    adapter.removeItem(key);
  }
}
