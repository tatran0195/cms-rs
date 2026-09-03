import { getLocale } from '../runtime.js';

const translations = {"ar":"يستخدم PDF طباعة آمنة وRTL؛ ويتضمن HTML الثابت تنقلاً وبحثًا وسمات وأصولاً دون اتصال.","bn":"PDF মুদ্রণ-নিরাপদ টাইপোগ্রাফি ব্যবহার করে এবং RTL; স্ট্যাটিক HTML অফলাইন নেভিগেশন, অনুসন্ধান, থিম এবং সম্পদ অন্তর্ভুক্ত করে।","de":"PDF verwendet drucksichere Typografie und RTL; static HTML umfasst Offline-Navigation, Suche, Themen und Assets.","en":"PDF uses print-safe typography and RTL; static HTML includes offline navigation, search, themes, and assets.","es":"PDF utiliza tipografía segura para impresión y RTL; El HTML estático incluye navegación, búsqueda, temas y recursos sin conexión.","fr":"PDF utilise une typographie sécurisée pour l'impression et RTL ; static HTML inclut la navigation, la recherche, les thèmes et les ressources hors ligne.","hi":"PDF प्रिंट-सुरक्षित टाइपोग्राफी और RTL का उपयोग करता है; स्थिर HTML में ऑफ़लाइन नेविगेशन, खोज, थीम और संपत्तियां शामिल हैं।","id":"PDF menggunakan tipografi yang aman untuk dicetak dan RTL; HTML statis mencakup navigasi offline, pencarian, tema, dan aset.","pt-BR":"PDF usa tipografia segura para impressão e RTL; static HTML inclui navegação off-line, pesquisa, temas e ativos.","ru":"PDF использует шрифт, безопасный для печати, а RTL; статический HTML включает автономную навигацию, поиск, темы и ресурсы.","ur":"PDF پرنٹ سیف ٹائپوگرافی کا استعمال کرتا ہے اور RTL؛ جامد HTML میں آف لائن نیویگیشن، تلاش، تھیمز اور اثاثے شامل ہیں۔","zh-CN":"PDF 使用打印安全排版和 RTL； static HTML 包括离线导航、搜索、主题和资产。"};

export function settings_exports_workflow_formathint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
