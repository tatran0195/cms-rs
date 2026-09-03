import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء التزام ومسودة طلب سحب","bn":"প্রতিশ্রুতি এবং খসড়া টান অনুরোধ","de":"Commit und Entwurf einer Pull-Anfrage","en":"Commit and draft pull request","es":"Confirmar y redactar una solicitud de extracción","fr":"Commit et brouillon de demande d'extraction","hi":"प्रतिबद्ध और ड्राफ्ट पुल अनुरोध","id":"Komit dan buat draf permintaan penarikan","pt-BR":"Confirmação e rascunho de solicitação pull","ru":"Зафиксировать и составить проект запроса на включение","ur":"کمٹ اور ڈرافٹ پل کی درخواست","zh-CN":"提交并起草拉取请求"};

export function settings_git_workflow_publishtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
