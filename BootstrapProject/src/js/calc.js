   <div class="cost_calculation py-5 mb-5" id="calculation">
            <div class="container py-5 col-10 d-flex flex-column ">  
                <h2>РАСЧЕТ СТОИМОСТИ</h2>            

                <h3>ТИП САЙТА</h3>
                <select name="site_type" id="site_type">
                    <option valCost="?" valTime="?" selected>Выберите из списка...</option>
                    <option valCost="2000" valDay="1">Сайт-визитка</option>
                    <option valCost="6000" valDay="2">Корпоративный</option>
                    <option valCost="3000" valDay="2">Личный</option>                    
                    <option valCost="5000" valDay="3">Доска объявлений</option>
                </select>

                <h3>ДИЗАЙН</h3>
                <select name="design" id="design">
                    <option valCost="?"   valK1="?" selected>Выберите из списка...</option>
                    <option valCost="2500" valK1="5">Пушка-Бомба</option>
                    <option valCost="2000" valK1="4">Радует глаз</option>
                    <option valCost="1300" valK1="3">Ну...Пойдет</option>
                    <option valCost="200" valK1="1">Могло быть и хуже</option>
                </select>

                <h3>АДАПТИВНОСТЬ</h3>
                <select name="Adaptability" id="Adaptability">
                    <option valCost="?" valK2="?" selected>Выберите из списка...</option>
                    <option valCost="1300" valK2="5">Адаптивен под абсолютно любые устройства</option>
                    <option valCost="600" valK2="4">Будет шикарно выглядеть на любом компьютере</option>
                    <option valCost="100" valK2="1">Ориентир на строго конкретные параметры</option>
                </select>

                <div class="calculation">
                    <div class="row">
                        <div class="col-6"><p>Сроки</p></div>
                        <div class="col-6" id="dateItog">0</div>
                    </div>
                    
                    <div class="row">
                        <div class="col-6"><p>Стоимость</p></div>
                        <div class="col-6" id="sumItog">0</div>
                    </div>
                </div>
                
                <!--<input type="button" value="Оставить заявку">-->
            </div> 
        </div>