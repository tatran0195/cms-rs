import { getLocale } from '../runtime.js';

const translations = {"ar":"العربية + الإنجليزية","bn":"আরবি + ইংরেজি","de":"Arabisch + Englisch","en":"Arabic + English","es":"Árabe + Inglés","fr":"Arabe + Anglais","hi":"अरबी + अंग्रेजी","id":"Arab + Inggris","pt-BR":"Árabe + Inglês","ru":"арабский + английский","ur":"عربی + انگریزی","zh-CN":"阿拉伯语+英语"};

export function settings_plan_tier_free_feature_languages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
