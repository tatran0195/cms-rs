import { getLocale } from '../runtime.js';

const translations = {"ar":"حلقة التركيز","bn":"ফোকাস রিং","de":"Fokusring","en":"Focus ring","es":"Anillo de enfoque","fr":"Contour de focus","hi":"फोकस रिंग","id":"Cincin fokus","pt-BR":"Anel de foco","ru":"Кольцо фокусировки","ur":"فوکس انگوٹی","zh-CN":"对焦环"};

export function settings_theme_color_focus(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
