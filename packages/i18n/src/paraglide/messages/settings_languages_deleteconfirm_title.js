import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف {label}؟","bn":"{label} মুছবেন?","de":"{label} löschen?","en":"Delete {label}?","es":"¿Eliminar {label}?","fr":"Supprimer {label} ?","hi":"{label} हटाएं?","id":"Hapus {label}?","pt-BR":"Excluir {label}?","ru":"Удалить {label}?","ur":"{label} کو حذف کریں؟","zh-CN":"删除{label}？"};

export function settings_languages_deleteconfirm_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
