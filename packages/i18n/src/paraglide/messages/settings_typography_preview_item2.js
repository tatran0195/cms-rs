import { getLocale } from '../runtime.js';

const translations = {"ar":"البحث والتحليلات مدمجان — جرّب أمر `nibleaf`","bn":"অনুসন্ধান এবং বিশ্লেষণ অন্তর্নির্মিত - চেষ্টা করুন `nibleaf` CLI","de":"Suche und Analyse sind integriert – probieren Sie `nibleaf` CLI aus","en":"Search and analytics are built in — try the `nibleaf` CLI","es":"La búsqueda y el análisis están integrados: pruebe `nibleaf` CLI","fr":"La recherche et l'analyse sont intégrées : essayez le `nibleaf` CLI","hi":"खोज और विश्लेषण अंतर्निहित हैं - `nibleaf` CLI आज़माएं","id":"Penelusuran dan analitik sudah ada di dalamnya — coba `nibleaf` CLI","pt-BR":"A pesquisa e a análise estão integradas – experimente o `nibleaf` CLI","ru":"Поиск и аналитика встроены — попробуйте `nibleaf` CLI","ur":"تلاش اور تجزیات پہلے سے موجود ہیں — آزمائیں `nibleaf` CLI","zh-CN":"内置搜索和分析 - 尝试 `nibleaf` CLI"};

export function settings_typography_preview_item2(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
