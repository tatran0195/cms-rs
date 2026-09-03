import { getLocale } from '../runtime.js';

const translations = {"ar":"راجع فرع المسودة الحالي قبل النشر.","bn":"প্রকাশ করার আগে বর্তমান খসড়া শাখা পর্যালোচনা করুন.","de":"Überprüfen Sie den aktuellen Zweigentwurf vor der Veröffentlichung.","en":"Review the current draft branch before publishing.","es":"Revise el borrador de la rama actual antes de publicarlo.","fr":"Examinez le brouillon de branche actuel avant de le publier.","hi":"प्रकाशन से पहले वर्तमान ड्राफ्ट शाखा की समीक्षा करें।","id":"Tinjau cabang draf saat ini sebelum diterbitkan.","pt-BR":"Revise o rascunho do branch atual antes de publicar.","ru":"Перед публикацией просмотрите текущую черновую ветку.","ur":"شائع کرنے سے پہلے موجودہ ڈرافٹ برانچ کا جائزہ لیں۔","zh-CN":"在发布之前查看当前草稿分支。"};

export function preview_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
