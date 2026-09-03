import { getLocale } from '../runtime.js';

const translations = {"ar":"معاينة مباشرة","bn":"লাইভ প্রিভিউ","de":"Live-Vorschau","en":"Live preview","es":"Vista previa en vivo","fr":"Aperçu en direct","hi":"लाइव पूर्वावलोकन","id":"Pratinjau langsung","pt-BR":"Visualização ao vivo","ru":"Предварительный просмотр в реальном времени","ur":"لائیو پیش نظارہ","zh-CN":"实时预览"};

export function settings_theme_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
