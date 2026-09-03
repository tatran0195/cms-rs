import { getLocale } from '../runtime.js';

const translations = {"ar":"إجراءات سير عمل Git","bn":"গিট ওয়ার্কফ্লো অ্যাকশন","de":"Git-Workflow-Aktionen","en":"Git workflow actions","es":"Acciones de flujo de trabajo de Git","fr":"Actions du flux de travail Git","hi":"गिट वर्कफ़्लो क्रियाएँ","id":"Tindakan alur kerja Git","pt-BR":"Ações de fluxo de trabalho Git","ru":"Действия рабочего процесса Git","ur":"Git ورک فلو ایکشنز","zh-CN":"Git 工作流程操作"};

export function settings_git_workflow_actions(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
