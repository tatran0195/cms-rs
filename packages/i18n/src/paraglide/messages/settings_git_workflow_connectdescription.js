import { getLocale } from '../runtime.js';

const translations = {"ar":"استورد مستنداتك إلى Nibleaf، وأبقِ التغييرات متزامنة، وانشر طلبات سحب قابلة للمراجعة.","bn":"বিদ্যমান নথিগুলিকে Nibleaf এ আনুন, পরিবর্তনগুলি সিঙ্কে রাখুন, এবং পর্যালোচনাযোগ্য পুল অনুরোধগুলি প্রকাশ করুন৷","de":"Bringen Sie vorhandene Dokumente in Nibleaf ein, halten Sie Änderungen synchron und veröffentlichen Sie überprüfbare Pull-Anfragen.","en":"Bring existing docs into Nibleaf, keep changes in sync, and publish reviewable pull requests.","es":"Incorpore los documentos existentes a Nibleaf, mantenga los cambios sincronizados y publique solicitudes de extracción revisables.","fr":"Intégrez les documents existants dans Nibleaf, synchronisez les modifications et publiez des demandes d'extraction révisables.","hi":"मौजूदा दस्तावेज़ों को Nibleaf में लाएँ, परिवर्तनों को सिंक में रखें, और समीक्षा योग्य पुल अनुरोध प्रकाशित करें।","id":"Bawa dokumen yang ada ke Nibleaf, sinkronkan perubahan, dan publikasikan permintaan penarikan yang dapat ditinjau.","pt-BR":"Traga os documentos existentes para Nibleaf, mantenha as alterações sincronizadas e publique pull requests revisáveis.","ru":"Перенесите существующие документы в Nibleaf, синхронизируйте изменения и публикуйте проверяемые запросы на включение.","ur":"موجودہ دستاویزات کو Nibleaf میں لائیں۔","zh-CN":"将现有文档引入 Nibleaf，保持更改同步，并发布可审查的拉取请求。"};

export function settings_git_workflow_connectdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
