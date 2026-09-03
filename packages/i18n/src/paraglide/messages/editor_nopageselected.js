import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يتم تحديد أي صفحة","bn":"কোনো পৃষ্ঠা নির্বাচন করা হয়নি","de":"Keine Seite ausgewählt","en":"No page selected","es":"Ninguna página seleccionada","fr":"Aucune page sélectionnée","hi":"कोई पृष्ठ चयनित नहीं","id":"Tidak ada halaman yang dipilih","pt-BR":"Nenhuma página selecionada","ru":"Страница не выбрана","ur":"کوئی صفحہ منتخب نہیں کیا گیا۔","zh-CN":"未选择页面"};

export function editor_nopageselected(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
