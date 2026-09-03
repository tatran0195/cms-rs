import { getLocale } from '../runtime.js';

const translations = {"ar":"اطلب من المساعد كتابة شيء محدّد…","bn":"সহকারীকে নির্দিষ্ট কিছু লিখতে বলুন...","de":"Bitten Sie den Assistenten, etwas Bestimmtes zu schreiben ...","en":"Ask the assistant to write something specific…","es":"Pídele al asistente que escriba algo específico...","fr":"Demandez à l’assistant d’écrire quelque chose de spécifique…","hi":"सहायक से कुछ विशिष्ट लिखने के लिए कहें...","id":"Minta asisten untuk menulis sesuatu yang spesifik…","pt-BR":"Peça ao assistente para escrever algo específico…","ru":"Попросите ассистента написать что-то конкретное…","ur":"اسسٹنٹ سے کچھ مخصوص لکھنے کو کہیں…","zh-CN":"请助理写一些具体的东西..."};

export function editor_ai_instructionplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
