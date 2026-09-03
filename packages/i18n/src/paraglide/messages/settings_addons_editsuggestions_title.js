import { getLocale } from '../runtime.js';

const translations = {"ar":"اقتراحات التحرير","bn":"পরামর্শ সম্পাদনা করুন","de":"Vorschläge bearbeiten","en":"Edit suggestions","es":"Editar sugerencias","fr":"Modifier les suggestions","hi":"सुझाव संपादित करें","id":"Sunting saran","pt-BR":"Editar sugestões","ru":"Изменить предложения","ur":"تجاویز میں ترمیم کریں۔","zh-CN":"编辑建议"};

export function settings_addons_editsuggestions_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
