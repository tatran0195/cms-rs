import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف جمهور {name} وإزالة تعيينات قرّائه؟","bn":"{name} শ্রোতা মুছে ফেলবেন এবং এর পাঠক অ্যাসাইনমেন্টগুলি সরিয়ে দেবেন?","de":"Die Zielgruppe {name} löschen und ihre Leserzuweisungen entfernen?","en":"Delete the {name} audience and remove its reader assignments?","es":"¿Eliminar la audiencia {name} y eliminar sus asignaciones de lectores?","fr":"Supprimer l'audience {name} et supprimer ses attributions de lecteurs ?","hi":"{name} ऑडियंस को हटाएं और उसके रीडर असाइनमेंट को हटा दें?","id":"Hapus audiens {name} dan hapus tugas pembacanya?","pt-BR":"Excluir o público {name} e remover suas atribuições de leitor?","ru":"Удалить аудиторию {name} и удалить назначения читателей?","ur":"{name} سامعین کو حذف کریں اور اس کے ریڈر اسائنمنٹس کو ہٹائیں؟","zh-CN":"删除 {name} 受众并删除其读者分配？"};

export function settings_authentication_reader_deleteaudienceconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
