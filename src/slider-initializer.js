window.addEventListener('load', function () {
    if (!Glider) return;

    const sliders = document.querySelectorAll('.glider');

    for (const slider of sliders) {
        const autoOrValue = (v) => v !== 'auto' ? Number(v) : v;
        const parseOptions = (v) => {
            try {
                return JSON.parse(v);
            } catch (e) {
                return undefined;
            }
        }
        const { slidesToShow, slidesToScroll, itemWidth, exactWidth, duration, responsive } = slider.dataset;

        new Glider(slider, {
            slidesToShow: autoOrValue(slidesToShow) ?? 1,
            slidesToScroll: autoOrValue(slidesToScroll) ?? 1,
            duration: Number(duration) ?? 0.5,
            responsive: parseOptions(responsive),
            draggable: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },

            itemWidth,
            exactWidth,
        });
    }
})
