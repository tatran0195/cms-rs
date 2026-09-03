import { getLocale } from '../runtime.js';

const translations = {"ar":"محذوف","bn":"সরানো হয়েছে","de":"Entfernt","en":"Removed","es":"Eliminado","fr":"Supprimé","hi":"हटा दिया गया","id":"Dihapus","pt-BR":"Removido","ru":"Удален","ur":"ہٹا دیا گیا۔","zh-CN":"已删除"};

export function publish_removed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
