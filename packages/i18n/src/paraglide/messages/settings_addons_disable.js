import { getLocale } from '../runtime.js';

const translations = {"ar":"تعطيل {name}","bn":"{name} বন্ধ করুন","de":"{name} deaktivieren","en":"Disable {name}","es":"Desactivar {name}","fr":"Désactiver {name}","hi":"{name} अक्षम करें","id":"Nonaktifkan {name}","pt-BR":"Desativar {name}","ru":"Отключить {name}","ur":"{name} غیر فعال کریں","zh-CN":"停用 {name}"};

export function settings_addons_disable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
