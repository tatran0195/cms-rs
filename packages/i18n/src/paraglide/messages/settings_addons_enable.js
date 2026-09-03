import { getLocale } from '../runtime.js';

const translations = {"ar":"تفعيل {name}","bn":"{name} চালু করুন","de":"{name} aktivieren","en":"Enable {name}","es":"Activar {name}","fr":"Activer {name}","hi":"{name} सक्षम करें","id":"Aktifkan {name}","pt-BR":"Ativar {name}","ru":"Включить {name}","ur":"{name} فعال کریں","zh-CN":"启用 {name}"};

export function settings_addons_enable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
