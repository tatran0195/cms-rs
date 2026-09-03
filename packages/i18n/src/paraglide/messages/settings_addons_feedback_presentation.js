import { getLocale } from '../runtime.js';

const translations = {"ar":"طريقة العرض","bn":"উপস্থাপন","de":"Darstellung","en":"Presentation","es":"Presentación","fr":"Présentation","hi":"प्रस्तुति","id":"Tampilan","pt-BR":"Apresentação","ru":"Отображение","ur":"پیشکش","zh-CN":"显示方式"};

export function settings_addons_feedback_presentation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
