import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر ملف JSON الذي صدّرته من قسم Labs في Ghost.","bn":"Ghost Labs থেকে এক্সপোর্ট করা JSON ফাইলটি বেছে নিন।","de":"Wählen Sie die aus Ghost Labs exportierte Datei JSON.","en":"Choose the JSON file exported from Ghost Labs.","es":"Elija el archivo JSON exportado desde Ghost Labs.","fr":"Choisissez le fichier JSON exporté depuis Ghost Labs.","hi":"घोस्ट लैब्स से निर्यात की गई JSON फ़ाइल चुनें।","id":"Pilih file JSON yang diekspor dari Ghost Labs.","pt-BR":"Escolha o arquivo JSON exportado do Ghost Labs.","ru":"Выберите файл JSON, экспортированный из Ghost Labs.","ur":"گھوسٹ لیبز سے برآمد کردہ JSON فائل کا انتخاب کریں۔","zh-CN":"选择从 Ghost Labs 导出的 JSON 文件。"};

export function settings_import_ghost_filehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
