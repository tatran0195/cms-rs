import { getLocale } from '../runtime.js';

const translations = {"ar":"وصف الميتا","bn":"মেটা বিবরণ","de":"Meta-Beschreibung","en":"Meta description","es":"Meta descripción","fr":"Méta description","hi":"मेटा विवरण","id":"Deskripsi meta","pt-BR":"Meta descrição","ru":"Мета-описание","ur":"میٹا تفصیل","zh-CN":"元描述"};

export function settings_seo_metadescription_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
