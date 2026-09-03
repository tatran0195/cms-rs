import { getLocale } from '../runtime.js';

const translations = {"ar":"العودة إلى الرئيسية","bn":"বাড়ি ফিরে","de":"Zurück nach Hause","en":"Back home","es":"De vuelta a casa","fr":"De retour à la maison","hi":"घर वापस","id":"Kembali ke rumah","pt-BR":"De volta para casa","ru":"Вернуться домой","ur":"گھر واپس","zh-CN":"回到家"};

export function notfound_backhome(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
