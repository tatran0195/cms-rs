import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يُرجِع المساعد أي محتوى للإضافة.","bn":"সহকারী যোগ করার জন্য কিছুই ফেরত দেননি।","de":"Der Assistent gab nichts hinzuzufügen.","en":"The assistant returned nothing to add.","es":"El asistente no respondió nada que añadir.","fr":"L'assistant n'a rien retourné à ajouter.","hi":"सहायक ने जोड़ने के लिए कुछ भी नहीं लौटाया।","id":"Asisten tidak mengembalikan apa pun untuk ditambahkan.","pt-BR":"O assistente não retornou nada a acrescentar.","ru":"Помощник ничего не ответил.","ur":"اسسٹنٹ نے شامل کرنے کے لیے کچھ واپس نہیں کیا۔","zh-CN":"助理没有回复任何补充。"};

export function editor_ai_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
