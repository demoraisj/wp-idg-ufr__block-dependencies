window.addEventListener('load', function () {
    if (!Glider) return;

    const sliders = document.querySelectorAll('.glider');

    for (const slider of sliders) {
        const autoOrValue = (v) => v === 'auto' ? v : isNaN(Number(v)) ? undefined : Number(v);
        const parseOptions = (v) => {
            try {
                return JSON.parse(v);
            } catch (e) {
                return undefined;
            }
        }
        const { slidesToShow, slidesToScroll, itemWidth, exactWidth, duration, responsive } = slider.dataset;

        console.log(autoOrValue(slidesToShow) ?? 1)
        console.log(autoOrValue(slidesToScroll) ?? 1)

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
