import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد باتجاه واحد دون تفويض المزوّد أو نشر طلبات السحب.","bn":"প্রদানকারীর অনুমোদন বা পুল-অনুরোধ প্রকাশ ছাড়াই একমুখী আমদানি।","de":"Einwegimport ohne Anbieterautorisierung oder Pull-Request-Veröffentlichung.","en":"One-way import without provider authorization or pull-request publishing.","es":"Importación unidireccional sin autorización del proveedor ni publicación de solicitud de extracción.","fr":"Importation unidirectionnelle sans autorisation du fournisseur ni publication de demande d'extraction.","hi":"प्रदाता प्राधिकरण या पुल-अनुरोध प्रकाशन के बिना एक-तरफ़ा आयात।","id":"Impor satu arah tanpa otorisasi penyedia atau penerbitan permintaan tarik.","pt-BR":"Importação unidirecional sem autorização do provedor ou publicação de solicitação pull.","ru":"Односторонний импорт без авторизации поставщика или публикации запроса на включение.","ur":"فراہم کنندہ کی اجازت کے بغیر یک طرفہ درآمد یا پُل ریکوئسٹ پبلشنگ۔","zh-CN":"无需提供商授权或拉取请求发布的单向导入。"};

export function settings_git_publicimport_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
