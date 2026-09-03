import { getLocale } from '../runtime.js';

const translations = {"ar":"اللون المميّز المُستخدَم للروابط والحالات النشطة والأزرار في مستنداتك.","bn":"আপনার ডক্স জুড়ে লিঙ্ক, সক্রিয় অবস্থা এবং বোতামগুলির জন্য ব্যবহৃত অ্যাকসেন্ট।","de":"Der Akzent, der für Links, aktive Zustände und Schaltflächen in Ihren Dokumenten verwendet wird.","en":"The accent used for links, active states, and buttons across your docs.","es":"El acento utilizado para enlaces, estados activos y botones en sus documentos.","fr":"Accent utilisé pour les liens, les états actifs et les boutons dans vos documents.","hi":"आपके दस्तावेज़ों में लिंक, सक्रिय स्थिति और बटन के लिए उपयोग किया जाने वाला उच्चारण।","id":"Aksen yang digunakan untuk tautan, status aktif, dan tombol di seluruh dokumen Anda.","pt-BR":"O acento usado para links, estados ativos e botões em seus documentos.","ru":"Акцент, используемый для ссылок, активных состояний и кнопок в ваших документах.","ur":"آپ کے دستاویزات میں لنکس، فعال حالتوں اور بٹنوں کے لیے استعمال ہونے والا لہجہ۔","zh-CN":"用于文档中的链接、活动状态和按钮的重音。"};

export function settings_styling_primarycolor_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
