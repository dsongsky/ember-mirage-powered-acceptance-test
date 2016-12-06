import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  titles: null,

  actions: {
    selectTitle() {
      // this method is passed to the component
      if (typeof this.selectTitle === 'function') {
        this.selectTitle.call(this, ...arguments);
      }
    },
  }
});

