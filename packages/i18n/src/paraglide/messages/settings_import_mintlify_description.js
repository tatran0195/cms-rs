import { getLocale } from '../runtime.js';

const translations = {"ar":"استورد مستودع توثيق Mintlify عامًا من GitHub ‏(docs.json أو mint.json) — التنقّل والصفحات وهوية الموقع.","bn":"GitHub (docs.json বা mint.json) থেকে একটি সর্বজনীন Mintlify ডক্স রেপো আমদানি করুন — নেভিগেশন, পৃষ্ঠা এবং সাইট ব্র্যান্ডিং।","de":"Importieren Sie ein öffentliches Mintlify-Dokumenten-Repository aus GitHub (docs.json oder mint.json) – Navigation, Seiten und Website-Branding.","en":"Import a public Mintlify docs repo from GitHub (docs.json or mint.json) — navigation, pages, and site branding.","es":"Importe un repositorio de documentos público Mintlify desde GitHub (docs.json o mint.json): navegación, páginas y marca del sitio.","fr":"Importez un référentiel de documents public Mintlify à partir de GitHub (docs.json ou mint.json) – navigation, pages et personnalisation du site.","hi":"GitHub (docs.json या Mint.json) से एक सार्वजनिक Mintlify डॉक्स रेपो आयात करें - नेविगेशन, पेज और साइट ब्रांडिंग।","id":"Impor repo dokumen Mintlify publik dari GitHub (docs.json atau mint.json) — navigasi, halaman, dan pencitraan merek situs.","pt-BR":"Importe um repositório de documentos Mintlify público de GitHub (docs.json ou mint.json) – navegação, páginas e marca do site.","ru":"Импортируйте общедоступный репозиторий документов Mintlify из GitHub (docs.json или mint.json) — навигация, страницы и брендинг сайта.","ur":"GitHub (docs.json یا mint.json) — نیویگیشن، صفحات، اور سائٹ کی برانڈنگ سے ایک عوامی Mintlify دستاویزات کا ریپو درآمد کریں۔","zh-CN":"从 GitHub（docs.json 或 mint.json）导入公共 Mintlify 文档存储库 — 导航、页面和网站品牌。"};

export function settings_import_mintlify_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
