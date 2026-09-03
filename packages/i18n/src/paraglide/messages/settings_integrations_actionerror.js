import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر إكمال إجراء التكامل. حدّث الصفحة وحاول مجددًا.","bn":"ইন্টিগ্রেশন কর্ম সম্পন্ন করা যায়নি । রিফ্রেশ করুন এবং আবার চেষ্টা করুন ।","de":"Die Integrationsaktion konnte nicht abgeschlossen werden. Aktualisieren und erneut versuchen.","en":"The integration action could not be completed. Refresh and try again.","es":"No se ha podido completar la acción de integración. Actualiza e inténtalo de nuevo.","fr":"L’action d’intégration n’a pas pu être effectuée. Actualisez la page et réessayez.","hi":"इंटीग्रेशन कार्रवाई पूरी नहीं हो सकी। रीफ़्रेश करके फिर प्रयास करें।","id":"Tindakan integrasi tidak dapat diselesaikan. Segarkan dan coba lagi.","pt-BR":"Não foi possível concluir a ação da integração. Atualize e tente novamente.","ru":"Не удалось выполнить действие интеграции. Обновите страницу и повторите попытку.","ur":"انضمام کی کارروائی مکمل نہیں ہو سکی ۔ ریفریش کریں اور دوبارہ کوشش کریں ۔","zh-CN":"无法完成集成操作。请刷新后重试。"};

export function settings_integrations_actionerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
