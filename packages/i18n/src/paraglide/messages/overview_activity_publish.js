import { getLocale } from '../runtime.js';

const translations = {"ar":"نشر التوثيق","bn":"প্রকাশিত ডক্স","de":"Veröffentlichte Dokumente","en":"Published docs","es":"Documentos publicados","fr":"Documents publiés","hi":"दस्तावेज़ प्रकाशित","id":"Dokumen yang diterbitkan","pt-BR":"Documentos publicados","ru":"Опубликованные документы","ur":"شائع شدہ دستاویزات","zh-CN":"已发布的文档"};

export function overview_activity_publish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
