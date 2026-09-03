import { getLocale } from '../runtime.js';

const translations = {"ar":"تعديل الإعداد","bn":"কনফিগারেশন সম্পাদনা করুন","de":"Konfiguration bearbeiten","en":"Edit configuration","es":"Editar configuración","fr":"Modifier la configuration","hi":"कॉन्फ़िगरेशन संपादित करें","id":"Edit konfigurasi","pt-BR":"Editar configuração","ru":"Изменить конфигурацию","ur":"ترتیب میں ترمیم کریں۔","zh-CN":"编辑配置"};

export function settings_openapi_edit(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
