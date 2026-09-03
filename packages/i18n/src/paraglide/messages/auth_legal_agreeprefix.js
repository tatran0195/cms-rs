import { getLocale } from '../runtime.js';

const translations = {"ar":"أوافق على ","bn":"আমি রাজি","de":"Ich stimme dem zu","en":"I agree to the ","es":"Estoy de acuerdo con el","fr":"J'accepte le","hi":"मैं इससे सहमत हूं","id":"Saya setuju dengan","pt-BR":"Eu concordo com o","ru":"Я согласен на","ur":"میں اس سے اتفاق کرتا ہوں۔","zh-CN":"我同意"};

export function auth_legal_agreeprefix(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
