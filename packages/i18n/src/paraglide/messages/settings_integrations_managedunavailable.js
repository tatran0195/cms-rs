import { getLocale } from '../runtime.js';

const translations = {"ar":"غير مُعدّ في نسخة Nibleaf هذه","bn":"এই Nibleaf ইনস্ট্যান্সের জন্য কনফিগার করা হয়নি","de":"Nicht für diese Nibleaf-Instanz konfiguriert","en":"Not configured for this Nibleaf instance","es":"No configurado para esta instancia de Nibleaf","fr":"Non configuré pour cette instance Nibleaf","hi":"इस Nibleaf इंस्टेंस के लिए कॉन्फ़िगर नहीं किया गया","id":"Tidak dikonfigurasi untuk instansi Nibleaf ini","pt-BR":"Não configurado para esta instância do Nibleaf","ru":"Не настроен для этого экземпляра Nibleaf","ur":"اس Nibleaf انسٹنس کے لیے تشکیل شدہ نہیں","zh-CN":"未为 Nibleaf 实例配置"};

export function settings_integrations_managedunavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
