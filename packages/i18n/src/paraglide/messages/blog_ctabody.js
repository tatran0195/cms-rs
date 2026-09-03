import { getLocale } from '../runtime.js';

const translations = {"ar":"ابدأ مجانًا على Nibleaf Cloud، أو شغّل الإصدار العام المرخّص بـ AGPL على بنيتك التحتية.","bn":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","de":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","en":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","es":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","fr":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","hi":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","id":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","pt-BR":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","ru":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","ur":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure.","zh-CN":"Start free on Nibleaf Cloud, or run the public AGPL release on your own infrastructure."};

export function blog_ctabody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
