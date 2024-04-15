let map;
DG.then(function () {
    map = DG.map("map", {
        center: [55.160119, 61.37031],
        zoom: 15.5,
        maxBounds: [
            [55.169087, 61.33991],
            [55.151951, 61.390617],
        ],
        dragging: true,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        geoclicker: true,
        zoomControl: false,
        fullscreenControl: false,
    });

    let markers = {
        'Учебные корпуса': [],
        'Общежития': [],
        'Достопримичательности': [],
        'Закусочные': []
    };


    let marker = DG.marker([55.158426, 61.362974], { icon: memorial }).addTo(map).bindPopup("Памятник знаменитому академику-ядерщику был открыт в 1986 году к 250-летию Челябинска на площади Науки около здания Южно-Уральского государственного университета. С 2014 года включен в единый реестр объектов культурного наследия Российской Федерации. <br><br>Автором проекта является Вардкес Авакян, вместе с ним работали архитекторы Б. В. Петров, В. Л. Глазырин, И. В. Талалай, инженер В. Наумов. <br><br>Памятник состоит из двух пилонов, между которыми находится статуя И. В. Курчатова на постаменте, а полусферы на пилонах символизируют расщепленный атом. Монумент символизирует превосходство человеческого разума над мощью атомной энергии.");
    markers['Достопримичательности'].push(marker);

    marker = DG.marker([55.157731, 61.370475], { icon: tree })
        .addTo(map)
        .bindPopup("Сквер студенческих отрядов <br><br>Данный сквер является уникальным местом для города с точки зрения озеленения – это моно-парк. В свое время здесь были высажены деревья одной породы – ель колючая («голубая»).<br><br>Реконструкция сквера проходила в два этапа в 2019-2020 годах.<br><br>Было произведено устройство и ремонт 3 000 кв.м. тропиночной сети, смонтировано новое освещение, установлены скамейки, качели, велопарковки. Всего 34 единицы МАФ и 38 урн. Полностью произведено устройство 6 тысяч кв.м.газона.<br><br>Существующий фонтан классической формы со стороны проспекта Ленина был переформатирован в «сухой», что сразу же усилило привлекательность сквера.");
    markers['Достопримичательности'].push(marker);
  //
  marker =  DG.marker([55.159595, 61.37034], { icon: susu })
        .addTo(map)
        .bindPopup("Главный корпус ЮУрГУ <br><br> Главный корпус Южно-Уральского государственного университета — центральное здание университетского комплекса Южно-Уральского государственного университета (ЮУрГУ). Проект корпуса был создан Государственным институтом по проектированию высших учебных заведений в 1951 году. Архитектор — С. В. Истомин. Построен в «усечённом» виде в 1960 году. Достроен по первоначальному (с усовершенствованиями) проекту в 2001—2004 годах. Архитекторы (кафедра архитектуры ЮУрГУ) — М. Ю. Узунов, С. И. Савчук, С. Г. Шабиев, М. Г. Бояркина. С 2003 по 2007 год являлся самым высоким зданием Челябинска. Высота — 76 м");
  markers['Учебные корпуса'].push(marker);
  //
  marker =  DG.marker([55.159261, 61.371711], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 1б");
    markers['Учебные корпуса'].push(marker);

   marker =  DG.marker([55.159262, 61.368999], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 1а");
   markers['Учебные корпуса'].push(marker);

   marker = DG.marker([55.158161, 61.368934], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 2<br><br>");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.157396, 61.366025], { icon: lib })
        .addTo(map)
        .bindPopup("Учебный корпус 3д<br><br>Библиотека");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.158021, 61.365883], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 3a<br><br>");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.157843, 61.365234], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 3бв<br><br>");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.157622, 61.366775], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 3г<br><br>");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.156945, 61.366435], { icon: susu })
        .addTo(map)
        .bindPopup("Учебно спортивный комплекс<br><br>");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.160032, 61.36706], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 5");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.159887, 61.367629], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус Сигма");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.157034, 61.367982], { icon: susu })
        .addTo(map)
        .bindPopup("Учебный корпус 6");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.156809, 61.367967], { icon: susu })
        .addTo(map)
        .bindPopup("Учебно спортивный комплекс");

    markers['Учебные корпуса'].push(marker);

   marker = DG.marker([55.160595, 61.368397], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус АТ факультета");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.160793, 61.368884], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус (теплотехнический)");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.160868, 61.370503], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус АС факультета");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.160912, 61.371835], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус 1");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.160851, 61.366447], { icon: susu })
        .addTo(map)
        .bindPopup("Лабораторный корпус 4");

    markers['Учебные корпуса'].push(marker);

    marker = DG.marker([55.160674, 61.367544], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №1");

    markers['Общежития'].push(marker);

    marker = DG.marker([55.16019, 61.365601], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №6");

    markers['Общежития'].push(marker);

    marker = DG.marker([55.160414, 61.366474], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №5");

    markers['Общежития'].push(marker);

    marker = DG.marker([55.159159, 61.366631], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №7");

    markers['Общежития'].push(marker);

    marker = DG.marker([55.159176, 61.36762], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №2");

    markers['Общежития'].push(marker);

    marker = DG.marker([55.156322, 61.371845], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №3");

    markers['Общежития'].push(marker);

    marker = DG.marker([55.156154, 61.371101], { icon: home })
        .addTo(map)
        .bindPopup("Общежитие №8");

    markers['Общежития'].push(marker);

    marker = DG.marker([55.158323, 61.371503], { icon: food })
        .addTo(map)
        .bindPopup("В здании находится несколько заведений общественного питания. Включает пиццерию «Pizza Mia», столовые «Перемена» и «Бюджет».");

    markers['Закусочные'].push(marker);

    marker = DG.marker([55.15488, 61.370294], { icon: food })
        .addTo(map)
        .bindPopup("Торговый центр «Белый рынок» содержит множество заведений общественного питания и магазинов, включая рестораны, кафе, и бары.");

    markers['Закусочные'].push(marker);

    marker = DG.marker([55.156258, 61.369835], { icon: food })
        .addTo(map)
        .bindPopup("Бизнес-центр «Полёт» включает заведения авторской кухни, стейк-хаус, кофейни, и магазин здоровой еды.");

    markers['Закусочные'].push(marker);

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


