import './OurBenefits.css'

export const OurBenefits = () =>{
    return(
        <section className='ourBenefits'>
            <h2>Переваги нашого магазину</h2>
            <ul className='ourBenefits-list'>
                <li className='ourBenefits-item '>
                    <img className='ourBenefits-img' src={require('../../Images/benefits1.png')} alt="Іконка доставки" />
                    <h5 className='ourBenefits-title'>ШВИДКА ДОСТАВКА</h5>
                    <p className='ourBenefits-text'>Доставляємо Новою Поштою та Укрпоштою по всій Україні від 2-3 днів із наявності на складі. Доставка та комісія з тарифів пошти!</p>
                </li>
                <li className='ourBenefits-item'>
                    <img className='ourBenefits-img' src={require('../../Images/benefits2.png')} alt="Іконка оплати" />
                    <h5 className='ourBenefits-title'>БЕЗПЕЧНА ОПЛАТА</h5>
                    <p className='ourBenefits-text'>Можливий накладний платіж без передплати або повна оплата на карту з наданням фіксального чеку на товар (фіксальний чек надішлемо повідомленням)</p>
                </li>
                <li className='ourBenefits-item '>
                    <img className='ourBenefits-img' src={require('../../Images/benefits3.png')} alt="Іконка запитань" />
                    <h5 className='ourBenefits-title'>УВАГА ДО КЛІЄНТІВ</h5>
                    <p className='ourBenefits-text'>Зв'яжимося в месенджері або зателефонуємо та допоможемо переконатися в актуальності розміру або відповімо на додаткові запитання чи запропонуємо альтернативу</p>
                </li>
                <li className='ourBenefits-item'>
                    <img className='ourBenefits-img' src={require('../../Images/benefits4.png')} alt="Іконка якості" />
                    <h5 className='ourBenefits-title'>ГАРАНТІЇ</h5>
                    <p className='ourBenefits-text'>Ми завжди перевіряємо товар перед відправкою та гарантуємо 100% якості. Повернення протягом 14 днів. Обмін розміру за умови оплати доставки покупцем.</p>
                </li>
            </ul>
        </section>
    )
}