Vue.directive('timer', {
  bind(el, options) {
    let
      interval = options.arg,
      max = Infinity,
      done = 0;

    for (let modifier in options.modifiers) {
      if (!isNaN(+modifier)) max = parseInt(modifier);
    }

    const callback = () => {
      done++;
      options.value(el);

      if (done < max) {
        setTimeout(() => {
          callback();
        }, interval);
      }
    };

    if (done < max) {
      if (options.modifiers.run) {
        callback();
      } else {
        setTimeout(() => {
          callback();
        }, interval);
      }
    }
  }
});


new Vue({
  el: '.sample',
  methods: {
    onTimer(el) {
      let fontSize = getComputedStyle(el).fontSize;
      el.style.fontSize = `${parseInt(fontSize) + 10}px`;
    }
  }
});