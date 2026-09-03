import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل النشر","bn":"প্রকাশ করা ব্যর্থ হয়েছে৷","de":"Die Veröffentlichung ist fehlgeschlagen","en":"Publish failed","es":"Error de publicación","fr":"Échec de la publication","hi":"प्रकाशन विफल","id":"Publikasi gagal","pt-BR":"Falha na publicação","ru":"Опубликовать не удалось","ur":"شائع کرنا ناکام ہو گیا۔","zh-CN":"发布失败"};

export function publish_failed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
