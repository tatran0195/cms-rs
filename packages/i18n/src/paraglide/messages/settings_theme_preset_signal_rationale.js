import { getLocale } from '../runtime.js';

const translations = {"ar":"الأنسب لمراجع API وتوثيق SDK والمحتوى التقني الكثيف.","bn":"Best for API references, SDK documentation, and dense technical material.","de":"Best for API references, SDK documentation, and dense technical material.","en":"Best for API references, SDK documentation, and dense technical material.","es":"Best for API references, SDK documentation, and dense technical material.","fr":"Best for API references, SDK documentation, and dense technical material.","hi":"Best for API references, SDK documentation, and dense technical material.","id":"Best for API references, SDK documentation, and dense technical material.","pt-BR":"Best for API references, SDK documentation, and dense technical material.","ru":"Best for API references, SDK documentation, and dense technical material.","ur":"Best for API references, SDK documentation, and dense technical material.","zh-CN":"Best for API references, SDK documentation, and dense technical material."};

export function settings_theme_preset_signal_rationale(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
