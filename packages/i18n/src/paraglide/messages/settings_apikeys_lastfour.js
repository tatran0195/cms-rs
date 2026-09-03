import { getLocale } from '../runtime.js';

const translations = {"ar":"مفتاح live ينتهي بـ {lastFour}","bn":"লাইভ কী শেষ হচ্ছে {lastFour} এ","de":"Live-Schlüssel mit der Endung {lastFour}","en":"live key ending in {lastFour}","es":"clave activa que termina en {lastFour}","fr":"clé active se terminant par {lastFour}","hi":"लाइव कुंजी {lastFour} पर समाप्त हो रही है","id":"kunci langsung yang diakhiri dengan {lastFour}","pt-BR":"chave ativa terminando em {lastFour}","ru":"живой ключ, заканчивающийся на {lastFour}","ur":"{lastFour} پر ختم ہونے والی لائیو کلید","zh-CN":"以 {lastFour} 结尾的实时密钥"};

export function settings_apikeys_lastfour(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
