import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان طلب السحب","bn":"অনুরোধ শিরোনাম টানুন","de":"Titel der Pull-Anfrage","en":"Pull request title","es":"Título de la solicitud de extracción","fr":"Titre de la demande d'extraction","hi":"अनुरोध शीर्षक खींचें","id":"Tarik judul permintaan","pt-BR":"Título da solicitação pull","ru":"Название запроса на включение","ur":"درخواست کا عنوان کھینچیں۔","zh-CN":"拉取请求标题"};

export function settings_git_workflow_prtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
