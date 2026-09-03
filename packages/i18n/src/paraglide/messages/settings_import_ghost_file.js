import { getLocale } from '../runtime.js';

const translations = {"ar":"ملف التصدير (‎.json)","bn":"ফাইল রপ্তানি করুন (.json)","de":"Datei exportieren (.json)","en":"Export file (.json)","es":"Exportar archivo (.json)","fr":"Exporter le fichier (.json)","hi":"फ़ाइल निर्यात करें (.json)","id":"Ekspor file (.json)","pt-BR":"Arquivo de exportação (.json)","ru":"Экспортировать файл (.json)","ur":"فائل برآمد کریں (.json)","zh-CN":"导出文件（.json）"};

export function settings_import_ghost_file(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
