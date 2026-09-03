import { getLocale } from '../runtime.js';

const translations = {"ar":"استدارة الزوايا","bn":"কোণার ব্যাসার্ধ","de":"Eckenradius","en":"Corner radius","es":"Radio de esquina","fr":"Rayon d'angle","hi":"कोने की त्रिज्या","id":"Jari-jari sudut","pt-BR":"Raio de canto","ru":"Угловой радиус","ur":"کونے کا رداس","zh-CN":"圆角半径"};

export function settings_styling_radius_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
