import { getLocale } from '../runtime.js';

const translations = {"ar":"اللغة الافتراضية مفعّلة دائمًا — فهي اللغة الاحتياطية لكل زائر.","bn":"ডিফল্ট ভাষা সর্বদা সক্রিয় থাকে — এটি প্রত্যেক দর্শকের জন্য ফলব্যাক।","de":"Die Standardsprache ist immer aktiviert – sie ist die Ausweichsprache für jeden Besucher.","en":"The default language is always enabled — it is the fallback for every visitor.","es":"El idioma predeterminado siempre está habilitado: es el idioma alternativo para cada visitante.","fr":"La langue par défaut est toujours activée — c'est la langue de secours pour chaque visiteur.","hi":"डिफ़ॉल्ट भाषा हमेशा सक्षम होती है - यह प्रत्येक आगंतुक के लिए फ़ॉलबैक है।","id":"Bahasa default selalu diaktifkan — ini adalah pengganti untuk setiap pengunjung.","pt-BR":"O idioma padrão está sempre habilitado – é o substituto para cada visitante.","ru":"Язык по умолчанию всегда включен — это запасной вариант для каждого посетителя.","ur":"پہلے سے طے شدہ زبان ہمیشہ فعال ہوتی ہے - یہ ہر آنے والے کے لیے فال بیک ہوتی ہے۔","zh-CN":"默认语言始终处于启用状态 - 这是每个访问者的后备语言。"};

export function settings_languages_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
