import Ember from 'ember';

function range(start, end) {
  return Array.from({length: (1 + end - start)}, (v, k) => k + start);
}

function isleapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function getMaxDay(month, year) {
  let m = parseInt(month, 10);
  let y = parseInt(year, 10);

  let days = 31;

  if ([4, 6, 9, 11].includes(m)) {
    days = 30;
  } else if (m == 2) {
    days = isleapYear(parseInt(y, 10)) ? 29 : 28
  }

  return days;
}

function isValidDay(day, month, year) {

  let d = parseInt(day, 10);

  return d <= getMaxDay(month, year) && d > 0;
}

function descending(a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }

  return 0;
}

export default Ember.Component.extend({

  dayRange: Ember.computed('month', 'year', function() {

    return range(1, getMaxDay(this.get('month'), this.get('year')));
  }),
  monthRange: range(1, 12),
  yearRange: range(1905, 2004).sort(descending),

  ensureValidDate(day, month, year) {

    const isValid = isValidDay(day, month, year);

    if (!isValid && typeof this.selectDay === 'function') {
      this.selectDay.call(this, 1);
    }

    return isValid;
  },

  actions: {

    selectDay(value) {

      if (typeof this.selectDay === 'function') {
        // this method is passed to the component
        this.selectDay.call(this, value);
        this.ensureValidDate(value, this.month, this.year)
      }
    },

    selectMonth(value) {

      if (typeof this.selectMonth === 'function') {
        // this method is passed to the component
        this.selectMonth.call(this, value);
        this.ensureValidDate(this.day, value, this.year);
      }
    },

    selectYear(value) {

      if (typeof this.selectYear === 'function') {
        // this method is passed to the component
        this.selectYear.call(this, value);
        this.ensureValidDate(this.day, this.month, value)
      }
    },
  }
});
