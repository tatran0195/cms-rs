import { getLocale } from '../runtime.js';

const translations = {"ar":"هل تريد حذف ”{name}“ وكل محتواه؟ لا يمكن التراجع عن هذا الإجراء.","bn":"\"{name}\" এবং এর সমস্ত সামগ্রী মুছবেন? এটি পূর্বাবস্থায় ফেরানো যাবে না।","de":"„{name}“ und seinen gesamten Inhalt löschen? Dies kann nicht rückgängig gemacht werden.","en":"Delete “{name}” and all its content? This cannot be undone.","es":"¿Eliminar “{name}” y todo su contenido? Esto no se puede deshacer.","fr":"Supprimer « {name} » et tout son contenu ? Cela ne peut pas être annulé.","hi":"\"{name}\" और इसकी सभी सामग्री हटाएं? इसे असंपादित नहीं किया जा सकता है।","id":"Hapus “{name}” dan semua isinya? Hal ini tidak dapat dibatalkan.","pt-BR":"Excluir “{name}” e todo o seu conteúdo? Isto não pode ser desfeito.","ru":"Удалить «{name}» и все его содержимое? Это невозможно отменить.","ur":"\"{name}\" اور اس کے تمام مواد کو حذف کریں؟ اسے کالعدم نہیں کیا جا سکتا۔","zh-CN":"删除“{name}”及其所有内容？此操作无法撤消。"};

export function settings_danger_delete_confirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
