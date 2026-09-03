import { getLocale } from '../runtime.js';

const translations = {"ar":"توصية عملية.","bn":"একটি ব্যবহারিক সুপারিশ।","de":"Eine praktische Empfehlung.","en":"A practical recommendation.","es":"Una recomendación práctica.","fr":"Une recommandation pratique.","hi":"एक व्यावहारिक सिफ़ारिश.","id":"Rekomendasi praktis.","pt-BR":"Uma recomendação prática.","ru":"Практичная рекомендация.","ur":"ایک عملی تجویز۔","zh-CN":"一个实用的建议。"};

export function editor_slash_tip_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
