import { getLocale } from '../runtime.js';

const translations = {"ar":"الملاحظات وإجراءات المساهمة المعروضة في صفحات التوثيق.","bn":"ডকুমেন্টেশন পাতায় দেখানো প্রতিক্রিয়া ও অবদানের কার্যক্রম।","de":"Feedback- und Mitwirkungsaktionen auf Dokumentationsseiten.","en":"Feedback and contribution actions shown on documentation pages.","es":"Acciones de comentarios y colaboración que se muestran en las páginas de documentación.","fr":"Actions de retour et de contribution affichées sur les pages de documentation.","hi":"दस्तावेज़ीकरण पृष्ठों पर दिखाए जाने वाले प्रतिक्रिया और योगदान के विकल्प।","id":"Tindakan umpan balik dan kontribusi yang ditampilkan di halaman dokumentasi.","pt-BR":"Ações de feedback e contribuição exibidas nas páginas da documentação.","ru":"Отзывы и действия для участия, отображаемые на страницах документации.","ur":"دستاویزی صفحات پر دکھائے جانے والے تاثرات اور شراکت کے اقدامات۔","zh-CN":"显示在文档页面上的反馈和贡献操作。"};

export function settings_addons_group_engagement_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
