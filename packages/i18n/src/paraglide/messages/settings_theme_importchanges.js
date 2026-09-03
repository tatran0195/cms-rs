import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} تغييرًا مقترحًا","bn":"{count} প্রস্তাবিত পরিবর্তন","de":"{count} vorgeschlagene Änderungen","en":"{count} proposed changes","es":"{count} cambios propuestos","fr":"{count} modifications proposées","hi":"{count} प्रस्तावित परिवर्तन","id":"{count} usulan perubahan","pt-BR":"{count} alterações propostas","ru":"{count} предлагаемые изменения","ur":"{count} تجویز کردہ تبدیلیاں","zh-CN":"{count} 提议的更改"};

export function settings_theme_importchanges(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
