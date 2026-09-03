import { getLocale } from '../runtime.js';

const translations = {"ar":"يجب ألا يتجاوز ملف OpenAPI حجم 5 م.ب.","bn":"OpenAPI ফাইলগুলি অবশ্যই 5 MB বা ছোট হতে হবে৷","de":"OpenAPI-Dateien dürfen maximal 5 MB groß sein.","en":"OpenAPI files must be 5 MB or smaller.","es":"Los archivos OpenAPI deben tener 5 MB o menos.","fr":"Les fichiers OpenAPI doivent faire 5 Mo ou moins.","hi":"OpenAPI फ़ाइलें 5 एमबी या उससे छोटी होनी चाहिए।","id":"OpenAPI file harus berukuran 5 MB atau lebih kecil.","pt-BR":"Os arquivos OpenAPI devem ter 5 MB ou menos.","ru":"Размер файлов OpenAPI должен составлять 5 МБ или меньше.","ur":"OpenAPI فائلیں 5 MB یا اس سے چھوٹی ہونی چاہئیں۔","zh-CN":"OpenAPI 文件必须为 5 MB 或更小。"};

export function settings_openapi_filetoolarge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
