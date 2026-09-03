import { getLocale } from '../runtime.js';

const translations = {"ar":"نص زر الإجراء الأساسي","bn":"প্রাথমিক CTA লেবেল","de":"Primäres CTA-Label","en":"Primary CTA label","es":"Etiqueta de CTA principal","fr":"Libellé CTA principal","hi":"प्राथमिक सीटीए लेबल","id":"Label CTA utama","pt-BR":"Rótulo principal do CTA","ru":"Основной ярлык призыва к действию","ur":"بنیادی CTA لیبل","zh-CN":"主要 CTA 标签"};

export function settings_navbar_ctalabel_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
