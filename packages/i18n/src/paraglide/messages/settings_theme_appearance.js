import { getLocale } from '../runtime.js';

const translations = {"ar":"المظهر الافتراضي","bn":"ডিফল্ট চেহারা","de":"Standarderscheinung","en":"Default appearance","es":"Apariencia predeterminada","fr":"Apparence par défaut","hi":"डिफ़ॉल्ट उपस्थिति","id":"Penampilan bawaan","pt-BR":"Aparência padrão","ru":"Внешний вид по умолчанию","ur":"پہلے سے طے شدہ ظاہری شکل","zh-CN":"默认外观"};

export function settings_theme_appearance(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
