import { getLocale } from '../runtime.js';

const translations = {"ar":"نظرة عامة على الموقع","bn":"সাইট ওভারভিউ","de":"Site-Übersicht","en":"Site overview","es":"Descripción general del sitio","fr":"Présentation du site","hi":"साइट सिंहावलोकन","id":"Ikhtisar situs","pt-BR":"Visão geral do site","ru":"Обзор сайта","ur":"سائٹ کا جائزہ","zh-CN":"站点概览"};

export function overview_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
