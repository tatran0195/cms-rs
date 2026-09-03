import { getLocale } from '../runtime.js';

const translations = {"ar":"X (تويتر)","bn":"এক্স (টুইটার)","de":"X (Twitter)","en":"X (Twitter)","es":"X (Twitter)","fr":"X (Twitter)","hi":"एक्स (ट्विटर)","id":"X (Twitter)","pt-BR":"X (Twitter)","ru":"Х (Твиттер)","ur":"X (Twitter)","zh-CN":"X（推特）"};

export function settings_footer_x_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
