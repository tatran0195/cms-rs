import { getLocale } from '../runtime.js';

const translations = {"ar":"users","bn":"ব্যবহারকারীদের","de":"Benutzer","en":"users","es":"usuarios","fr":"utilisateurs","hi":"उपयोगकर्ता","id":"pengguna","pt-BR":"usuários","ru":"пользователи","ur":"صارفین","zh-CN":"用户"};

export function settings_navbar_anchors_iconplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
