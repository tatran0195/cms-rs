import { getLocale } from '../runtime.js';

const translations = {"ar":"المواقع العامة قابلة للفهرسة. أمّا المواقع الخاصة فتتطلّب تسجيل الدخول.","bn":"পাবলিক সাইটগুলি ইনডেক্সযোগ্য। ব্যক্তিগত সাইট একটি লগইন প্রয়োজন.","de":"Öffentliche Websites sind indexierbar. Für private Websites ist ein Login erforderlich.","en":"Public sites are indexable. Private sites require a login.","es":"Los sitios públicos son indexables. Los sitios privados requieren un inicio de sesión.","fr":"Les sites publics sont indexables. Les sites privés nécessitent une connexion.","hi":"सार्वजनिक साइटें अनुक्रमणीय हैं. निजी साइटों के लिए लॉगिन की आवश्यकता होती है.","id":"Situs publik dapat diindeks. Situs pribadi memerlukan login.","pt-BR":"Sites públicos são indexáveis. Sites privados exigem login.","ru":"Публичные сайты индексируются. Частные сайты требуют входа в систему.","ur":"عوامی سائٹس قابل اشاریہ ہیں۔ نجی سائٹس کو لاگ ان کی ضرورت ہوتی ہے۔","zh-CN":"公共站点是可索引的。私人网站需要登录。"};

export function settings_general_visibility_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
