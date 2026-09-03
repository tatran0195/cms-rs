import { getLocale } from '../runtime.js';

const translations = {"ar":"ظلّي","bn":"ছায়া","de":"Schattenbetrieb","en":"Shadow","es":"Sombra","fr":"Mode fantôme","hi":"छाया","id":"Bayangan","pt-BR":"Sombra","ru":"Теневой","ur":"شیڈو","zh-CN":"影子"};

export function settings_integrations_value_runtime_shadow(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
