import { getLocale } from '../runtime.js';

const translations = {"ar":"تجميع موقع التوثيق المنشور كملفات ثابتة.","bn":"স্ট্যাটিক ফাইল হিসাবে প্রকাশিত ডকুমেন্টেশন সাইট প্যাকেজ.","de":"Verpacken Sie die veröffentlichte Dokumentationsseite als statische Dateien.","en":"Package the published documentation site as static files.","es":"Empaquete el sitio de documentación publicada como archivos estáticos.","fr":"Conditionnez le site de documentation publié sous forme de fichiers statiques.","hi":"प्रकाशित दस्तावेज़ीकरण साइट को स्थिर फ़ाइलों के रूप में पैकेज करें।","id":"Kemas situs dokumentasi yang diterbitkan sebagai file statis.","pt-BR":"Empacote o site de documentação publicada como arquivos estáticos.","ru":"Упакуйте опубликованный сайт документации в статические файлы.","ur":"شائع شدہ دستاویزات کی سائٹ کو جامد فائلوں کے طور پر پیک کریں۔","zh-CN":"将已发布的文档站点打包为静态文件。"};

export function settings_exports_html_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
