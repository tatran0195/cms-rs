import { getLocale } from '../runtime.js';

const translations = {"ar":"الأشخاص الذين يملكون صلاحية الوصول إلى هذا الموقع.","bn":"এই সাইটে অ্যাক্সেস সঙ্গে মানুষ.","de":"Personen mit Zugriff auf diese Website.","en":"People with access to this site.","es":"Personas con acceso a este sitio.","fr":"Personnes ayant accès à ce site.","hi":"जिन लोगों के पास इस साइट तक पहुंच है।","id":"Orang yang memiliki akses ke situs ini.","pt-BR":"Pessoas com acesso a este site.","ru":"Люди, имеющие доступ к этому сайту.","ur":"اس سائٹ تک رسائی والے لوگ۔","zh-CN":"有权访问该网站的人。"};

export function settings_usage_group_team_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
