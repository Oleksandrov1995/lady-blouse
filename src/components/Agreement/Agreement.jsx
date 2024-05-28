import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Agreement.css'
export const Agreement = () =>{
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка до верхньої частини сторінки при кожному оновленні компоненту
    }, []);
    return(
        <div className='agreementContainer'>

<Link className="backLink" to={`/`}>
        <ArrowBackIcon fontSize="large" />
      </Link>
      <div>
        <h3 className='agreementTitles'>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ТА ЗАХИСТУ ПЕРСОНАЛЬНИХ ДАНИХ</h3>
        <p className='agreementSite'>ladyblouse-zhylet.pp.ua</p>
        <p>Згідно вимоги Закону України "Про захист персональних даних" роблячи замовлення я даю згоду на обробку моїх персональних даних з метою забезпечення реалізації цивільно-правових відносин, надання / отримання та здійснення розрахунків за придбані товари і послуги.</p>
        <h2 className='agreementTitles'>Чому ми обробляємо персональні дані?</h2>
        <p>Персональні дані - відомості чи сукупність відомостей про фізичну особу, яка ідентифікована або може бути конкретно ідентифікована. Ми можемо обробляти Ваші персональні дані для наступних цілей. При цьому одночасно можуть застосовуватися одна або кілька цілей.</p>
       <p>Отримання замовлення. Ми можемо використовувати Ваші персональні дані для отримання замовлення, яке Ви зробили для обробки Ваших запитів, або для інших цілей, які можуть існувати для досягнення кінцевої мети - задовольнити інтереси споживача, а також для запобігання і розслідування випадків шахрайства та інших зловживань.</p>
       <p>Спілкування з Вами. Ми можемо використовувати Ваші персональні дані для зв'язку з Вами, наприклад повідомити Вам про зміну наших послуг або передавати важливі повідомлення і інші подібні повідомлення, що стосуються замовлення, яке було Вами зроблено і зв'язатися з Вами з метою, пов'язаних з обслуговуванням споживача / клієнта.</p>
       <h3 className='agreementTitles'>Розголошення та передача персональних даних</h3>
       <p>Ми не продаємо, чи не передаємо і не розголошуємо особисту інформацію, яку отримуємо на нашому сайті, третім сторонам без Вашої попередньої згоди. Ми розкриваємо особисту інформацію тільки у випадках визначених чинним законодавством України.</p>
       </div>
        </div>
    )
}