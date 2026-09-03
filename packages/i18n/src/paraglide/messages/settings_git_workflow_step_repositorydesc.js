import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر المصدر","bn":"উৎস নির্বাচন করুন","de":"Wählen Sie die Quelle","en":"Choose the source","es":"Elige la fuente","fr":"Choisissez la provenance","hi":"स्रोत चुनें","id":"Pilih sumbernya","pt-BR":"Escolha a fonte","ru":"Выберите источник","ur":"ذریعہ منتخب کریں۔","zh-CN":"选择来源"};

export function settings_git_workflow_step_repositorydesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
