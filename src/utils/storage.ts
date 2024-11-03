/**
 * localStorage 模块封装
 * @param key {string} 参数名称
 * @param value {any} 写入值
 */
export default {
  set(key: string, value: any) {
    if(typeof value !== 'string') {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value);
    }
  },
  get(key: string) {
    const value = localStorage.getItem(key);
    if (!value) return;
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
};
