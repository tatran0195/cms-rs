import { getLocale } from '../runtime.js';

const translations = {"ar":"قائمة مهام","bn":"করণীয় তালিকা","de":"To-Do-Liste","en":"To-do list","es":"Lista de tareas pendientes","fr":"Liste de choses à faire","hi":"कार्य सूची","id":"Daftar tugas","pt-BR":"Lista de tarefas","ru":"Список дел","ur":"کرنے کی فہرست","zh-CN":"待办事项清单"};

export function editor_slash_todo_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
