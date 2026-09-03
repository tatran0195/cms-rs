import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدام المخصص","bn":"কাস্টম ব্যবহার করুন","de":"Verwenden Sie Benutzerdefiniert","en":"Use custom","es":"Usar personalizado","fr":"Utiliser personnalisé","hi":"कस्टम का प्रयोग करें","id":"Gunakan adat","pt-BR":"Usar personalizado","ru":"Использовать пользовательские","ur":"حسب ضرورت استعمال کریں۔","zh-CN":"使用自定义"};

export function settings_git_workflow_conflict_usecustom(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
