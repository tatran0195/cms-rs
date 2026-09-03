import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان الميتا","bn":"মেটা শিরোনাম","de":"Metatitel","en":"Meta title","es":"metatítulo","fr":"Méta-titre","hi":"मेटा शीर्षक","id":"Judul meta","pt-BR":"Meta título","ru":"Мета-заголовок","ur":"میٹا ٹائٹل","zh-CN":"元标题"};

export function editor_pagesettings_metatitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
