import { getLocale } from '../runtime.js';

const translations = {"ar":"إذا لم يعمل الزر، انسخ هذا الرابط والصقه في المتصفح:","bn":"If the button does not work, copy and paste this link into your browser:","de":"If the button does not work, copy and paste this link into your browser:","en":"If the button does not work, copy and paste this link into your browser:","es":"If the button does not work, copy and paste this link into your browser:","fr":"If the button does not work, copy and paste this link into your browser:","hi":"If the button does not work, copy and paste this link into your browser:","id":"If the button does not work, copy and paste this link into your browser:","pt-BR":"If the button does not work, copy and paste this link into your browser:","ru":"If the button does not work, copy and paste this link into your browser:","ur":"If the button does not work, copy and paste this link into your browser:","zh-CN":"If the button does not work, copy and paste this link into your browser:"};

export function email_brand_fallbacklink(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
