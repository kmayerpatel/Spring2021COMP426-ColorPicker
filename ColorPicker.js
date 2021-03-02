let ColorPicker = function (init_r, init_g, init_b) {

    let color_spec = "rgb(" + init_r + "," + init_g + "," + init_b + ")";

    let div = document.createElement('div');

    let r = new SliderEntry(0, 255, init_r);
    let g = new SliderEntry(0, 255, init_g);
    let b = new SliderEntry(0, 255, init_b);

    r.getDiv().style.background = 'red';
    g.getDiv().style.background = 'green';
    b.getDiv().style.background = 'blue';

    let update = () => {
        color_spec = "rgb(" + r.getValue() + "," + g.getValue() + "," + b.getValue() + ")";
        change_listeners.forEach((l) => l(this));
    }

    r.addChangeListener(update);
    g.addChangeListener(update);
    b.addChangeListener(update);

    div.append(r.getDiv());
    div.append(g.getDiv());
    div.append(b.getDiv());

    let change_listeners = [];

    this.getColorSpec = function() {
        return color_spec;
    }

    this.getDiv = function() {
        return div;
    }

    this.addChangeListener = function (listener) {
        if (!change_listeners.includes(listener)) {
            change_listeners.push(listener);
        }
    }

    this.removeChangeListener = function (listener) {
        let idx = change_listeners.findIndex((l) => l == listener);
        if (idx != -1) {
            change_listeners.splice(idx, 1);
        }
    }
}