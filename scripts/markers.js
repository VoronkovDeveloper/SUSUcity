let map;
DG.then(function () {
    map = DG.map("map", {
        center: [55.160119, 61.37031],
        zoom: 15.4,
        minZoom:15.5,
        maxZoom:20,
        maxBounds: [
            [55.169087, 61.33991],
            [55.151951, 61.390617],
        ],
        dragging: true,
        touchZoom: false,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: false,
        geoclicker: false,
        zoomControl: false,
        fullscreenControl: false,
    });

    let markers = {
        'Учебные корпуса': [],
        'Общежития': [],
        'Достопримечательности': [],
        'Закусочные': [],
        'Спорт': [],
        'Здоровье': [],
        'Все маркеры': []
    };


    let marker = DG.marker([55.159329, 61.362752], { icon: memorial }).addTo(map).bindPopup("Памятник знаменитому академику-ядерщику был открыт в 1986 году к 250-летию Челябинска на площади Науки около здания Южно-Уральского государственного университета. С 2014 года включен в единый реестр объектов культурного наследия Российской Федерации. <br><br>Автором проекта является Вардкес Авакян, вместе с ним работали архитекторы Б. В. Петров, В. Л. Глазырин, И. В. Талалай, инженер В. Наумов. <br><br>Памятник состоит из двух пилонов, между которыми находится статуя И. В. Курчатова на постаменте, а полусферы на пилонах символизируют расщепленный атом. Монумент символизирует превосходство человеческого разума над мощью атомной энергии.");
    markers['Достопримечательности'].push(marker);
    markers['Все маркеры'].push(marker);

    marker = DG.marker([55.160119, 61.37031], { icon: memorial }).addTo(map).bindPopup("Памятник вечному студенту — старейший памятник в Челябинске, посвященный теме образования. Он установлен на площади перед зданием Южно-Уральского государственного университета. Памятник был выполнен челябинским скульптором Вардкесом Авакяном. Скульптура изображает стоящего студента, на плечах которого небрежно накинут пиджак. Местные студенты очень уважают эту скульптуру и верят, что если потереть об нее свою зачетку, то сессия пройдет успешно.");
    markers['Достопримечательности'].push(marker);
    markers['Все маркеры'].push(marker);

    marker = DG.marker([55.159886, 61.364893], { icon: heal })
    .addTo(map)
    .bindPopup("Поликлиника №2");

markers['Здоровье'].push(marker);
markers['Все маркеры'].push(marker);

marker = DG.marker([55.159965, 61.365622], { icon: heal })
.addTo(map)
.bindPopup("Медицинский центр");

markers['Здоровье'].push(marker);
markers['Все маркеры'].push(marker);
    marker = DG.marker([55.160563, 61.362075], { icon: sport })
    .addTo(map)
    .bindPopup("Легкоатлетический комплекс им. Е. Елесиной");

markers['Спорт'].push(marker);
markers['Все маркеры'].push(marker);

marker = DG.marker([55.16062, 61.364777], { icon: sport })
.addTo(map)
.bindPopup("Хоккейная площадка");

markers['Спорт'].push(marker);
markers['Все маркеры'].push(marker);
marker = DG.marker([55.162817, 61.36435], { icon: sport })
.addTo(map)
.bindPopup("Федерация Тенниса и школа по теннису");

markers['Спорт'].push(marker);
markers['Все маркеры'].push(marker);
marker = DG.marker([55.155038, 61.360781], { icon: sport })
.addTo(map)
.bindPopup("Спортивный городок");

markers['Спорт'].push(marker);
markers['Все маркеры'].push(marker);
    marker = DG.marker([55.157731, 61.370475], { icon: tree })
        .addTo(map)
        .bindPopup("Сквер студенческих отрядов <br><br>Данный сквер является уникальным местом для города с точки зрения озеленения – это моно-парк. В свое время здесь были высажены деревья одной породы – ель колючая («голубая»).<br><br>Реконструкция сквера проходила в два этапа в 2019-2020 годах.<br><br>Было произведено устройство и ремонт 3 000 кв.м. тропиночной сети, смонтировано новое освещение, установлены скамейки, качели, велопарковки. Всего 34 единицы МАФ и 38 урн. Полностью произведено устройство 6 тысяч кв.м.газона.<br><br>Существующий фонтан классической формы со стороны проспекта Ленина был переформатирован в «сухой», что сразу же усилило привлекательность сквера.");
    markers['Достопримечательности'].push(marker);
    markers['Все маркеры'].push(marker);
  //
  marker =  DG.marker([55.160304, 61.370241], { icon: susu })
        .addTo(map)
        .bindPopup("Главный корпус ЮУрГУ <br><br> Главный корпус Южно-Уральского государственного университета — центральное здание университетского комплекса Южно-Уральского государственного университета (ЮУрГУ). Проект корпуса был создан Государственным институтом по проектированию высших учебных заведений в 1951 году. Архитектор — С. В. Истомин. Построен в «усечённом» виде в 1960 году. Достроен по первоначальному (с усовершенствованиями) проекту в 2001—2004 годах. Архитекторы (кафедра архитектуры ЮУрГУ) — М. Ю. Узунов, С. И. Савчук, С. Г. Шабиев, М. Г. Бояркина. С 2003 по 2007 год являлся самым высоким зданием Челябинска. Высота — 76 м");
  markers['Учебные корпуса'].push(marker);
  markers['Все маркеры'].push(marker);
  //
  marker =  DG.marker([55.160048, 61.37171], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 1б");
    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);

   marker =  DG.marker([55.159976, 61.369043], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 1а");
   markers['Учебные корпуса'].push(marker);
   markers['Все маркеры'].push(marker);
   marker = DG.marker([55.158847, 61.368333], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 2<br><br>");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.158014, 61.366036], { icon: lib })
        .addTo(map)
        .bindPopup("Учебный корпус 3д<br><br>Библиотека");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.158803, 61.366099], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 3a<br><br>");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.158054, 61.36522], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 3бв<br><br>");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.158053, 61.366726], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 3г<br><br>");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.157372, 61.366496], { icon: susu })
        .addTo(map)
        .bindPopup("Учебно спортивный комплекс<br><br>");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.160727, 61.366575], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 5");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.160694, 61.367448], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус Сигма");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.157849, 61.367202], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 6");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.157396, 61.367487], { icon: susu })
        .addTo(map)
        .bindPopup("Учебно спортивный комплекс");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
   marker = DG.marker([55.161201, 61.368491], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус АТ факультета");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.161601, 61.368847], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус (теплотехнический)");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.161643, 61.370283], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус АС факультета");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.161743, 61.371805], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус 1");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.161622, 61.366394], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус 4");

    markers['Учебные корпуса'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.159966, 61.367554], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №2");

    markers['Общежития'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.160518, 61.36563], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №6");

    markers['Общежития'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.160414, 61.366474], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №5");

    markers['Общежития'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.159924, 61.366285], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №7");

    markers['Общежития'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.161251, 61.367456], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №1");

    markers['Общежития'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.157027, 61.371574], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №3");

    markers['Общежития'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.156694, 61.371159], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №8");

    markers['Общежития'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.159033, 61.371449], { icon: food })
        .addTo(map)
        .bindPopup("В здании находится несколько заведений общественного питания. Включает пиццерию «Pizza Mia», столовые «Перемена» и «Бюджет».");

    markers['Закусочные'].push(marker);
    markers['Все маркеры'].push(marker);

    marker = DG.marker([55.158886, 61.36384], { icon: food })
    .addTo(map)
    .bindPopup("В здании находится несколько заведений общественного питания. Включает закусочную «Subway», супермаркет «SPAR», магазин здорового питания «Do4a», ресторан быстрого питания «Хачапурка», кофейни «Coffee Fiesta» и «Freshop».");

markers['Закусочные'].push(marker);
markers['Все маркеры'].push(marker);

marker = DG.marker([55.159124, 61.373206], { icon: food })
.addTo(map)
.bindPopup("В здании находится пиццерия «Помидор» и столовая «Пенка».");

markers['Закусочные'].push(marker);
markers['Все маркеры'].push(marker);

marker = DG.marker([55.157232, 61.364342], { icon: food })
.addTo(map)
.bindPopup("В здании находится столовая «Вкусное дело».");

markers['Закусочные'].push(marker);
markers['Все маркеры'].push(marker);

marker = DG.marker([55.156733, 61.36748], { icon: food })
.addTo(map)
.bindPopup("Кафе «Сели-съели»");

markers['Закусочные'].push(marker);
markers['Все маркеры'].push(marker);
marker = DG.marker([55.161226, 61.36643], { icon: food })
.addTo(map)
.bindPopup("В здании находится продуктовый магазин.");

markers['Закусочные'].push(marker);
markers['Все маркеры'].push(marker);

marker = DG.marker([55.155363, 61.365193], { icon: food })
.addTo(map)
.bindPopup("В здании находится ресторан «Белочка» и кофейня «Дело не в кофе».");

markers['Закусочные'].push(marker);
markers['Все маркеры'].push(marker);
marker = DG.marker([55.157057, 61.37261], { icon: food })
.addTo(map)
.bindPopup("В здании находится студенческое кафе.");

markers['Закусочные'].push(marker);
markers['Все маркеры'].push(marker);
    marker = DG.marker([55.155246, 61.370275], { icon: food })
        .addTo(map)
        .bindPopup("Торговый центр «Белый рынок» содержит множество заведений общественного питания и магазинов, включая рестораны, кафе, и бары.");

    markers['Закусочные'].push(marker);
    markers['Все маркеры'].push(marker);
    marker = DG.marker([55.157048, 61.369984], { icon: food })
        .addTo(map)
        .bindPopup("Бизнес-центр «Полёт» включает заведения авторской кухни, стейк-хаус, кофейни, и магазин здоровой еды.");

    markers['Закусочные'].push(marker);
    markers['Все маркеры'].push(marker);

    DG.rectangle(
        [[55.158894, 61.364394], [55.159804, 61.364085]],
        {color: 'Blue'})
        .bindPopup('Парковка ТК Курчатов - 70 мест')
        .bindLabel('Парковка')
        .addTo(map);

        DG.rectangle(
            [[55.159911, 61.370871], [55.159586, 61.369744]],
            {color: 'Blue'})
            .bindPopup('Парковка у Главного корпуса ЮУрГУ - 160 мест')
            .bindLabel('Парковка')
            .addTo(map);
    let buttons = document.querySelectorAll('.sidenav button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {

            for (let category in markers) {
                markers[category].forEach(marker => marker.removeFrom(map));
            }

            let selectedType = this.textContent;
            markers[selectedType].forEach(marker => marker.addTo(map));
        });
    });

});


