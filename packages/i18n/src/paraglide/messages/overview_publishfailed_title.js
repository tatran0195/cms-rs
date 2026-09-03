import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل نشر الإصدار v{version}","bn":"v{version} প্রকাশ করা ব্যর্থ হয়েছে৷","de":"Die Veröffentlichung von v{version} ist fehlgeschlagen","en":"Publish v{version} failed","es":"Error al publicar v{version}","fr":"Échec de la publication de v{version}","hi":"v{version} प्रकाशित करना विफल रहा","id":"Publikasikan v{version} gagal","pt-BR":"Falha na publicação de v{version}","ru":"Опубликовать v{version} не удалось.","ur":"v{version} شائع کرنا ناکام ہو گیا۔","zh-CN":"发布 v{version} 失败"};

export function overview_publishfailed_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
