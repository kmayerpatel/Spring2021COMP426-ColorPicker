let SliderEntry = function (min, max, init_value) {
    this.getMin = function () {
        return min;
    };

    this.getMax = function () {
        return max;
    };

    this.getValue = function () {
        return range_slider.value;
    };

    let update = () => {
        listeners.forEach((l) => {
            l(this);
        })
    }

    this.setValue = function (new_value) {
        range_slider.value = new_value;
        entry.value = range_slider.value;
        update();
    }

    let entry_div = document.createElement('div');

    let range_slider = document.createElement('input');
    range_slider.setAttribute('type', 'range');
    range_slider.setAttribute('min', min);
    range_slider.setAttribute('max', max);
    range_slider.setAttribute('value', init_value);
    range_slider.style.width = "250px";

    let entry = document.createElement('input');
    entry.setAttribute('type', 'text');
    entry.style.width = "25px";

    entry.value = range_slider.value;

    entry_div.append(range_slider);
    entry_div.append(entry);
    entry_div.style.width = "290px";

    this.getDiv = function () {
        return entry_div;
    }

    range_slider.addEventListener('input', () => {
        entry.value = range_slider.value;
        update();
    })

    entry.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            let new_value = parseInt(entry.value);
            if (!isNaN(new_value)) {
                range_slider.value = new_value;
            }
            entry.value = range_slider.value;
            update();
        }
    })

    let listeners = [];

    this.addChangeListener = function (l) {
        listeners.push(l);
    }

}

