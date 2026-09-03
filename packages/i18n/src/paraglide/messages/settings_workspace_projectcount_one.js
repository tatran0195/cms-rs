import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} مشروع","bn":"{count} প্রকল্প","de":"{count} Projekt","en":"{count} project","es":"Proyecto {count}","fr":"Projet {count}","hi":"{count} प्रोजेक्ट","id":"proyek {count}","pt-BR":"Projeto {count}","ru":"{count} проект","ur":"{count} پروجیکٹ","zh-CN":"{count} 项目"};

export function settings_workspace_projectcount_one(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
