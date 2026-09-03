import { getLocale } from '../runtime.js';

const translations = {"ar":"ما الذي يدعمه Nibleaf للعربية اليوم؟","bn":"What Arabic features does Nibleaf support today?","de":"What Arabic features does Nibleaf support today?","en":"What Arabic features does Nibleaf support today?","es":"What Arabic features does Nibleaf support today?","fr":"What Arabic features does Nibleaf support today?","hi":"What Arabic features does Nibleaf support today?","id":"What Arabic features does Nibleaf support today?","pt-BR":"What Arabic features does Nibleaf support today?","ru":"What Arabic features does Nibleaf support today?","ur":"What Arabic features does Nibleaf support today?","zh-CN":"What Arabic features does Nibleaf support today?"};

export function blog_arabicchecklist_faqsupportquestion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
