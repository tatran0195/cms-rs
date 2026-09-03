import { getLocale } from '../runtime.js';

const translations = {"ar":"تجتاز أزواج النص والتركيز واللون المميّز والشيفرة في الوضعين الفاتح والداكن معايير WCAG المحددة.","bn":"হালকা এবং অন্ধকার পাঠ্য, ফোকাস, অ্যাকসেন্ট এবং কোড জোড়া কনফিগার করা WCAG গেটগুলিকে অতিক্রম করে।","de":"Helle und dunkle Text-, Fokus-, Akzent- und Codepaare passieren die konfigurierten WCAG-Gates.","en":"Light and dark text, focus, accent, and code pairs pass the configured WCAG gates.","es":"Los pares de texto claro y oscuro, enfoque, acento y código pasan las puertas WCAG configuradas.","fr":"Les paires de texte clair et foncé, de focus, d'accent et de code franchissent les portes WCAG configurées.","hi":"हल्का और गहरा टेक्स्ट, फोकस, एक्सेंट और कोड जोड़े कॉन्फ़िगर किए गए WCAG गेट से गुजरते हैं।","id":"Teks terang dan gelap, fokus, aksen, dan pasangan kode melewati gerbang WCAG yang dikonfigurasi.","pt-BR":"Texto claro e escuro, foco, acento e pares de código passam pelas portas WCAG configuradas.","ru":"Светлый и темный текст, фокус, акцент и пары кодов проходят через настроенные ворота WCAG.","ur":"ہلکا اور گہرا متن، فوکس، لہجہ، اور کوڈ کے جوڑے ترتیب شدہ WCAG گیٹس سے گزرتے ہیں۔","zh-CN":"浅色和深色文本、焦点、重音和代码对通过配置的 WCAG 门。"};

export function settings_theme_contrastpass(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
