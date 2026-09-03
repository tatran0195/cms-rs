import { getLocale } from '../runtime.js';

const translations = {"ar":"فرع Nibleaf المخصص","bn":"নিবেদিত Nibleaf শাখা","de":"Dedizierter Nibleaf-Zweig","en":"Dedicated Nibleaf branch","es":"Rama Nibleaf dedicada","fr":"Branche Nibleaf dédiée","hi":"समर्पित Nibleaf शाखा","id":"Cabang Nibleaf khusus","pt-BR":"Filial Nibleaf dedicada","ru":"Выделенная ветка Nibleaf","ur":"وقف کردہ Nibleaf برانچ","zh-CN":"专用 Nibleaf 分支"};

export function settings_git_workflow_headbranch(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
