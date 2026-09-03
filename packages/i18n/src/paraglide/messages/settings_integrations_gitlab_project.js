import { getLocale } from '../runtime.js';

const translations = {"ar":"مسار المشروع","bn":"প্রকল্পের পথ","de":"Projektpfad","en":"Project path","es":"Ruta del proyecto","fr":"Chemin du projet","hi":"परियोजना पथ","id":"Path projek","pt-BR":"Localização do projeto","ru":"Путь проекта","ur":"پروجیکٹ کا راستہ","zh-CN":"项目路径"};

export function settings_integrations_gitlab_project(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
