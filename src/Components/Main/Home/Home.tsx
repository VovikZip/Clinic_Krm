// import Button from '@/Components/UI/Button';
// import hero from '@/assets/images/hero.png';
// import DescNums from './DescNums';
// import SectionWrapper from '../SectionWrapper';

// const Home = () => {
//   return (
//     <SectionWrapper id="головна">
//       <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-10 text-center md:text-left">
//         <div className=" tracking-wider md:tracking-normal max-w-xs lg:max-w-xl ">
//           {/* <h1 className="lg:text-7xl text-4xl font-bold">
//             Your Health Is Our Top Priority
//           </h1> */}
//           <h1 className="lg:text-7xl text-34xl font-bold">
//             Краматорський центр 
//           </h1>
//           <h1 className="lg:text-7xl text-4xl font-bold">
//             Слухової Реабілітації
//           </h1>
//           {/* <p className="text-lg md:text-base lg:text-xl my-10">
//             Securely share your comprehensive medical history with doctors and
//             loved ones, for better communication and care.
//           </p> */}
//           <p className="text-lg md:text-base lg:text-xl my-10">
//             Ми спеціалізуємося на діагностиці та лікуванні захворювань вуха, горла та носа у дорослих і дітей. Наша команда — це досвідчені лікарі, сучасне обладнання та індивідуальний підхід до кожного пацієнта. Ми поєднуємо доказову медицину з людяністю та турботою.
//           </p>
//           <Button>Записатись на прийом</Button>
//         </div>
//         <div className="max-w-xs md:max-w-none">
//           <img src={hero} alt="hero" />
//         </div>
//       </div>
//       <DescNums />
//     </SectionWrapper>
//   );
// };

// export default Home;

// import Button from '@/Components/UI/Button';
// import hero from '@/assets/images/hero.png';
// import DescNums from './DescNums';
// import SectionWrapper from '../SectionWrapper';
// import { useState } from 'react';

// const Home = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const form = e.target as HTMLFormElement;
//     const surname = (form.elements.namedItem('surname') as HTMLInputElement).value;
//     const name = (form.elements.namedItem('name') as HTMLInputElement).value;
//     const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
//     const reason = (form.elements.namedItem('reason') as HTMLSelectElement).value;

//     const botToken = '7858955091:AAGXPoqO244Yw04nMkym0HITME917QcsaQ4'; // Замініть на ваш токен бота
//     const chatId = '6542824472'; // Замініть на chat_id конкретної людини, отриманий за інструкцією
//     const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

//     const message = `
// Нова заявка:
// Прізвище: ${surname}
// Ім'я: ${name}
// Номер телефону: ${phone}
// Причина звернення: ${reason === 'consultation' ? 'Консультація' : 'Купівля слухового апарату'}
//     `.trim();

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           chat_id: chatId,
//           text: message,
//         }),
//       });

//       if (response.ok) {
//         // alert("Дані відправлено! Ми вам зателефонуємо.");
//         setIsModalOpen(false);
//       } else {
//         alert("Помилка відправки даних. Спробуйте ще раз.");
//       }
//     } catch (error) {
//       alert("Помилка при відправці. Перевірте підключення.");
//     }
//   };

//   return (
//     <SectionWrapper id="головна">
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
//         <div className="tracking-wider md:tracking-normal max-w-xs lg:max-w-xl">
//           <h1 className="lg:text-7xl text-34xl font-bold">
//             Краматорський центр
//           </h1>
//           <h1 className="lg:text-7xl text-4xl font-bold">
//             Слухової Реабілітації
//           </h1>
//           <p className="text-lg md:text-base lg:text-xl my-10">
//             Ми спеціалізуємося на діагностиці та лікуванні захворювань вуха, горла та носа у дорослих і дітей. Наша команда — це досвідчені лікарі, сучасне обладнання та індивідуальний підхід до кожного пацієнта. Ми поєднуємо доказову медицину з людяністю та турботою.
//           </p>
//           <Button onClick={handleOpenModal} className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
//             Записатись на прийом
//           </Button>
//           <p className="mt-4 text-blue-600 text-lg font-medium">
//             Або звертайтесь за телефоном: +380 99 123 4567
//           </p>
//         </div>
//         <div className="max-w-xs md:max-w-none">
//           <img src={hero} alt="hero" />
//         </div>
//       </div>
//       <DescNums />
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-2xl font-bold mb-4">Заповніть свої дані і ми вам зателефонуємо</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2" htmlFor="surname">
//                   Прізвище *
//                 </label>
//                 <input
//                   type="text"
//                   id="surname"
//                   name="surname"
//                   className="w-full p-2 border rounded"
//                   placeholder="Введіть ваше прізвище"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2" htmlFor="name">
//                   Ім'я *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full p-2 border rounded"
//                   placeholder="Введіть ваше ім'я"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2" htmlFor="reason">
//                   Причина звернення *
//                 </label>
//                 <select
//                   id="reason"
//                   name="reason"
//                   className="w-full p-2 border rounded"
//                   required
//                 >
//                   <option value="" disabled selected>Оберіть причину</option>
//                   <option value="consultation">Консультація</option>
//                   <option value="hearing-aid">Купівля слухового апарату</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2" htmlFor="phone">
//                   Номер телефону *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   className="w-full p-2 border rounded"
//                   placeholder="Введіть ваш телефон"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end gap-4">
//                 <Button onClick={handleCloseModal}>Закрити</Button>
//                 <Button type="submit">Відправити</Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </SectionWrapper>
//   );
// };

// export default Home;

import Button from '@/Components/UI/Button';
import hero from '@/assets/images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import { useState } from 'react';

type TelegramResponseOk = {
  ok: true;
  result: unknown;           // нам не критично, головне ok
};

type TelegramResponseErr = {
  ok: false;
  description?: string;
};

type TelegramResponse = TelegramResponseOk | TelegramResponseErr;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const surname = (form.elements.namedItem('surname') as HTMLInputElement).value.trim();
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const reason = (form.elements.namedItem('reason') as HTMLSelectElement).value;

    // ⚠️ Для продакшена збережи токен у бекенді/serverless, не у фронті.
    const botToken = '7858955091:AAGXPoqO244Yw04nMkym0HITME917QcsaQ4';
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const recipients: Array<{ id: number; label: string }> = [
      { id: 403995610, label: 'Vovchik55' },
      { id: 6542824472, label: 'Влад' },
      { id: 6103176404, label: 'ЛОР-Сурдолог' },
    ];

    const reasonText = reason === 'consultation' ? 'Консультація' : 'Купівля слухового апарату';
    const text =
      `Нова заявка:\n` +
      `Прізвище: ${surname}\n` +
      `Ім'я: ${name}\n` +
      `Номер телефону: ${phone}\n` +
      `Причина звернення: ${reasonText}`;

    // Безпечний парсер JSON (повертає null при помилці)
    const parseJsonSafe = async <T,>(resp: Response): Promise<T | null> => {
      try {
        return (await resp.json()) as T;
      } catch (err) {
        console.warn('[Telegram] JSON parse error:', err);
        return null;
      }
    };

    const sendTo = async (r: { id: number; label: string }): Promise<boolean> => {
      try {
        const resp = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: r.id, text, disable_web_page_preview: true }),
        });

        const data = await parseJsonSafe<TelegramResponse>(resp);

        // Якщо JSON не розпарсили — вважаємо, що не ок
        const ok = Boolean(resp.ok && data?.ok);
        const desc = !ok && data && 'description' in data && data.description
          ? ` — ${data.description}`
          : '';

        console.log(`[Telegram] → ${r.label} (${r.id}): ${ok ? 'OK' : 'FAIL'}${desc}`);
        return ok;
      } catch (err) {
        console.error(`[Telegram] → ${r.label} (${r.id}) request error:`, err);
        return false;
      }
    };

    try {
      const results = await Promise.all(recipients.map(sendTo));
      const summary = recipients.map((r, i) => `${r.label}: ${results[i] ? 'OK' : 'FAIL'}`).join(' | ');
      console.log('Delivery summary:', summary);

      if (results.every(Boolean)) {
        form.reset();
        setIsModalOpen(false);
      } else {
        alert('Не всім одержувачам надіслано. Перевір консоль (View → Developer Tools).');
      }
    } catch {
      alert('Помилка при відправці. Перевірте підключення.');
    }
  };

  return (
    <SectionWrapper id="головна">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="tracking-wider md:tracking-normal max-w-xs lg:max-w-xl">
          <h1 className="lg:text-7xl text-34xl font-bold">Краматорський центр</h1>
          <h1 className="lg:text-7xl text-4xl font-bold">Слухової Реабілітації</h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            Ми спеціалізуємося на діагностиці та лікуванні захворювань вуха, горла та носа у дорослих і дітей.
            Наша команда — це досвідчені лікарі, сучасне обладнання та індивідуальний підхід до кожного пацієнта.
            Ми поєднуємо доказову медицину з людяністю та турботою.
          </p>
          <Button onClick={handleOpenModal} className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Записатись на прийом
          </Button>
          <p className="mt-4 text-blue-600 text-lg font-medium">
            Або звертайтесь за телефоном: +380 99 123 4567
          </p>
        </div>
        <div className="max-w-xs md:max-w-none">
          <img src={hero} alt="hero" />
        </div>
      </div>

      <DescNums />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Заповніть свої дані і ми вам зателефонуємо</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="surname">Прізвище *</label>
                <input id="surname" name="surname" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Ім'я *</label>
                <input id="name" name="name" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="reason">Причина звернення *</label>
                <select id="reason" name="reason" className="w-full p-2 border rounded" required defaultValue="">
                  <option value="" disabled>Оберіть причину</option>
                  <option value="consultation">Консультація</option>
                  <option value="hearing-aid">Купівля слухового апарату</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Номер телефону *</label>
                <input id="phone" name="phone" className="w-full p-2 border rounded" required />
              </div>
              <div className="flex justify-end gap-4">
                <Button onClick={handleCloseModal}>Закрити</Button>
                <Button type="submit">Відправити</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Home;
