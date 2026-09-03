import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحميل مفاتيح API. حاول مرة أخرى.","bn":"API কী লোড করা যায়নি। আবার চেষ্টা করুন।","de":"API-Schlüssel konnten nicht geladen werden. Versuchen Sie es erneut.","en":"Could not load API keys. Try again.","es":"No se pudieron cargar las claves de API. Inténtalo de nuevo.","fr":"Impossible de charger les clés API. Réessayez.","hi":"API कुंजियां लोड नहीं की जा सकीं। फिर से कोशिश करें।","id":"Kunci API tidak dapat dimuat. Coba lagi.","pt-BR":"Não foi possível carregar as chaves de API. Tente novamente.","ru":"Не удалось загрузить ключи API. Повторите попытку.","ur":"API کلیدیں لوڈ نہیں ہو سکیں۔ دوبارہ کوشش کریں۔","zh-CN":"无法加载 API 密钥。请重试。"};

export function settings_apikeys_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
