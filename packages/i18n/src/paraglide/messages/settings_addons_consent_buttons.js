import { getLocale } from '../runtime.js';

const translations = {"ar":"تخطيط الإجراءات","bn":"অ্যাকশনের বিন্যাস","de":"Anordnung der Aktionen","en":"Action layout","es":"Distribución de las acciones","fr":"Disposition des actions","hi":"कार्रवाइयों का लेआउट","id":"Tata letak tindakan","pt-BR":"Layout das ações","ru":"Расположение действий","ur":"اقدامات کی ترتیب","zh-CN":"操作布局"};

export function settings_addons_consent_buttons(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
