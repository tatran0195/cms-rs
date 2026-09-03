import { getLocale } from '../runtime.js';

const translations = {"ar":"ملاحظة أو تحذير ملوّن.","bn":"একটি রঙিন নোট বা সতর্কতা।","de":"Eine farbige Notiz oder Warnung.","en":"A colored note or warning.","es":"Una nota o advertencia de color.","fr":"Une note ou un avertissement en couleur.","hi":"एक रंगीन नोट या चेतावनी.","id":"Catatan atau peringatan berwarna.","pt-BR":"Uma nota ou aviso colorido.","ru":"Цветное примечание или предупреждение.","ur":"رنگین نوٹ یا وارننگ۔","zh-CN":"彩色注释或警告。"};

export function editor_slash_callout_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
