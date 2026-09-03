import { getLocale } from '../runtime.js';

const translations = {"ar":"الهوية والنطاق وتحسين الظهور والمزيد.","bn":"ব্র্যান্ডিং, ডোমেন, SEO, এবং আরও অনেক কিছু৷","de":"Branding, Domain, SEO und mehr.","en":"Branding, domain, SEO, and more.","es":"Marca, dominio, SEO y más.","fr":"Image de marque, domaine, SEO et plus encore.","hi":"ब्रांडिंग, डोमेन, SEO, और बहुत कुछ।","id":"Pencitraan merek, domain, SEO, dan banyak lagi.","pt-BR":"Marca, domínio, SEO e muito mais.","ru":"Брендинг, домен, SEO и многое другое.","ur":"برانڈنگ، ڈومین، SEO، اور مزید۔","zh-CN":"品牌、域名、SEO 等。"};

export function overview_link_settingsdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
