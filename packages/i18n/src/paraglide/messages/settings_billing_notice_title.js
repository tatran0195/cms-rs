import { getLocale } from '../runtime.js';

const translations = {"ar":"مساحة عمل بيتا مجانية","bn":"বিনামূল্যে বিটা কর্মক্ষেত্র","de":"Kostenloser Beta-Arbeitsbereich","en":"Free beta workspace","es":"Espacio de trabajo beta gratuito","fr":"Espace de travail bêta gratuit","hi":"मुफ़्त बीटा कार्यक्षेत्र","id":"Ruang kerja beta gratis","pt-BR":"Espaço de trabalho beta gratuito","ru":"Бесплатная бета-версия рабочей среды","ur":"مفت بیٹا ورک اسپیس","zh-CN":"免费测试版工作区"};

export function settings_billing_notice_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
