import { getLocale } from '../runtime.js';

const translations = {"ar":"تعليم الكل كمقروء","bn":"সব পড়া চিহ্নিত করুন","de":"Alles als gelesen markieren","en":"Mark all read","es":"Marcar todo como leído","fr":"Marquer tout comme lu","hi":"सभी पढ़े गए को चिह्नित करें","id":"Tandai semua telah dibaca","pt-BR":"Marcar tudo como lido","ru":"Отметить все прочитанными","ur":"سب کو پڑھا ہوا نشان زد کریں۔","zh-CN":"标记全部已读"};

export function notifications_markallread(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
