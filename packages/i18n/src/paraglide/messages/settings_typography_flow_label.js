import { getLocale } from '../runtime.js';

const translations = {"ar":"تباعد الكتل","bn":"ব্লক ব্যবধান","de":"Blockabstand","en":"Block spacing","es":"Espaciado de bloques","fr":"Espacement des blocs","hi":"रिक्ति को ब्लॉक करें","id":"Jarak blok","pt-BR":"Espaçamento entre blocos","ru":"Расстояние между блоками","ur":"وقفہ کاری بلاک کریں۔","zh-CN":"块间距"};

export function settings_typography_flow_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
