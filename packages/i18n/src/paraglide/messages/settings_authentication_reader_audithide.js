import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء النشاط الأمني","bn":"নিরাপত্তা কার্যকলাপ লুকান","de":"Sicherheitsaktivitäten ausblenden","en":"Hide security activity","es":"Ocultar actividad de seguridad","fr":"Masquer l'activité de sécurité","hi":"सुरक्षा गतिविधि छिपाएँ","id":"Sembunyikan aktivitas keamanan","pt-BR":"Ocultar atividade de segurança","ru":"Скрыть охранную активность","ur":"حفاظتی سرگرمی چھپائیں۔","zh-CN":"隐藏安全活动"};

export function settings_authentication_reader_audithide(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
