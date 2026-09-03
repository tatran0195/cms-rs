import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم الموقع ووصفه المترجمان لكل لغة إضافية، يظهران على الموقع المنشور بتلك اللغة.","bn":"প্রতিটি অতিরিক্ত ভাষার জন্য স্থানীয়কৃত সাইটের নাম এবং বিবরণ, সেই ভাষায় প্রকাশিত সাইটে দেখানো হয়েছে।","de":"Lokalisierter Site-Name und Beschreibung für jede zusätzliche Sprache, die auf der veröffentlichten Site in dieser Sprache angezeigt werden.","en":"Localized site name and description for each additional language, shown on the published site in that language.","es":"Nombre del sitio traducido y descripción para cada idioma adicional, que se muestran en el sitio publicado en ese idioma.","fr":"Nom du site localisé et description pour chaque langue supplémentaire, affichés sur le site publié dans cette langue.","hi":"प्रत्येक अतिरिक्त भाषा के लिए स्थानीयकृत साइट का नाम और विवरण, उस भाषा में प्रकाशित साइट पर दिखाया गया है।","id":"Nama dan deskripsi situs yang dilokalkan untuk setiap bahasa tambahan, ditampilkan di situs yang dipublikasikan dalam bahasa tersebut.","pt-BR":"Nome e descrição do site localizados para cada idioma adicional, mostrados no site publicado nesse idioma.","ru":"Локализованное название и описание сайта для каждого дополнительного языка, отображаемые на опубликованном сайте на этом языке.","ur":"ہر اضافی زبان کے لیے مقامی سائٹ کا نام اور تفصیل، اس زبان میں شائع شدہ سائٹ پر دکھائی جاتی ہے۔","zh-CN":"每种附加语言的本地化站点名称和说明，以该语言显示在已发布的站点上。"};

export function settings_general_translations_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
