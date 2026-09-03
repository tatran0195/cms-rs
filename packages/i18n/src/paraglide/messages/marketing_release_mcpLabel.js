import { getLocale } from '../runtime.js';

const translations = {"ar":"اقرأ دليل MCP","bn":"MCP নির্দেশিকা পড়ুন","de":"MCP-Leitfaden lesen","en":"Read the MCP guide","es":"Leer la guía de MCP","fr":"Lire le guide MCP","hi":"MCP गाइड पढ़ें","id":"Baca panduan MCP","pt-BR":"Leia o guia do MCP","ru":"Прочитать руководство по MCP","ur":"MCP رہنما پڑھیں","zh-CN":"阅读 MCP 指南"};

export function marketing_release_mcpLabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
