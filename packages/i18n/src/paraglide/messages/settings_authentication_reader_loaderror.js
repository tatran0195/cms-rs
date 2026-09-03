import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحميل صلاحيات القرّاء.","bn":"পাঠকের অ্যাক্সেস লোড করা যায়নি।","de":"Der Lesezugriff konnte nicht geladen werden.","en":"Could not load reader access.","es":"No se pudo cargar el acceso del lector.","fr":"Impossible de charger l'accès lecteur.","hi":"रीडर एक्सेस लोड नहीं किया जा सका.","id":"Tidak dapat memuat akses pembaca.","pt-BR":"Não foi possível carregar o acesso do leitor.","ru":"Не удалось загрузить доступ для чтения.","ur":"ریڈر کی رسائی لوڈ نہیں ہو سکی۔","zh-CN":"无法加载读者访问权限。"};

export function settings_authentication_reader_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
