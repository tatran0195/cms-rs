import { getLocale } from '../runtime.js';

const translations = {"ar":"هل كانت هذه الصفحة مفيدة؟","bn":"এই পৃষ্ঠাটি কি সহায়ক ছিল?","de":"War diese Seite hilfreich?","en":"Was this page helpful?","es":"¿Te resultó útil esta página?","fr":"Cette page a-t-elle été utile ?","hi":"क्या यह पेज मददगार था?","id":"Apakah halaman ini bermanfaat?","pt-BR":"Esta página foi útil?","ru":"Была ли эта страница полезной?","ur":"کیا یہ صفحہ مددگار تھا؟","zh-CN":"此页面有帮助吗？"};

export function site_feedbackquestion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
