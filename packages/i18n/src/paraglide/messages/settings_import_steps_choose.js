import { getLocale } from '../runtime.js';

const translations = {"ar":"اختيار المصدر","bn":"উত্স চয়ন করুন","de":"Quelle wählen","en":"Choose source","es":"Elige fuente","fr":"Choisir la source","hi":"स्रोत चुनें","id":"Pilih sumber","pt-BR":"Escolha a fonte","ru":"Выберите источник","ur":"ذریعہ منتخب کریں۔","zh-CN":"选择来源"};

export function settings_import_steps_choose(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
