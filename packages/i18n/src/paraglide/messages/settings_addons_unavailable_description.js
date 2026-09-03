import { getLocale } from '../runtime.js';

const translations = {"ar":"هذه الإمكانية غير متاحة لخطة المشروع الحالية أو سياسة الاستحقاقات.","bn":"প্রকল্পের বর্তমান প্ল্যান বা অধিকার নীতিতে এই সুবিধাটি উপলভ্য নয়।","de":"Diese Funktion ist im aktuellen Tarif oder gemäß der Berechtigungsrichtlinie des Projekts nicht verfügbar.","en":"This capability is not available for the project's current plan or entitlement policy.","es":"Esta función no está disponible con el plan actual del proyecto o su política de derechos.","fr":"Cette fonctionnalité n’est pas disponible avec l’offre actuelle du projet ou sa politique de droits.","hi":"यह सुविधा परियोजना की वर्तमान योजना या पात्रता नीति के लिए उपलब्ध नहीं है।","id":"Kapabilitas ini tidak tersedia untuk paket atau kebijakan hak proyek saat ini.","pt-BR":"Este recurso não está disponível no plano atual do projeto ou em sua política de direitos.","ru":"Эта возможность недоступна для текущего тарифа проекта или политики прав.","ur":"یہ صلاحیت پروجیکٹ کے موجودہ پلان یا استحقاق کی پالیسی میں دستیاب نہیں۔","zh-CN":"当前项目套餐或权益策略不支持此功能。"};

export function settings_addons_unavailable_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
