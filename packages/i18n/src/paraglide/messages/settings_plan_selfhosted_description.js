import { getLocale } from '../runtime.js';

const translations = {"ar":"استضافة ونشر وبحث وتحليلات ونطاقات مخصصة مُدارة لمرحلة الإطلاق التجريبية.","bn":"লঞ্চ বিটার জন্য হোস্টিং, প্রকাশনা, অনুসন্ধান, বিশ্লেষণ, এবং কাস্টম ডোমেনগুলি পরিচালিত৷","de":"Verwaltetes Hosting, Veröffentlichung, Suche, Analyse und benutzerdefinierte Domänen für die Start-Beta.","en":"Managed hosting, publishing, search, analytics, and custom domains for the launch beta.","es":"Alojamiento administrado, publicación, búsqueda, análisis y dominios personalizados para la versión beta de lanzamiento.","fr":"Hébergement géré, publication, recherche, analyses et domaines personnalisés pour la version bêta de lancement.","hi":"लॉन्च बीटा के लिए प्रबंधित होस्टिंग, प्रकाशन, खोज, विश्लेषण और कस्टम डोमेन।","id":"Hosting terkelola, penerbitan, pencarian, analitik, dan domain khusus untuk peluncuran beta.","pt-BR":"Hospedagem gerenciada, publicação, pesquisa, análise e domínios personalizados para o lançamento beta.","ru":"Управлял хостингом, публикацией, поиском, аналитикой и пользовательскими доменами для запуска бета-версии.","ur":"لانچ بیٹا کے لیے میزبانی، اشاعت، تلاش، تجزیات اور حسب ضرورت ڈومینز کا نظم کیا گیا۔","zh-CN":"为发布测试版提供托管、发布、搜索、分析和自定义域。"};

export function settings_plan_selfhosted_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
