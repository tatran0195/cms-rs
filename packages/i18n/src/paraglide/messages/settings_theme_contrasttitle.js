import { getLocale } from '../runtime.js';

const translations = {"ar":"يحتاج التباين إلى مراجعة","bn":"কন্ট্রাস্ট মনোযোগ প্রয়োজন","de":"Kontrast braucht Aufmerksamkeit","en":"Contrast needs attention","es":"El contraste necesita atención","fr":"Le contraste mérite attention","hi":"कंट्रास्ट पर ध्यान देने की जरूरत है","id":"Kontras perlu diperhatikan","pt-BR":"O contraste precisa de atenção","ru":"Контраст требует внимания","ur":"متضاد توجہ کی ضرورت ہے","zh-CN":"需要注意对比"};

export function settings_theme_contrasttitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
