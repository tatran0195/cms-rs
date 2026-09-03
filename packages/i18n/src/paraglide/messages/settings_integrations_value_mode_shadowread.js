import { getLocale } from '../runtime.js';

const translations = {"ar":"قراءة ظلّية","bn":"ছায়া পাঠ","de":"Schattenlesen","en":"Shadow read","es":"Lectura en sombra","fr":"Lecture fantôme","hi":"छाया पठन","id":"Pembacaan bayangan","pt-BR":"Leitura sombra","ru":"Теневое чтение","ur":"شیڈو ریڈ","zh-CN":"影子读取"};

export function settings_integrations_value_mode_shadowread(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
