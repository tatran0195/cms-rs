import { getLocale } from '../runtime.js';

const translations = {"ar":"صورة المشاركة الافتراضية","bn":"ডিফল্ট সামাজিক ছবি","de":"Standardmäßiges soziales Bild","en":"Default social image","es":"Imagen social predeterminada","fr":"Image sociale par défaut","hi":"डिफ़ॉल्ट सामाजिक छवि","id":"Gambar sosial default","pt-BR":"Imagem social padrão","ru":"Социальное изображение по умолчанию","ur":"پہلے سے طے شدہ سماجی تصویر","zh-CN":"默认社交形象"};

export function editor_langsettings_socialimage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
