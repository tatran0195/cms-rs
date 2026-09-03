import { getLocale } from '../runtime.js';

const translations = {"ar":"التذييل","bn":"ফুটার","de":"Fußzeile","en":"Footer","es":"Pie de página","fr":"Pied de page","hi":"फ़ुटर","id":"catatan kaki","pt-BR":"Rodapé","ru":"Нижний колонтитул","ur":"فوٹر","zh-CN":"页脚"};

export function settings_footer_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
