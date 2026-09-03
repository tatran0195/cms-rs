import { getLocale } from '../runtime.js';

const translations = {"ar":"اربط التحليلات والدردشة والمزيد.","bn":"বিশ্লেষণ, চ্যাট এবং আরও অনেক কিছু সংযুক্ত করুন।","de":"Verbinden Sie Analysen, Chat und mehr.","en":"Connect analytics, chat, and more.","es":"Conecte análisis, chat y más.","fr":"Connectez les analyses, le chat et bien plus encore.","hi":"एनालिटिक्स, चैट और बहुत कुछ कनेक्ट करें।","id":"Hubungkan analitik, obrolan, dan banyak lagi.","pt-BR":"Conecte análises, bate-papo e muito mais.","ru":"Подключите аналитику, чат и многое другое.","ur":"تجزیات، چیٹ، اور مزید کو مربوط کریں۔","zh-CN":"连接分析、聊天等。"};

export function overview_link_integrationsdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
