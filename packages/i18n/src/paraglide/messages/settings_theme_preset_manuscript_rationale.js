import { getLocale } from '../runtime.js';

const translations = {"ar":"الأنسب للكتيبات ومراكز التعلّم وقواعد المعرفة السردية.","bn":"Best for handbooks, learning centers, and narrative knowledge bases.","de":"Best for handbooks, learning centers, and narrative knowledge bases.","en":"Best for handbooks, learning centers, and narrative knowledge bases.","es":"Best for handbooks, learning centers, and narrative knowledge bases.","fr":"Best for handbooks, learning centers, and narrative knowledge bases.","hi":"Best for handbooks, learning centers, and narrative knowledge bases.","id":"Best for handbooks, learning centers, and narrative knowledge bases.","pt-BR":"Best for handbooks, learning centers, and narrative knowledge bases.","ru":"Best for handbooks, learning centers, and narrative knowledge bases.","ur":"Best for handbooks, learning centers, and narrative knowledge bases.","zh-CN":"Best for handbooks, learning centers, and narrative knowledge bases."};

export function settings_theme_preset_manuscript_rationale(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
