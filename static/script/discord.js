function discord(app) {
    app.closeNav();
    app.search.title.style.display = 'block';
    app.search.title.textContent = 'Discord Server';
    app.search.pd_round.input.style.display = 'none';
    app.search.pd_round.sep.style.display = 'none';
    app.search.pd_round.style.display = 'none';
    app.main.discord = app.createElement(
        'div',
        [
            app.createElement('section', [
                app.createElement('p', ' (<a href="/load.html#aHR0cHM6Ly9kaXNjb3JkLmdnLzRQMkFnQlBZeHc%3D"></a>).', {
                    style: {
                        'margin-bottom': '0'
                    }
                }),
                app.createElement('p', ' <a href="/load.html#aHR0cHM6Ly9kaXNjb3JkLmdnLzRQMkFnQlBZeHc%3D">proceed</a>', {
                    style: {
                        'margin-bottom': '0'
                    }
                }),
            ], {
                class: 'data-section'
            }),

        ]);
    app.search.back.style.display = 'inline';
    app.search.back.setAttribute(
        'onclick',
        '(' + (function () {
            window.location.hash = '';
        }).toString() + ')();'
    )
};

export { discord };
