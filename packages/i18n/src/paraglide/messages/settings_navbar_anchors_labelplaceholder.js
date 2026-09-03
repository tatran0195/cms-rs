import { getLocale } from '../runtime.js';

const translations = {"ar":"المجتمع","bn":"সম্প্রদায়","de":"Gemeinschaft","en":"Community","es":"Comunidad","fr":"Communauté","hi":"समुदाय","id":"Komunitas","pt-BR":"Comunidade","ru":"Сообщество","ur":"برادری","zh-CN":"社区"};

export function settings_navbar_anchors_labelplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
