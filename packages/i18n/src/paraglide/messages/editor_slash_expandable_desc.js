import { getLocale } from '../runtime.js';

const translations = {"ar":"قسم قابل للطي والتوسيع.","bn":"একটি সংকোচনযোগ্য প্রকাশ বিভাগ।","de":"Ein zusammenklappbarer Offenlegungsbereich.","en":"A collapsible disclosure section.","es":"Una sección de divulgación plegable.","fr":"Une section de divulgation pliable.","hi":"एक संक्षिप्त प्रकटीकरण अनुभाग.","id":"Bagian pengungkapan yang dapat dilipat.","pt-BR":"Uma seção de divulgação dobrável.","ru":"Складной раздел раскрытия информации.","ur":"ایک ٹوٹنے والا انکشاف سیکشن۔","zh-CN":"可折叠的披露部分。"};

export function editor_slash_expandable_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
