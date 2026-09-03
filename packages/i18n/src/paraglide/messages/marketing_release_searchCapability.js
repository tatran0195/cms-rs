import { getLocale } from '../runtime.js';

const translations = {"ar":"بحث مدمج مع مسار هجين اختياري وآمن للمستأجر في المصدر الرئيسي","bn":"অন্তর্নির্মিত অনুসন্ধান, source main-এ ঐচ্ছিক tenant-safe hybrid path-সহ","de":"Integrierte Suche mit einem optionalen mandantensicheren Hybridpfad in Source Main","en":"Built-in search with an optional tenant-safe hybrid path in source main","es":"Búsqueda integrada con una ruta híbrida opcional y segura por tenant en la rama principal del código fuente","fr":"Recherche intégrée avec un parcours hybride facultatif et isolé par tenant dans la branche principale du code source","hi":"अंतर्निहित खोज, source main में वैकल्पिक tenant-safe hybrid path के साथ","id":"Pencarian bawaan dengan jalur hibrida opsional yang aman untuk tenant di source main","pt-BR":"Pesquisa integrada com um caminho híbrido opcional e seguro por tenant na branch principal do código-fonte","ru":"Встроенный поиск с дополнительным безопасным для арендаторов гибридным путём в основной ветке исходного кода","ur":"بلٹ اِن تلاش، source main میں اختیاری اور tenant-safe hybrid path کے ساتھ","zh-CN":"内置搜索，并在源码主分支中提供可选的租户安全混合路径"};

export function marketing_release_searchCapability(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
