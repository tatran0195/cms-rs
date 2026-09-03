import { getLocale } from '../runtime.js';

const translations = {"ar":"أعدّه مشغّل Nibleaf","bn":"Nibleaf অপারেটর দ্বারা কনফিগার করা হয়েছে","de":"Vom Nibleaf-Operator konfiguriert","en":"Configured by the Nibleaf operator","es":"Configurado por el operador Nibleaf","fr":"Configuré par l'opérateur de Nibleaf","hi":"Nibleaf ऑपरेटर द्वारा कॉन्फ़िगर किया गया","id":"Dikonfigurasi oleh operator Nibleaf","pt-BR":"Configurado pelo operador Nibleaf","ru":"Настроен оператором Nibleaf","ur":"Nibleaf آپریٹر کے ذریعہ تشکیل کردہ","zh-CN":"由 Nibleaf 运维方配置"};

export function settings_integrations_managedready(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
