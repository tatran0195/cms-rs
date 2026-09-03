import { getLocale } from '../runtime.js';

const translations = {"ar":"بيتا Cloud","bn":"মেঘ বিটা","de":"Cloud-Beta","en":"Cloud Beta","es":"Beta de la nube","fr":"Bêta cloud","hi":"क्लाउड बीटा","id":"Awan Beta","pt-BR":"Nuvem Beta","ru":"Облачная бета-версия","ur":"کلاؤڈ بیٹا","zh-CN":"云测试版"};

export function settings_plan_selfhosted_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
