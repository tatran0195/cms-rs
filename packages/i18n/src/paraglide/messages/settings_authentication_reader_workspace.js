import { getLocale } from '../runtime.js';

const translations = {"ar":"أعضاء مساحة العمل","bn":"কর্মক্ষেত্রের সদস্য","de":"Mitglieder des Arbeitsbereichs","en":"Workspace members","es":"Miembros del espacio de trabajo","fr":"Membres de l'espace de travail","hi":"कार्यक्षेत्र सदस्य","id":"Anggota ruang kerja","pt-BR":"Membros do espaço de trabalho","ru":"Участники рабочей области","ur":"ورک اسپیس کے اراکین","zh-CN":"工作区成员"};

export function settings_authentication_reader_workspace(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
