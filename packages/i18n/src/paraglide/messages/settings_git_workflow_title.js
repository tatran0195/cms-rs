import { getLocale } from '../runtime.js';

const translations = {"ar":"سير عمل Git ثنائي الاتجاه","bn":"দ্বি-মুখী গিট ওয়ার্কফ্লো","de":"Zwei-Wege-Git-Workflow","en":"Two-way Git workflow","es":"Flujo de trabajo de Git bidireccional","fr":"Flux de travail Git bidirectionnel","hi":"दो-तरफा गिट वर्कफ़्लो","id":"Alur kerja Git dua arah","pt-BR":"Fluxo de trabalho Git bidirecional","ru":"Двусторонний рабочий процесс Git","ur":"دو طرفہ Git ورک فلو","zh-CN":"双向 Git 工作流程"};

export function settings_git_workflow_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
