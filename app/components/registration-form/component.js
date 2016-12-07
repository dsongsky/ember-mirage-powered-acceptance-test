import Ember from 'ember';

export default Ember.Component.extend({
  billingErrors: Ember.computed('form.errors', function() {
    let errors = this.get('form.errors');

    return errors instanceof Object ? {
      country: errors.billingCountry,
      address1: errors.billingAddress1,
      address2: errors.billingAddress2,
      townCity: errors.billingTownCity,
      county: errors.billingCounty,
      postcode: errors.billingPostcode,
    } : null;
  })
});
