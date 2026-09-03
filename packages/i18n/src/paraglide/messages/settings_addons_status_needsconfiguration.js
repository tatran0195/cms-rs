import { getLocale } from '../runtime.js';

const translations = {"ar":"تحتاج إلى إعداد","bn":"কনফিগারেশন প্রয়োজন","de":"Konfiguration erforderlich","en":"Needs configuration","es":"Requiere configuración","fr":"Configuration requise","hi":"कॉन्फ़िगरेशन आवश्यक","id":"Perlu konfigurasi","pt-BR":"Requer configuração","ru":"Требуется настройка","ur":"ترتیب درکار ہے","zh-CN":"需要配置"};

export function settings_addons_status_needsconfiguration(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
