import Ember from 'ember';

export default Ember.Component.extend({
  country: 'gogo',
  countries: [
    {id: 1, name: 'UK'},
    {id: 2, name: 'UAE'},
    {id: 3, name: 'another country'},
    {id: 4, name: 'more countries'},
    {id: 5, name: 'gogo'}
  ],

  countrySelectChange(country) {
    this.set('country', country);
  }
});
