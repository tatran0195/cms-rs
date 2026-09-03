import { getLocale } from '../runtime.js';

const translations = {"ar":"لا جديد لديك — سيظهر أي نشاط جديد هنا.","bn":"আপনি সব ধরা পড়েছেন — নতুন কার্যকলাপ এখানে প্রদর্শিত হবে.","de":"Sie sind alle auf dem Laufenden – hier werden neue Aktivitäten angezeigt.","en":"You're all caught up — new activity will show up here.","es":"Ya está todo al día: aquí aparecerá nueva actividad.","fr":"Vous êtes tous rattrapés : une nouvelle activité apparaîtra ici.","hi":"आप सभी इसमें शामिल हो गए हैं - नई गतिविधि यहां दिखाई देगी।","id":"Anda sudah selesai — aktivitas baru akan muncul di sini.","pt-BR":"Você está atualizado – novas atividades aparecerão aqui.","ru":"Вы все в курсе — здесь появятся новые действия.","ur":"آپ سب کو پکڑ لیا گیا ہے — نئی سرگرمی یہاں نظر آئے گی۔","zh-CN":"你们都已经忙完了——新的活动将出现在这里。"};

export function notifications_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
