import { getLocale } from '../runtime.js';

const translations = {"ar":"تدوير السر وإظهاره","bn":"ঘোরান এবং গোপন প্রকাশ","de":"Drehen und Geheimnis enthüllen","en":"Rotate and reveal secret","es":"Gira y revela el secreto.","fr":"Faites pivoter et révélez le secret","hi":"घुमाएँ और रहस्य उजागर करें","id":"Putar dan ungkapkan rahasia","pt-BR":"Gire e revele o segredo","ru":"Поворот и раскрытие секрета","ur":"گھمائیں اور راز افشا کریں۔","zh-CN":"旋转并揭示秘密"};

export function settings_git_workflow_rotatesecret(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
