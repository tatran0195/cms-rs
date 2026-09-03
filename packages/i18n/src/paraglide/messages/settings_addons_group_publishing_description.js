import { getLocale } from '../runtime.js';

const translations = {"ar":"إمكانات مضمّنة للجودة والمعاينة قبل الإصدارات.","bn":"রিলিজের জন্য নিজস্ব মান যাচাই ও পূর্বরূপ সুবিধা।","de":"Produkteigene Qualitäts- und Vorschaufunktionen für Releases.","en":"First-party quality and preview capabilities for releases.","es":"Funciones propias de calidad y vista previa para las versiones.","fr":"Fonctionnalités internes de qualité et de prévisualisation pour les versions.","hi":"रिलीज़ के लिए प्रथम-पक्ष गुणवत्ता और पूर्वावलोकन क्षमताएँ।","id":"Kapabilitas kualitas dan pratinjau bawaan untuk rilis.","pt-BR":"Recursos próprios de qualidade e pré-visualização para lançamentos.","ru":"Встроенные возможности контроля качества и предпросмотра для выпусков.","ur":"ریلیز کے لیے اپنی معیار جانچ اور پیش منظر کی صلاحیتیں۔","zh-CN":"发布版本所需的第一方质量检查和预览能力。"};

export function settings_addons_group_publishing_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
