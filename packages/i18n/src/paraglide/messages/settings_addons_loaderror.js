import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحميل الإضافات. حاول مرة أخرى.","bn":"অ্যাড-অন লোড করা যায়নি। আবার চেষ্টা করুন।","de":"Add-ons konnten nicht geladen werden. Versuchen Sie es erneut.","en":"Add-ons could not be loaded. Try again.","es":"No se pudieron cargar los complementos. Inténtalo de nuevo.","fr":"Impossible de charger les modules complémentaires. Réessayez.","hi":"ऐड-ऑन लोड नहीं किए जा सके। फिर से कोशिश करें।","id":"Add-on tidak dapat dimuat. Coba lagi.","pt-BR":"Não foi possível carregar os complementos. Tente novamente.","ru":"Не удалось загрузить дополнения. Повторите попытку.","ur":"ایڈ آنز لوڈ نہیں ہو سکے۔ دوبارہ کوشش کریں۔","zh-CN":"无法加载附加功能。请重试。"};

export function settings_addons_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
