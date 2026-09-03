import { getLocale } from '../runtime.js';

const translations = {"ar":"تصدير HTML ثابت","bn":"স্ট্যাটিক HTML রপ্তানি","de":"Statischer HTML-Export","en":"Static HTML export","es":"Exportación estática HTML","fr":"Exportation statique HTML","hi":"स्थिर HTML निर्यात","id":"Ekspor HTML statis","pt-BR":"Exportação estática de HTML","ru":"Статический экспорт HTML","ur":"جامد HTML برآمد کریں۔","zh-CN":"静态 HTML 导出"};

export function settings_exports_html_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
