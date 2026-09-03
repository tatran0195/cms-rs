import { getLocale } from '../runtime.js';

const translations = {"ar":"ملف التصدير أكبر من 15 ميغابايت.","bn":"রপ্তানি ফাইলটি 15 MB এর থেকে বড়৷","de":"Die Exportdatei ist größer als 15 MB.","en":"The export file is larger than 15 MB.","es":"El archivo de exportación tiene más de 15 MB.","fr":"Le fichier d'exportation fait plus de 15 Mo.","hi":"निर्यात फ़ाइल 15 एमबी से बड़ी है.","id":"File ekspor lebih besar dari 15 MB.","pt-BR":"O arquivo de exportação tem mais de 15 MB.","ru":"Размер файла экспорта превышает 15 МБ.","ur":"برآمد فائل 15 MB سے بڑی ہے۔","zh-CN":"导出文件大于 15 MB。"};

export function settings_import_ghost_toolarge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
