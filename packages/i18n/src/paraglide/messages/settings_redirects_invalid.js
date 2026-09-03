import { getLocale } from '../runtime.js';

const translations = {"ar":"أصلح قواعد إعادة التوجيه هذه قبل الحفظ","bn":"সংরক্ষণ করার আগে এই পুনঃনির্দেশের নিয়মগুলি ঠিক করুন","de":"Korrigieren Sie diese Umleitungsregeln vor dem Speichern","en":"Fix these redirect rules before saving","es":"Corrija estas reglas de redireccionamiento antes de guardar","fr":"Corrigez ces règles de redirection avant de sauvegarder","hi":"सहेजने से पहले इन रीडायरेक्ट नियमों को ठीक करें","id":"Perbaiki aturan pengalihan ini sebelum menyimpan","pt-BR":"Corrija essas regras de redirecionamento antes de salvar","ru":"Исправьте эти правила перенаправления перед сохранением.","ur":"محفوظ کرنے سے پہلے ان ری ڈائریکٹ اصولوں کو درست کریں۔","zh-CN":"保存前修复这些重定向规则"};

export function settings_redirects_invalid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
