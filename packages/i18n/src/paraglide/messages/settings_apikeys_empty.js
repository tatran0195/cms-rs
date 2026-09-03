import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد مفاتيح API بعد.","bn":"এখনো কোনো API কী নেই।","de":"Noch keine API-Schlüssel.","en":"No API keys yet.","es":"Aún no hay claves API.","fr":"Pas encore de clés API.","hi":"अभी तक कोई API कुंजी नहीं है।","id":"Belum ada kunci API.","pt-BR":"Ainda não há chaves API.","ru":"Ключей API пока нет.","ur":"ابھی تک کوئی API کلیدیں نہیں ہیں۔","zh-CN":"还没有 API 键。"};

export function settings_apikeys_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
