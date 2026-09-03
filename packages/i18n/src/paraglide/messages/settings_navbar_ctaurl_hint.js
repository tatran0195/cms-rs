import { getLocale } from '../runtime.js';

const translations = {"ar":"الوجهة التي يرتبط بها زر الإجراء.","bn":"যেখানে CTA বোতাম লিঙ্ক করে।","de":"Wohin die CTA-Schaltfläche führt.","en":"Where the CTA button links to.","es":"A dónde se vincula el botón CTA.","fr":"Où le bouton CTA renvoie.","hi":"CTA बटन कहां से लिंक होता है.","id":"Tempat tombol CTA tertaut.","pt-BR":"Para onde o botão CTA está vinculado.","ru":"Куда ссылается кнопка CTA.","ur":"جہاں CTA بٹن لنک کرتا ہے۔","zh-CN":"CTA 按钮链接到的位置。"};

export function settings_navbar_ctaurl_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
