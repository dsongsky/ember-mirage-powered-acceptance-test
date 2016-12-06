import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectSameBillingAddress() {
      // this method is passed to the component
      if (typeof this.selectSameBillingAddress === 'function') {
        this.selectSameBillingAddress.call(this, ...arguments);
      }
    },
  }
});
