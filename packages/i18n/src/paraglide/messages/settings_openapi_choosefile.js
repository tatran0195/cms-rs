import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر ملف OpenAPI بصيغة JSON أو YAML","bn":"একটি OpenAPI JSON বা YAML ফাইল চয়ন করুন","de":"Wählen Sie eine OpenAPI JSON oder YAML Datei","en":"Choose an OpenAPI JSON or YAML file","es":"Elija un archivo OpenAPI JSON o YAML","fr":"Choisissez un fichier OpenAPI JSON ou YAML","hi":"एक OpenAPI JSON या YAML फ़ाइल चुनें","id":"Pilih file OpenAPI JSON atau YAML","pt-BR":"Escolha um arquivo OpenAPI JSON ou YAML","ru":"Выберите файл OpenAPI JSON или YAML.","ur":"ایک OpenAPI JSON یا YAML فائل منتخب کریں","zh-CN":"选择 OpenAPI JSON 或 YAML 文件"};

export function settings_openapi_choosefile(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
