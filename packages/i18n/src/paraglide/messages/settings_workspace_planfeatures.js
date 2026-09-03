import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاهدات غير محدودة · نطاقات مخصّصة","bn":"সীমাহীন পেজভিউ · কাস্টম ডোমেন","de":"Unbegrenzte Seitenaufrufe · Benutzerdefinierte Domains","en":"unlimited pageviews · custom domains","es":"páginas vistas ilimitadas · dominios personalizados","fr":"pages vues illimitées · domaines personnalisés","hi":"असीमित पृष्ठदृश्य · कस्टम डोमेन","id":"tampilan halaman tak terbatas · domain khusus","pt-BR":"visualizações de página ilimitadas · domínios personalizados","ru":"неограниченное количество просмотров страниц · собственные домены","ur":"لامحدود صفحہ ملاحظات · حسب ضرورت ڈومینز","zh-CN":"无限浏览量 · 自定义域"};

export function settings_workspace_planfeatures(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
