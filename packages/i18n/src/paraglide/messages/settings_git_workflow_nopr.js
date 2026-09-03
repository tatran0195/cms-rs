import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يتم إنشاء طلب سحب بعد.","bn":"এখনও কোন টান অনুরোধ তৈরি করা হয়নি.","de":"Es wurde noch kein Pull-Request erstellt.","en":"No pull request has been created yet.","es":"Aún no se ha creado ninguna solicitud de extracción.","fr":"Aucune pull request n'a encore été créée.","hi":"अभी तक कोई पुल अनुरोध नहीं बनाया गया है.","id":"Belum ada permintaan penarikan yang dibuat.","pt-BR":"Nenhuma solicitação pull foi criada ainda.","ru":"Запрос на включение еще не создан.","ur":"ابھی تک کوئی پل کی درخواست نہیں بنائی گئی ہے۔","zh-CN":"尚未创建拉取请求。"};

export function settings_git_workflow_nopr(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
