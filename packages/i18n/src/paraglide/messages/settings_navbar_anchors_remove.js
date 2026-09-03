import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة المرساة","bn":"নোঙ্গর সরান","de":"Anker entfernen","en":"Remove anchor","es":"Quitar ancla","fr":"Retirer l'ancre","hi":"लंगर हटाओ","id":"Hapus jangkar","pt-BR":"Remover âncora","ru":"Удалить якорь","ur":"لنگر ہٹا دیں۔","zh-CN":"移除锚点"};

export function settings_navbar_anchors_remove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
