import { getLocale } from '../runtime.js';

const translations = {"ar":"{count}+ هذا الأسبوع","bn":"+{count} new this week","de":"+{count} new this week","en":"+{count} new this week","es":"+{count} new this week","fr":"+{count} new this week","hi":"+{count} new this week","id":"+{count} new this week","pt-BR":"+{count} new this week","ru":"+{count} new this week","ur":"+{count} new this week","zh-CN":"+{count} new this week"};

export function admin_overview_newthisweekcount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
