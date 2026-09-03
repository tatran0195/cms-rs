import { getLocale } from '../runtime.js';

const translations = {"ar":"يبقى القبول والرفض متاحين بالتساوي، ويمكن للقرّاء إعادة فتح اختيارهم لاحقًا.","bn":"গ্রহণ ও প্রত্যাখ্যান সমানভাবে উপলভ্য থাকে এবং পাঠকেরা পরে আবার তাদের পছন্দ খুলতে পারেন।","de":"Zustimmen und Ablehnen bleiben gleichberechtigt verfügbar, und Leser können ihre Auswahl später erneut öffnen.","en":"Accept and decline remain equally available, and readers can reopen their choice later.","es":"Aceptar y rechazar siguen estando disponibles por igual, y los lectores pueden volver a abrir su elección más tarde.","fr":"Accepter et refuser restent disponibles de manière équivalente, et les lecteurs peuvent rouvrir leur choix ultérieurement.","hi":"स्वीकार और अस्वीकार दोनों समान रूप से उपलब्ध रहते हैं, और पाठक बाद में अपना चयन फिर से खोल सकते हैं।","id":"Terima dan tolak tetap tersedia secara setara, dan pembaca dapat membuka kembali pilihan mereka nanti.","pt-BR":"Aceitar e recusar continuam igualmente disponíveis, e os leitores podem reabrir sua escolha mais tarde.","ru":"Принятие и отклонение остаются равнодоступными, и читатели могут позже снова открыть свой выбор.","ur":"قبول اور مسترد دونوں برابر طور پر دستیاب رہتے ہیں، اور قارئین بعد میں اپنا انتخاب دوبارہ کھول سکتے ہیں۔","zh-CN":"接受和拒绝始终同等可用，读者之后也可以重新打开自己的选择。"};

export function settings_addons_consent_previewdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
