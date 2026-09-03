import { getLocale } from '../runtime.js';

const translations = {"ar":"هناك {count} مؤشرات حالية تحتاج إلى مراجعة.","bn":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","de":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","en":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","es":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","fr":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","hi":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","id":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","pt-BR":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","ru":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","ur":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git.","zh-CN":"{count} current signals need review across recent failures, domains, moderation, invitations, exports, and Git."};

export function admin_overview_attentionbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
