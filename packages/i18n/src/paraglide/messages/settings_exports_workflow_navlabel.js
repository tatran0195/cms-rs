import { getLocale } from '../runtime.js';

const translations = {"ar":"مسارات عمل التصدير","bn":"কর্মপ্রবাহ রপ্তানি করুন","de":"Workflows exportieren","en":"Export workflows","es":"Exportar flujos de trabajo","fr":"Exporter les flux de travail","hi":"वर्कफ़्लो निर्यात करें","id":"Ekspor alur kerja","pt-BR":"Exportar fluxos de trabalho","ru":"Экспорт рабочих процессов","ur":"ورک فلو برآمد کریں۔","zh-CN":"导出工作流程"};

export function settings_exports_workflow_navlabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
