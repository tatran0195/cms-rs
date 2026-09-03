import { getLocale } from '../runtime.js';

const translations = {"ar":"التحقق قبل النشر غير متاح","bn":"প্রকাশের বৈধতা অনুপলব্ধ৷","de":"Die Veröffentlichungsvalidierung ist nicht verfügbar","en":"Publish validation is unavailable","es":"La validación de publicación no está disponible","fr":"La validation de publication n'est pas disponible","hi":"प्रकाशन सत्यापन अनुपलब्ध है","id":"Validasi publikasi tidak tersedia","pt-BR":"A validação de publicação não está disponível","ru":"Проверка публикации недоступна","ur":"اشاعت کی توثیق دستیاب نہیں ہے۔","zh-CN":"发布验证不可用"};

export function publish_preflightfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
