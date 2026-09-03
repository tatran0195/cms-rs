import { getLocale } from '../runtime.js';

const translations = {"ar":"دليل مرقّم خطوة بخطوة.","bn":"একটি সংখ্যাযুক্ত ধাপে ধাপে নির্দেশিকা।","de":"Eine nummerierte Schritt-für-Schritt-Anleitung.","en":"A numbered step-by-step guide.","es":"Una guía numerada paso a paso.","fr":"Un guide numéroté étape par étape.","hi":"एक क्रमांकित चरण-दर-चरण मार्गदर्शिका।","id":"Panduan langkah demi langkah bernomor.","pt-BR":"Um guia passo a passo numerado.","ru":"Нумерованное пошаговое руководство.","ur":"ایک نمبر والا مرحلہ وار گائیڈ۔","zh-CN":"编号的分步指南。"};

export function editor_slash_steps_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
