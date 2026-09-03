import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل رفع الصورة.","bn":"ছবি আপলোড ব্যর্থ হয়েছে.","de":"Das Hochladen des Bildes ist fehlgeschlagen.","en":"Image upload failed.","es":"Error al cargar la imagen.","fr":"Le téléchargement de l'image a échoué.","hi":"छवि अपलोड विफल रहा.","id":"Gagal mengunggah gambar.","pt-BR":"Falha no upload da imagem.","ru":"Загрузка изображения не удалась.","ur":"تصویر اپ لوڈ ناکام ہو گئی۔","zh-CN":"图片上传失败。"};

export function editor_imageuploadfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
