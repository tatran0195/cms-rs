import { getLocale } from '../runtime.js';

const translations = {"ar":"🎉 الإصدار 3 وصل — أسرع وأفضل.","bn":"🎉 v3 এখানে আছে — দ্রুত এবং ভালো।","de":"🎉 v3 ist da – schneller und besser.","en":"🎉 v3 is here — faster and better.","es":"🎉 v3 ya está aquí: más rápido y mejor.","fr":"🎉 La v3 est là – plus rapide et meilleure.","hi":"🎉 v3 यहाँ है - तेज़ और बेहतर।","id":"🎉 v3 telah hadir — lebih cepat dan lebih baik.","pt-BR":"🎉 A v3 chegou — mais rápida e melhor.","ru":"🎉 Версия 3 уже здесь — быстрее и лучше.","ur":"🎉 v3 یہاں ہے — تیز اور بہتر۔","zh-CN":"🎉 v3 来了——更快更好。"};

export function settings_banner_message_placeholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
