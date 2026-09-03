import { getLocale } from '../runtime.js';

const translations = {"ar":"التخطيط والتنقل","bn":"লেআউট এবং নেভিগেশন","de":"Layout und Navigation","en":"Layout and navigation","es":"Diseño y navegación","fr":"Mise en page et navigation","hi":"लेआउट और नेविगेशन","id":"Tata letak dan navigasi","pt-BR":"Layout e navegação","ru":"Макет и навигация","ur":"لے آؤٹ اور نیویگیشن","zh-CN":"布局和导航"};

export function settings_theme_layout(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
