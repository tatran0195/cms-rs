import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر حل التعارض.","bn":"দ্বন্দ্ব মেটাতে পারেনি।","de":"Konflikt konnte nicht gelöst werden.","en":"Could not resolve conflict.","es":"No se pudo resolver el conflicto.","fr":"Impossible de résoudre le conflit.","hi":"विवाद का समाधान नहीं हो सका.","id":"Tidak dapat menyelesaikan konflik.","pt-BR":"Não foi possível resolver o conflito.","ru":"Не удалось разрешить конфликт.","ur":"تنازعہ حل نہ ہو سکا۔","zh-CN":"无法解决冲突。"};

export function settings_git_workflow_conflict_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
