import { getLocale } from '../runtime.js';

const translations = {"ar":"ثلاث خطوات لنشر وثائقك على الإنترنت.","bn":"আপনার ডকুমেন্টেশন অনলাইন পেতে তিনটি ধাপ।","de":"Drei Schritte, um Ihre Dokumentation online zu stellen.","en":"Three steps to get your documentation online.","es":"Tres pasos para conseguir tu documentación online.","fr":"Trois étapes pour mettre votre documentation en ligne.","hi":"अपना दस्तावेज़ ऑनलाइन प्राप्त करने के लिए तीन चरण।","id":"Tiga langkah untuk membuat dokumentasi Anda online.","pt-BR":"Três etapas para colocar sua documentação online.","ru":"Три шага, чтобы разместить вашу документацию в Интернете.","ur":"اپنی دستاویزات آن لائن حاصل کرنے کے لیے تین مراحل۔","zh-CN":"在线获取文档的三个步骤。"};

export function overview_nudge_body(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
