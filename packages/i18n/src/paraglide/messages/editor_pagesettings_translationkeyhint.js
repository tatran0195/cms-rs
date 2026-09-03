import { getLocale } from '../runtime.js';

const translations = {"ar":"معرّف مشترك يربط هذه الصفحة بترجماتها في اللغات الأخرى (لأجل hreflang)، حتى عند اختلاف الروابط.","bn":"শেয়ার্ড আইডি এই পৃষ্ঠাটিকে অন্য ভাষায় অনুবাদের সাথে লিঙ্ক করছে ( hreflang-এর জন্য), এমনকি তাদের স্লাগগুলি ভিন্ন হলেও৷","de":"Geteilte ID, die diese Seite mit ihren Übersetzungen in anderen Sprachen (für Hreflang) verlinkt, auch wenn sich deren Slugs unterscheiden.","en":"Shared id linking this page to its translations in other languages (for hreflang), even when their slugs differ.","es":"Identificación compartida que vincula esta página a sus traducciones en otros idiomas (para hreflang), incluso cuando sus slugs difieren.","fr":"Identifiant partagé reliant cette page à ses traductions dans d'autres langues (pour le hreflang), même lorsque leurs slugs diffèrent.","hi":"साझा आईडी इस पेज को अन्य भाषाओं में इसके अनुवादों से लिंक कर रही है (hreflang के लिए), भले ही उनके स्लग अलग-अलग हों।","id":"Id bersama yang menautkan halaman ini ke terjemahannya dalam bahasa lain (untuk hreflang), meskipun siputnya berbeda.","pt-BR":"ID compartilhado vinculando esta página às suas traduções em outros idiomas (para hreflang), mesmo quando seus slugs são diferentes.","ru":"Общий идентификатор, связывающий эту страницу с ее переводами на другие языки (для hreflang), даже если их пули различаются.","ur":"اس صفحہ کو دوسری زبانوں میں اس کے تراجم سے منسلک کرنے والی مشترکہ شناخت ( hreflang کے لیے)، یہاں تک کہ جب ان کے سلگ مختلف ہوں۔","zh-CN":"共享 ID 将此页面链接到其他语言的翻译（对于 hreflang），即使它们的 slugs 不同。"};

export function editor_pagesettings_translationkeyhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
