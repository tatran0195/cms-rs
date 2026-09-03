import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} مشاريع","bn":"{count} প্রকল্প","de":"{count} Projekte","en":"{count} projects","es":"{count} proyectos","fr":"{count} projets","hi":"{count} परियोजनाएं","id":"{count} proyek","pt-BR":"{count} projetos","ru":"{count} проектов","ur":"{count} پروجیکٹس","zh-CN":"{count} 项目"};

export function settings_workspace_projectcount_other(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
