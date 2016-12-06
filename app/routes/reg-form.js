import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const availableTitles = ['Mr', 'Mrs', 'Miss', 'Ms', 'Master'];
const validations = buildValidations({
  title: [
    validator('inclusion', {
      in: availableTitles
    }),
    validator('presence', true)
  ],
  firstName: validator('presence', true),
  lastName: validator('presence', true),
  telNumber: validator('presence', true),
  email: validator('presence', true),
  emailConfirm: validator('presence', true),
  country: validator('presence', true),
  address1: validator('presence', true),
  townCity: validator('presence', true),
  postcode: validator('presence', true),
  sameBillingAddress: validator('presence', true),
});

const RegForm = Ember.Object.extend(validations, {
  titles: availableTitles,
});

const initialData = {
  title: null,
  firstName: null,
  lastName: null,
  telNumber: null,
  email: null,
  emailConfirm: null,
  country: null,
  address1: null,
  address2: null,
  townCity: null,
  county: null,
  postcode: null,
  sameBillingAddress: null,
  billingCountry: null,
  billingAddress1: null,
  billingAddress2: null,
  billingTownCity: null,
  billingCounty: null,
  billingPostcode: null,
  dobDay: 1,
  dobMonth: 1,
  dobYear: 1970,
  errors: {}
};

export default Ember.Route.extend({
  model() {
    // http://offirgolan.github.io/ember-cp-validations/docs/modules/Basic.html
    let form = RegForm.create(Ember.getOwner(this).ownerInjection(), initialData);

    return Ember.RSVP.hash({
      regForm: form,
      rental: this.store.findAll('rental')
    });
  },

  buildErrors() {
    let form = this.modelFor(this.routeName).regForm;

    let isValid = form.get('validations.isValid');
    let errors = form.get('validations.errors');
    let messages = form.get('validations.messages');

    console.log('what is this', isValid, errors, messages);
  },

  actions: {

    setField(fieldName, value, event) {
      let form = this.modelFor(this.routeName).regForm;
      form.set(fieldName, value);
    },

    submit(e) {
      e.preventDefault();

      let form = this.modelFor(this.routeName).regForm;
      let isValid = form.get('validations.isValid');

      if (isValid) {
        console.log('submitting');
      } else {
        this.buildErrors();
      }

    },

  }
});
