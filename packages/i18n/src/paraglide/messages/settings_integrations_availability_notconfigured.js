import { getLocale } from '../runtime.js';

const translations = {"ar":"غير مُعدّ","bn":"কনফিগার করা হয়নি","de":"Nicht konfiguriert","en":"Not configured","es":"Sin configurar","fr":"Non configuré","hi":"कॉन्फ़िगर नहीं किया गया","id":"Tidak dikonfigurasi","pt-BR":"Não configurado","ru":"Не сконфигурированный","ur":"تشکیل شدہ نہیں ہے","zh-CN":"未配置"};

export function settings_integrations_availability_notconfigured(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
