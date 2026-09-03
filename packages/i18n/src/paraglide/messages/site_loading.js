import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التحميل…","bn":"লোড হচ্ছে...","de":"Laden…","en":"Loading…","es":"Cargando…","fr":"Chargement…","hi":"लोड हो रहा है...","id":"Memuat…","pt-BR":"Carregando…","ru":"Загрузка…","ur":"لوڈ ہو رہا ہے…","zh-CN":"加载中..."};

export function site_loading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
