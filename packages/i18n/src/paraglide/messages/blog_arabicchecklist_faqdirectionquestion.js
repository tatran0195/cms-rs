import { getLocale } from '../runtime.js';

const translations = {"ar":"هل يكفي إضافة dir=\"rtl\" إلى صفحة الوثائق؟","bn":"Is adding dir=\"rtl\" to a documentation page enough?","de":"Is adding dir=\"rtl\" to a documentation page enough?","en":"Is adding dir=\"rtl\" to a documentation page enough?","es":"Is adding dir=\"rtl\" to a documentation page enough?","fr":"Is adding dir=\"rtl\" to a documentation page enough?","hi":"Is adding dir=\"rtl\" to a documentation page enough?","id":"Is adding dir=\"rtl\" to a documentation page enough?","pt-BR":"Is adding dir=\"rtl\" to a documentation page enough?","ru":"Is adding dir=\"rtl\" to a documentation page enough?","ur":"Is adding dir=\"rtl\" to a documentation page enough?","zh-CN":"Is adding dir=\"rtl\" to a documentation page enough?"};

export function blog_arabicchecklist_faqdirectionquestion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
