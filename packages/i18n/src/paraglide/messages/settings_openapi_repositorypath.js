import { getLocale } from '../runtime.js';

const translations = {"ar":"مسار الملف في المستودع","bn":"সংগ্রহস্থল ফাইল পাথ","de":"Repository-Dateipfad","en":"Repository file path","es":"Ruta del archivo del repositorio","fr":"Chemin du fichier du référentiel","hi":"रिपोजिटरी फ़ाइल पथ","id":"Jalur file repositori","pt-BR":"Caminho do arquivo do repositório","ru":"Путь к файлу репозитория","ur":"ذخیرہ فائل کا راستہ","zh-CN":"存储库文件路径"};

export function settings_openapi_repositorypath(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
