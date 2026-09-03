import { getLocale } from '../runtime.js';

const translations = {"ar":"تعرض الأحداث التشغيلية المختصرة من دون محتوى المستندات أو تفاصيل الطلبات الخام.","bn":"Activity Privacy","de":"Activity Privacy","en":"Activity Privacy","es":"Activity Privacy","fr":"Activity Privacy","hi":"Activity Privacy","id":"Activity Privacy","pt-BR":"Activity Privacy","ru":"Activity Privacy","ur":"Activity Privacy","zh-CN":"Activity Privacy"};

export function admin_site_activityprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
