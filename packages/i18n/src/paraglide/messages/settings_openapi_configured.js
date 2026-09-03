import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إعداد مسودة المرجع","bn":"খসড়া রেফারেন্স কনফিগার করা হয়েছে","de":"Entwurfsreferenz konfiguriert","en":"Draft reference configured","es":"Borrador de referencia configurado","fr":"Référence de brouillon configurée","hi":"ड्राफ्ट संदर्भ कॉन्फ़िगर किया गया","id":"Referensi draf dikonfigurasi","pt-BR":"Referência de rascunho configurada","ru":"Ссылка на черновик настроена","ur":"مسودہ حوالہ ترتیب دیا گیا۔","zh-CN":"已配置草稿参考"};

export function settings_openapi_configured(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
