import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل الرفع","bn":"আপলোড ব্যর্থ হয়েছে","de":"Der Upload ist fehlgeschlagen","en":"Upload failed","es":"Error al subir","fr":"Échec du téléchargement","hi":"अपलोड विफल रहा","id":"Gagal mengunggah","pt-BR":"Falha no upload","ru":"Загрузка не удалась","ur":"اپ لوڈ ناکام ہو گیا۔","zh-CN":"上传失败"};

export function settings_seo_uploaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
