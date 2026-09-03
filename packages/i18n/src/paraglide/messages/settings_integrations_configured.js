import { getLocale } from '../runtime.js';

const translations = {"ar":"مُعدّة","bn":"কনফিগার করা হয়েছে","de":"Konfiguriert","en":"Configured","es":"Configurado","fr":"Configuration","hi":"कॉन्फ़िगर किया गया","id":"Dikonfigurasi","pt-BR":"Configurado","ru":"сконфигурированный","ur":"تشکیل کردہ","zh-CN":"已配置"};

export function settings_integrations_configured(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
