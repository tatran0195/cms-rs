import { getLocale } from '../runtime.js';

const translations = {"ar":"نظرة عامة","bn":"ওভারভিউ","de":"Übersicht","en":"Overview","es":"Descripción general","fr":"Aperçu","hi":"सिंहावलोकन","id":"Ikhtisar","pt-BR":"Visão geral","ru":"Обзор","ur":"جائزہ","zh-CN":"概述"};

export function project_overview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
