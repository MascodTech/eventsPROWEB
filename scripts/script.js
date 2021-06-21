try {
    const swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 3,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                spaceBetween: 25,
            },
            1200: {
                spaceBetween: 30,
            },
            1400: {
                spaceBetween: 40,
            },
        },
    });
} catch (error) {}

const events = [
    {
        eventName: "Мастер-класс “Трудоустройство”",
        imagePath: "images/event-0.png",
        fullSizeImage: "images/event-0.png",
        shortDescr: "Направь интересы и время своего ребенка в полезное русло",
        fullDescr: `Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылкудля подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.
        <br><br>
        Если конференция закрытая, необходимо будет ввести пароль,который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.`,
    },
    {
        eventName: "Запуск курса PRO DESIGN",
        imagePath: "images/event-1.png",
        fullSizeImage: "images/event-1.png",
        shortDescr: "Направь интересы и время своего ребенка в полезное русло",
        fullDescr: `Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылкудля подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.
        <br><br>
        Если конференция закрытая, необходимо будет ввести пароль,который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.`,
    },
    {
        eventName: "Программирование на PYTHON",
        imagePath: "images/event-2.png",
        fullSizeImage: "images/event-2.png",
        shortDescr: "Направь интересы и время своего ребенка в полезное русло",
        fullDescr: `Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылкудля подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.
        <br><br>
        Если конференция закрытая, необходимо будет ввести пароль,который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.`,
    },
    {
        eventName: "Создаем бизнес страницу в Instagram",
        imagePath: "images/event-3.png",
        fullSizeImage: "images/event-3.png",
        shortDescr: "Направь интересы и время своего ребенка в полезное русло",
        fullDescr: `Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылкудля подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.
        <br><br>
        Если конференция закрытая, необходимо будет ввести пароль,который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.`,
    },
    {
        eventName: "Запуск курса SCRATCH",
        imagePath: "images/event-4.png",
        fullSizeImage: "images/event-4.png",
        shortDescr: "Направь интересы и время своего ребенка в полезное русло",
        fullDescr: `Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылкудля подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.
        <br><br>
        Если конференция закрытая, необходимо будет ввести пароль,который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.`,
    },
    {
        eventName: "Мастер-класс “Трудоустройство”",
        imagePath: "images/event-5.png",
        fullSizeImage: "images/event-5.png",
        shortDescr: "Направь интересы и время своего ребенка в полезное русло",
        fullDescr: `Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылкудля подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.
        <br><br>
        Если конференция закрытая, необходимо будет ввести пароль,который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.Если конференция закрытая, необходимо будет ввести пароль, который вам отправят в Telegram группу или личным сообщением.
        <br><br>
        Организатор конференции отправит вам ссылку для подключения к онлайн-уроку. После перехода по ссылке вы должны ввести свое имя и ожидать подтверждения от вашего преподавателя.`,
    },
];

try {
    const eventsRow = document.querySelector(".events__row");
    const singleEvent = document.querySelector(".events__single");
    const singleMore = document.querySelector(".single__more");
    const eventTitle = document.querySelector(".events__title");
    const eventSubtitle = document.querySelector(".events__subtitle");
    // const swiperWrapper = document.querySelector(".swiper-wrapper");

    function changeLinks() {
        if (location.hash === "") {
            eventsRow.innerHTML = "";
        } else {
            singleMore.innerHTML = "";
        }
        events.forEach((event, index) => {
            if (location.hash === "") {
                eventsRow.innerHTML += `<a class="events__link" href="#event-${index}">
                <img class="events__image" src="../${event.imagePath}" alt="">
                <h3 class="events__link-title">${event.eventName}</h3>
                <p class="events__link-subtitle">${event.shortDescr}</p>
                </a>`;
                singleMore.innerHTML = "";
            } else {
                eventsRow.innerHTML = "";
                if (location.hash !== `#event-${index}`) {
                    singleMore.innerHTML += `<a class="events__link" href="#event-${index}">
                    <img class="events__image" src="../${event.imagePath}" alt="">
                    <h3 class="events__link-title">${event.eventName}</h3>
                    <p class="events__link-subtitle">${event.shortDescr}</p>
                    </a>`;
                }
            }
        });

        const eventsLink = document.querySelectorAll(".events__link");
        eventsLink.forEach((item, index) => {
            if (location.hash === `#event-${index}`) {
                setSingleData(index);
                setEventHeight();
            }
            item.addEventListener("click", () => {
                setSingleData(index);
                setEventHeight();
            });
        });
    }

    changeLinks();

    window.addEventListener("hashchange", () => {
        if (location.hash === "") {
            eventsRow.style.display = "grid";
            singleEvent.style.display = "none";
            eventTitle.style.display = "block";
            eventSubtitle.style.display = "block";
        }
        changeLinks();
        setEventHeight();
        window.scrollTo(0, 0);
    });

    const singleLink = document.querySelector(".single__link");

    singleLink.addEventListener("click", (e) => {
        e.preventDefault();
        location.hash = "";
    });

    function setSingleData(index) {
        location.hash = `#event-${index}`;
        if (location.hash === `#event-${index}`) {
            eventsRow.style.display = "none";
            singleEvent.style.display = "grid";
            eventTitle.style.display = "none";
            eventSubtitle.style.display = "none";
        }
        const singleImage = document.querySelector(".single__image");
        singleImage.setAttribute("src", `../${events[index].fullSizeImage}`);

        const singleTitle = document.querySelector(".single__title");
        singleTitle.textContent = events[index].eventName;

        const singleDescr = document.querySelector(".single__descr");
        singleDescr.innerHTML = events[index].fullDescr;
    }

    function setEventHeight() {
        if (screen.width > 992) {
            const currentEvent = document.querySelector(".single__current");
            const moreEvents = document.querySelector(".single__more");
            const currentEventHeight = currentEvent.clientHeight;
            moreEvents.style.height = currentEventHeight + "px";
        }
    }
} catch (error) {}
