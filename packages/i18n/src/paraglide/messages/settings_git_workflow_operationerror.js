import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر وضع عملية Git في قائمة الانتظار.","bn":"গিট অপারেশন সারি করা যায়নি।","de":"Der Git-Vorgang konnte nicht in die Warteschlange gestellt werden.","en":"Could not queue Git operation.","es":"No se pudo poner en cola la operación de Git.","fr":"Impossible de mettre l'opération Git en file d'attente.","hi":"Git ऑपरेशन को कतारबद्ध नहीं किया जा सका.","id":"Tidak dapat mengantri operasi Git.","pt-BR":"Não foi possível enfileirar a operação do Git.","ru":"Не удалось поставить в очередь операцию Git.","ur":"Git آپریشن کو قطار میں نہیں لگایا جا سکا۔","zh-CN":"无法对 Git 操作进行排队。"};

export function settings_git_workflow_operationerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
