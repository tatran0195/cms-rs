import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث في لغات الواجهة…","bn":"ইন্টারফেসের ভাষা অনুসন্ধান করুন...","de":"Schnittstellensprachen suchen…","en":"Search interface languages…","es":"Idiomas de la interfaz de búsqueda...","fr":"Langues de l’interface de recherche…","hi":"इंटरफ़ेस भाषाएँ खोजें...","id":"Cari bahasa antarmuka…","pt-BR":"Pesquisar idiomas da interface…","ru":"Искать языки интерфейса…","ur":"انٹرفیس کی زبانیں تلاش کریں…","zh-CN":"搜索界面语言..."};

export function account_language_search(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
