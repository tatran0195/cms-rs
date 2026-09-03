import { getLocale } from '../runtime.js';

const translations = {"ar":"الجماهير وقواعد المحتوى","bn":"শ্রোতা এবং বিষয়বস্তু নিয়ম","de":"Zielgruppen und Inhaltsregeln","en":"Audiences and content rules","es":"Audiencias y reglas de contenido","fr":"Audiences et règles de contenu","hi":"श्रोतागण और सामग्री नियम","id":"Audiens dan aturan konten","pt-BR":"Públicos e regras de conteúdo","ru":"Аудитории и правила контента","ur":"سامعین اور مواد کے قواعد","zh-CN":"受众和内容规则"};

export function settings_authentication_reader_audiencestitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
