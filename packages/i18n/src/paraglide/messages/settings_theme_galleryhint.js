import { getLocale } from '../runtime.js';

const translations = {"ar":"ثلاث سمات أصلية من Nibleaf لأدلة المنتجات والمعرفة الطويلة والمراجع التقنية الكثيفة.","bn":"তিনটি মূল Nibleaf পণ্য নির্দেশিকা, দীর্ঘ-ফর্ম জ্ঞান, এবং ঘন প্রযুক্তিগত রেফারেন্সের জন্য থিম।","de":"Drei originelle Nibleaf-Themen für Produkthandbücher, umfassendes Wissen und umfangreiche technische Referenzen.","en":"Three original Nibleaf themes for product guides, long-form knowledge, and dense technical references.","es":"Tres temas Nibleaf originales para guías de productos, conocimientos detallados y referencias técnicas densas.","fr":"Trois thèmes Nibleaf originaux pour les guides de produits, des connaissances détaillées et des références techniques denses.","hi":"उत्पाद गाइड, दीर्घकालिक ज्ञान और गहन तकनीकी संदर्भों के लिए तीन मूल Nibleaf थीम।","id":"Tiga tema Nibleaf orisinal untuk panduan produk, pengetahuan jangka panjang, dan referensi teknis yang padat.","pt-BR":"Três temas Nibleaf originais para guias de produtos, conhecimento extenso e referências técnicas densas.","ru":"Три оригинальные темы Nibleaf для руководств по продуктам, подробных знаний и подробных технических справок.","ur":"پروڈکٹ گائیڈز کے لیے تین اصل Nibleaf تھیمز، طویل علم، اور گھنے تکنیکی حوالہ جات۔","zh-CN":"三个原创 Nibleaf 主题，用于产品指南、长篇知识和密集的技术参考。"};

export function settings_theme_galleryhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
