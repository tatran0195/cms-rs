import { getLocale } from '../runtime.js';

const translations = {"ar":"بطاقة قابلة للربط بمورد ذي صلة.","bn":"একটি সম্পর্কিত সম্পদের জন্য একটি লিঙ্কযোগ্য কার্ড।","de":"Eine verlinkbare Karte für eine verwandte Ressource.","en":"A linkable card for a related resource.","es":"Una tarjeta vinculable para un recurso relacionado.","fr":"Une carte pouvant être liée à une ressource associée.","hi":"संबंधित संसाधन के लिए लिंक करने योग्य कार्ड.","id":"Kartu yang dapat ditautkan untuk sumber daya terkait.","pt-BR":"Um cartão vinculável para um recurso relacionado.","ru":"Связанная карточка для связанного ресурса.","ur":"متعلقہ وسائل کے لیے ایک قابل لنک کارڈ۔","zh-CN":"相关资源的可链接卡片。"};

export function editor_slash_card_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
