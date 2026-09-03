import { getLocale } from '../runtime.js';

const translations = {"ar":"برنامج العامل","bn":"ওয়ার্কার স্ক্রিপ্ট","de":"Arbeiterskript","en":"Worker script","es":"Guión del trabajador","fr":"Scénario de travail","hi":"कार्यकर्ता स्क्रिप्ट","id":"Skrip pekerja","pt-BR":"Programa do trabalhador","ru":"Рабочий сценарий","ur":"کارکن کا اسکرپٹ","zh-CN":"工人脚本"};

export function settings_integrations_field_worker(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
