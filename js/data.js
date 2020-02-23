'use strict';

(function () {
  window.data = {
    RoomsGuestsRelation: {
      1: {
        count: [1],
        error: 'Количество гостей должно быть равно 1'
      },
      2: {
        count: [1, 2],
        error: 'Количество гостей должно быть 1 или 2'
      },
      3: {
        count: [1, 2, 3],
        error: 'Количество гостей должно быть 1, 2 или 3'
      },
      100: {
        count: [0],
        error: '100 комнат предназначены не для гостей'
      }
    },
    OffsetPins: {
      main: {
        x: 31,
        y: 72
      },
      offer: {
        x: 25,
        y: 70
      }
    }
  };
})();