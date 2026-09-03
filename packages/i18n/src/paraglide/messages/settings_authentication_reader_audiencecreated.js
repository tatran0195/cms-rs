import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إنشاء الجمهور.","bn":"দর্শক তৈরি হয়েছে।","de":"Zielgruppe erstellt.","en":"Audience created.","es":"Audiencia creada.","fr":"Audience créée.","hi":"श्रोता बनाए गए.","id":"Penonton tercipta.","pt-BR":"Público criado.","ru":"Аудитория создана.","ur":"سامعین بنایا۔","zh-CN":"观众创建。"};

export function settings_authentication_reader_audiencecreated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
