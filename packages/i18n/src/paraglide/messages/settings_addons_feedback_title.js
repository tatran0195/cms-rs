import { getLocale } from '../runtime.js';

const translations = {"ar":"أداة الملاحظات","bn":"প্রতিক্রিয়া উইজেট","de":"Feedback-Widget","en":"Feedback widget","es":"Widget de comentarios","fr":"Widget de commentaires","hi":"फीडबैक विजेट","id":"Widget umpan balik","pt-BR":"Widget de comentários","ru":"Виджет обратной связи","ur":"فیڈ بیک ویجیٹ","zh-CN":"反馈小部件"};

export function settings_addons_feedback_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
