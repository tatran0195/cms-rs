import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر ملف JSON","bn":"JSON ফাইল বেছে নিন","de":"Wählen Sie die Datei JSON","en":"Choose JSON file","es":"Elija el archivo JSON","fr":"Choisissez le fichier JSON","hi":"JSON फ़ाइल चुनें","id":"Pilih file JSON","pt-BR":"Escolha o arquivo JSON","ru":"Выберите файл JSON.","ur":"JSON فائل کا انتخاب کریں۔","zh-CN":"选择 JSON 文件"};

export function settings_theme_choosefile(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
