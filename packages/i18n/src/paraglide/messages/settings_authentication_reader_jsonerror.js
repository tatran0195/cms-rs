import { getLocale } from '../runtime.js';

const translations = {"ar":"يجب أن تكون JWKS وخريطة المطالبات بصيغة JSON صالحة.","bn":"JWKS এবং দাবি ম্যাপিং বৈধ হতে হবে JSON।","de":"JWKS und Anspruchszuordnung müssen gültig sein JSON.","en":"JWKS and claim mapping must be valid JSON.","es":"JWKS y el mapeo de reclamos deben ser válidos JSON.","fr":"JWKS et le mappage des revendications doivent être valides JSON.","hi":"JWKS और दावा मैपिंग वैध JSON होनी चाहिए।","id":"JWKS dan pemetaan klaim harus valid JSON.","pt-BR":"JWKS e mapeamento de declaração devem ser JSON válidos.","ru":"JWKS и сопоставление утверждений должны быть действительными JSON.","ur":"JWKS اور کلیم میپنگ کا درست ہونا ضروری ہے JSON۔","zh-CN":"JWKS 和声明映射必须有效 JSON。"};

export function settings_authentication_reader_jsonerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
