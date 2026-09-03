import { getLocale } from '../runtime.js';

const translations = {"ar":"كيفية تشغيل بحث الموقع. البحث المدمج لا يحتاج إلى أي إعداد.","bn":"কিভাবে সাইট অনুসন্ধান চালিত হয়. অন্তর্নির্মিত কোন সেটআপ প্রয়োজন.","de":"Wie die Website-Suche funktioniert. Der integrierte Einbau erfordert keine Einrichtung.","en":"How site search is powered. Built-in needs no setup.","es":"Cómo se impulsa la búsqueda de sitios. Integrado no necesita configuración.","fr":"Comment fonctionne la recherche sur site. L'intégration ne nécessite aucune configuration.","hi":"साइट खोज कैसे संचालित होती है. बिल्ट-इन के लिए किसी सेटअप की आवश्यकता नहीं है।","id":"Bagaimana penelusuran situs diberdayakan. Bawaan tidak memerlukan pengaturan.","pt-BR":"Como a pesquisa de sites é alimentada. Integrado não precisa de configuração.","ru":"Как работает поиск по сайту. Встроенный не требует настройки.","ur":"سائٹ کی تلاش کیسے چلتی ہے۔ بلٹ ان کو سیٹ اپ کی ضرورت نہیں ہے۔","zh-CN":"站点搜索是如何驱动的。内置无需设置。"};

export function settings_search_provider_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
