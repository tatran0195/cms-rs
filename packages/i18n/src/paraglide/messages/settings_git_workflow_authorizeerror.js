import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تفويض GitHub. تحقّق من الرمز وأعد المحاولة.","bn":"GitHub অনুমোদিত করা যায়নি। টোকেন চেক করুন এবং আবার চেষ্টা করুন।","de":"GitHub konnte nicht autorisiert werden. Überprüfen Sie das Token und versuchen Sie es erneut.","en":"GitHub could not be authorized. Check the token and try again.","es":"GitHub no se pudo autorizar. Verifique el token e inténtelo nuevamente.","fr":"GitHub n'a pas pu être autorisé. Vérifiez le jeton et réessayez.","hi":"GitHub अधिकृत नहीं किया जा सका. टोकन की जाँच करें और पुनः प्रयास करें।","id":"GitHub tidak dapat diotorisasi. Periksa token dan coba lagi.","pt-BR":"GitHub não pôde ser autorizado. Verifique o token e tente novamente.","ru":"GitHub не удалось авторизовать. Проверьте токен и повторите попытку.","ur":"GitHub کو اجازت نہیں دی جا سکی۔ ٹوکن چیک کریں اور دوبارہ کوشش کریں۔","zh-CN":"GitHub 无法获得授权。检查令牌并重试。"};

export function settings_git_workflow_authorizeerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
