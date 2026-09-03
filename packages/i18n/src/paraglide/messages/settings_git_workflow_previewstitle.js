import { getLocale } from '../runtime.js';

const translations = {"ar":"طلبات السحب والمعاينات","bn":"অনুরোধ এবং পূর্বরূপ টানুন","de":"Pull-Requests und Vorschauen","en":"Pull requests and previews","es":"Solicitudes de extracción y vistas previas","fr":"Demandes de tirage et aperçus","hi":"अनुरोध और पूर्वावलोकन खींचें","id":"Tarik permintaan dan pratinjau","pt-BR":"Solicitações pull e visualizações","ru":"Запросы на включение и предварительный просмотр","ur":"درخواستیں اور پیش نظارہ کھینچیں۔","zh-CN":"拉取请求和预览"};

export function settings_git_workflow_previewstitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
