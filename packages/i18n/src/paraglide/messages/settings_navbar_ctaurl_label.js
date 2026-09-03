import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط زر الإجراء الأساسي","bn":"প্রাথমিক CTA URL","de":"Primäre CTA-URL","en":"Primary CTA URL","es":"URL de CTA principal","fr":"URL du CTA principal","hi":"प्राथमिक सीटीए यूआरएल","id":"URL CTA utama","pt-BR":"URL principal do CTA","ru":"Основной URL-адрес призыва к действию","ur":"بنیادی CTA URL","zh-CN":"主要 CTA 网址"};

export function settings_navbar_ctaurl_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
