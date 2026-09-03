import { getLocale } from '../runtime.js';

const translations = {"ar":"اربط Nibleaf بالأدوات التي يستخدمها فريقك بالفعل.","bn":"আপনার টিম ইতিমধ্যে যে সরঞ্জামগুলি ব্যবহার করে তার সাথে Nibleaf সংযুক্ত করুন ।","de":"Verbinden Sie Nibleaf mit den Tools, die Ihr Team bereits verwendet.","en":"Connect Nibleaf to the tools your team already uses.","es":"Conecta Nibleaf a las herramientas que tu equipo ya utiliza.","fr":"Connectez Nibleaf aux outils que votre équipe utilise déjà.","hi":"Nibleaf को उन टूल से कनेक्ट करें जिनका आपकी टीम पहले से उपयोग करती है।","id":"Hubungkan Nibleaf ke alat yang sudah digunakan timmu.","pt-BR":"Conecte Nibleaf às ferramentas que sua equipe já usa.","ru":"Подключите Nibleaf к инструментам, которые уже использует ваша команда.","ur":"Nibleaf کو ان ٹولز سے مربوط کریں جو آپ کی ٹیم پہلے ہی استعمال کر رہی ہے ۔","zh-CN":"将 Nibleaf 连接到团队已在使用的工具。"};

export function settings_integrations_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
