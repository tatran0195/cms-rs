import { getLocale } from '../runtime.js';

const translations = {"ar":"تتبّع المهام بمربّعات اختيار.","bn":"চেকবক্স দিয়ে কাজ ট্র্যাক করুন.","de":"Verfolgen Sie Aufgaben mit Kontrollkästchen.","en":"Track tasks with checkboxes.","es":"Realice un seguimiento de las tareas con casillas de verificación.","fr":"Suivez les tâches avec des cases à cocher.","hi":"चेकबॉक्स के साथ कार्यों को ट्रैक करें।","id":"Lacak tugas dengan kotak centang.","pt-BR":"Acompanhe tarefas com caixas de seleção.","ru":"Отслеживайте задачи с помощью флажков.","ur":"چیک باکسز کے ساتھ کاموں کو ٹریک کریں۔","zh-CN":"使用复选框跟踪任务。"};

export function editor_slash_todo_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
