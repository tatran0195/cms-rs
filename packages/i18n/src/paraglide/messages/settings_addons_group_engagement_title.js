import { getLocale } from '../runtime.js';

const translations = {"ar":"تفاعل القرّاء","bn":"পাঠকের সম্পৃক্ততা","de":"Leserbeteiligung","en":"Reader engagement","es":"Interacción de los lectores","fr":"Engagement des lecteurs","hi":"पाठक सहभागिता","id":"Interaksi pembaca","pt-BR":"Envolvimento dos leitores","ru":"Взаимодействие с читателями","ur":"قارئین کی شمولیت","zh-CN":"读者互动"};

export function settings_addons_group_engagement_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
