import { getLocale } from '../runtime.js';

const translations = {"ar":"الإفصاح: نحن نبني Nibleaf، لذلك لنا مصلحة تجارية واضحة. راجعنا المصادر الرسمية لكل منافس في {reviewedOn}، وربطناها مباشرة، وذكرنا الحالات التي يكون فيها المنافس اختيارًا أفضل. الأسعار والميزات تتغير؛ افحص المصدر قبل الشراء.","bn":"Source disclosure reviewed on {reviewedOn}.","de":"Source disclosure reviewed on {reviewedOn}.","en":"الإفصاح: نحن نبني Nibleaf، لذلك لنا مصلحة تجارية واضحة. راجعنا المصادر الرسمية لكل منافس في {reviewedOn}، وربطناها مباشرة، وذكرنا الحالات التي يكون فيها المنافس اختيارًا أفضل. الأسعار والميزات تتغير؛ افحص المصدر قبل الشراء.","es":"Source disclosure reviewed on {reviewedOn}.","fr":"Source disclosure reviewed on {reviewedOn}.","hi":"Source disclosure reviewed on {reviewedOn}.","id":"Source disclosure reviewed on {reviewedOn}.","pt-BR":"Source disclosure reviewed on {reviewedOn}.","ru":"Source disclosure reviewed on {reviewedOn}.","ur":"Source disclosure reviewed on {reviewedOn}.","zh-CN":"Source disclosure reviewed on {reviewedOn}."};

export function marketing_arabicseo_comparison_disclosure(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
