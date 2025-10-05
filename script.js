document.addEventListener('DOMContentLoaded', () => {

    // ==================================================================
    //  هنا المكان الوحيد الذي تعدل عليه: أضف صور وروابط الألعاب
    // ==================================================================
    const games = [
        {
            id: 'game-1',
            title: 'Bowmasters',
            thumbnail: 'https://i.ytimg.com/vi/Ea8s9vdeV54/maxresdefault.jpg',
            description: 'إذا كنت من محبي ألعاب الرماية المثيرة، وخاصةً ألعاب الرماية بالقوس، انضم إلى المعارك الممتعة والفريدة في لعبة الأكشن "Bowmasters"! ستجد هنا أنواعًا مختلفة من السهام، وطوّر مهاراتك في الرماية في مبارزات غير تقليدية، وستتمكن من المنافسة على المركز الأول في لعبة رماة محترفين متعددة اللاعبين. أطلق النار من قوسك المفضل وكن راميًا أسطوريًا!',
            category: 'action',
            gameUrl: 'https://1706126063170284943.playables.usercontent.goog/v/assets/index.html'
        },
        {
            id: 'game-2',
            title: 'Brain Out',
            thumbnail: 'https://play-lh.googleusercontent.com/cIZT8s6NiS_Ez_t0EbD_zoMgvdUsUIP8dgArn4iWcWynE4HYSsYdG7xJTuwkl-vZ3lE',
            description: 'ا هو معدل مستوى ذكائك؟ فجر عقلك مع Brain Out واظهر لأصدقائك أنك لست غبياً بالمرة"Brain Out" هي لعبة ألغاز خادعة مشوقة مجانية مع سلسلة من محفزات الدماغ المثيرة والأحاجي المختلفة لاختبار وتحدي عقلك. فهي تقيم قدرتك على التفكير المنطقي، ردود الفعل، الدقة، الذاكرة و الإبداع. لا تجيب على السؤال بالطريقة العادية إذا كنت لا تريد أن يتم خداعك. فالحل الذي يقلب موازين التفكير الطبيعي هو أكثر الأشياء تشويقاً في ألعاب المعلومات العامة. نحن نقدم لكم تجربة لعب مختلفة مع التفكير الإبداعي والحل اللامعقول.',
            category: 'brain',
            gameUrl: 'https://3727783578915904364.playables.usercontent.goog/v/assets/index.html'
        },
        {
            id: 'game-3',
            title: 'Super Goal ',
            thumbnail: 'https://i.ytimg.com/vi/dLHMYtcY3Co/maxresdefault.jpg',
            description: 'ارسم خطًا لركل الكرة. أنت تتحكم تمامًا في اتجاهات الكرة ومساراتها. استخدم حكمتك لحل الألغاز وتسجيل أهداف رائعة!إذا كنت ترغب في لعب لعبة كرة قدم مصغرة، فهذه اللعبة الرائعة ثلاثية الأبعاد 2024 هي خيارك الأمثل. إنها لعبة بدون اتصال بالإنترنت. إنها بسيطة ولكنها مليئة بالتحديات، يمكنك لعبها في أي وقت وفي أي مكان.',
            category: 'stickman',
            gameUrl: 'https://7321074945596286303.playables.usercontent.goog/v/assets/index.html'
        },
        {
            id: 'game-4',
            title: 'Capture The Flag',
            thumbnail: 'https://plays.org/screenshots/craig-of-the-creek-capture-the-flag.png',
            description: 'هل أنت مستعد لاستعادة علمك الذي سرقه الفريق المنافس في لعبة "كريج أوف ذا كريك: الاستيلاء على العلم"؟ راقب المكان، حيث يتمركز أعداؤك، والعقبات المختلفة على طول الطريق، واستعد للعبور من جانب إلى آخر دون أي ضرر.اركض دون أن تنظر إلى الوراء، ووصل بأمان إلى قاعدة العدو، واستعيد علمك الأحمر بسرعة، بينما تسحق أعداءك بمدافع المياه. بمجرد حصولك على أغلى ما تملك، عد بسرعة إلى قاعدتك لتحقيق النصر النهائي، واستمتع بوقتك!',
            category: 'action',
            gameUrl: 'https://www.2dans.com/games/capturetheflag/'
        },
        {
            id: 'game-5',
            title: 'Guess Their Answer',
            thumbnail: 'https://m.media-amazon.com/images/I/81E8c9Z1SoL.png',
            description: 'خمن إجابتك هي لعبة أسئلة بسيطة، هدفك فيها التفوق على خصومك من خلال توقع الإجابات الأكثر شيوعًا. أجب عن ثلاثة أسئلة محيرة في كل جولة، تتناول مواضيع متنوعة، واربح مكافآت، وافتح سمات فريدة لتخصيص تجربتك. مع اختبارات يومية ومباريات تنافسية، كل لعبة فرصة لإثبات معرفتك بالمعلومات العامة.',
            category: 'brain',
            gameUrl: 'https://5154156911157854524.playables.usercontent.goog/v/assets/index.html'
        },
        {
            id: 'game-6',
            title: 'Monster Seek Stickman Hide',
            thumbnail: 'https://m.media-amazon.com/images/I/81lAWWH5RfL.png',
            description: 'انطلق في رحلة غامرة مع "Monster Seek: Stickman Hide"، لعبة شيقة تُختبر فيها خبرتك في الاختباء إلى أقصى حد. تنقل عبر بيئات ديناميكية، وتفوق على أعداء وحوش، وكن مختبئًا مثاليًا في لعبة الغميضة الآسرة هذه.',
            category: 'stickman',
            gameUrl: 'https://8328750458724478102.playables.usercontent.goog/v/assets/index.html'
        },
    ];

    // ==================================================================
    //  لا تقم بتعديل أي شيء أسفل هذا الخط
    // ==================================================================

    const gameGallery = document.querySelector('.game-gallery');
    const gamesSection = document.getElementById('games');
    const gameViewSection = document.getElementById('game-view');
    const backButton = document.getElementById('back-button');
    const searchInput = document.getElementById('searchInput');
    const categoryFilters = document.getElementById('category-filters');
    const gameThumbnailContainer = document.getElementById('game-thumbnail-container');
    const gameThumbnailImage = document.getElementById('game-thumbnail-image');
    const gameTitleElement = document.getElementById('game-title');
    const gameDescriptionElement = document.getElementById('game-description');

    function displayGames(gamesToDisplay) {
        gameGallery.innerHTML = '';
        gamesToDisplay.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `<img src="${game.thumbnail}" alt="${game.title}" loading="lazy"><div class="card-content"><h3>${game.title}</h3></div>`;
            card.addEventListener('click', () => showGamePage(game));
            gameGallery.appendChild(card);
        });
    }

    function showGamePage(game) {
        gamesSection.style.display = 'none';
        gameViewSection.classList.remove('hidden');
        gameTitleElement.textContent = game.title;
        gameDescriptionElement.textContent = game.description;
        gameThumbnailImage.src = game.thumbnail;
        gameThumbnailImage.alt = game.title;
        gameThumbnailContainer.onclick = () => {
            window.open(game.gameUrl, '_blank');
        };
    }
    
    backButton.addEventListener('click', () => {
        gamesSection.style.display = 'block';
        gameViewSection.classList.add('hidden');
    });

    function filterGames() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = categoryFilters.querySelector('.active').dataset.category;
        const filtered = games.filter(game => {
            const matchesCategory = activeCategory === 'all' || game.category === activeCategory;
            const matchesSearch = game.title.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });
        displayGames(filtered);
    }

    searchInput.addEventListener('keyup', filterGames);

    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            categoryFilters.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            filterGames();
        }
    });

    filterGames();
});