import { getLocale } from '../runtime.js';

const translations = {"ar":"حسب المشروع","bn":"প্রকল্প দ্বারা","de":"Nach Projekt","en":"By project","es":"Por proyecto","fr":"Par projet","hi":"प्रोजेक्ट द्वारा","id":"Berdasarkan proyek","pt-BR":"Por projeto","ru":"По проекту","ur":"پروجیکٹ کے ذریعے","zh-CN":"按项目"};

export function analytics_section_byproject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
