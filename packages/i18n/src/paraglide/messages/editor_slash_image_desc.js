import { getLocale } from '../runtime.js';

const translations = {"ar":"رفع صورة أو تضمينها.","bn":"একটি ছবি আপলোড বা এম্বেড করুন।","de":"Laden Sie ein Bild hoch oder betten Sie es ein.","en":"Upload or embed an image.","es":"Sube o incrusta una imagen.","fr":"Téléchargez ou intégrez une image.","hi":"कोई छवि अपलोड या एम्बेड करें.","id":"Unggah atau sematkan gambar.","pt-BR":"Carregue ou incorpore uma imagem.","ru":"Загрузите или вставьте изображение.","ur":"تصویر اپ لوڈ یا ایمبیڈ کریں۔","zh-CN":"上传或嵌入图像。"};

export function editor_slash_image_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
