import { getLocale } from '../runtime.js';

const translations = {"ar":"المحتوى ملكك — نزّل نسخة كاملة في أي وقت.","bn":"আপনার বিষয়বস্তু আপনার - যেকোনো সময় একটি সম্পূর্ণ কপি ডাউনলোড করুন।","de":"Ihr Inhalt gehört Ihnen – laden Sie jederzeit eine vollständige Kopie herunter.","en":"Your content is yours — download a full copy at any time.","es":"Tu contenido es tuyo: descarga una copia completa en cualquier momento.","fr":"Votre contenu vous appartient : téléchargez-en une copie complète à tout moment.","hi":"आपकी सामग्री आपकी है - किसी भी समय इसकी पूर्ण प्रति डाउनलोड करें।","id":"Konten Anda adalah milik Anda — unduh salinan lengkapnya kapan saja.","pt-BR":"Seu conteúdo é seu – baixe uma cópia completa a qualquer momento.","ru":"Ваш контент принадлежит вам — загрузите полную копию в любое время.","ur":"آپ کا مواد آپ کا ہے — کسی بھی وقت مکمل کاپی ڈاؤن لوڈ کریں۔","zh-CN":"您的内容归您所有 - 随时下载完整副本。"};

export function settings_exportssection_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
