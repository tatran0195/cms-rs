import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحات واللغات وعمليات النشر والملفات المرفوعة في هذا الموقع.","bn":"এই সাইটে পৃষ্ঠা, ভাষা, প্রকাশনা এবং আপলোড করা সম্পদ।","de":"Seiten, Sprachen, Veröffentlichungen und hochgeladene Assets auf dieser Website.","en":"Pages, languages, publishes, and uploaded assets on this site.","es":"Páginas, idiomas, publicaciones y activos cargados en este sitio.","fr":"Pages, langues, publications et ressources téléchargées sur ce site.","hi":"इस साइट पर पेज, भाषाएं, प्रकाशन और अपलोड की गई संपत्तियां।","id":"Halaman, bahasa, penerbitan, dan aset yang diunggah di situs ini.","pt-BR":"Páginas, idiomas, publicações e recursos enviados neste site.","ru":"Страницы, языки, публикации и загруженные ресурсы на этом сайте.","ur":"اس سائٹ پر صفحات، زبانیں، اشاعتیں، اور اپ لوڈ کردہ اثاثے۔","zh-CN":"此网站上的页面、语言、发布和上传的资产。"};

export function settings_usage_group_content_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
