import { getLocale } from '../runtime.js';

const translations = {"ar":"هل تريد حذف هذه الصفحة؟","bn":"এই পৃষ্ঠাটি মুছবেন?","de":"Diese Seite löschen?","en":"Delete this page?","es":"¿Eliminar esta página?","fr":"Supprimer cette page ?","hi":"यह पृष्ठ हटाएं?","id":"Hapus halaman ini?","pt-BR":"Excluir esta página?","ru":"Удалить эту страницу?","ur":"اس صفحہ کو حذف کریں؟","zh-CN":"删除此页面？"};

export function editor_deletepageconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
