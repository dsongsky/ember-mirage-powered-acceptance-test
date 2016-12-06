import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i;
  },
  title() {return faker.random.words();},
  owner() {return faker.name.firstName() + ' ' + faker.name.lastName();},
  city() {return faker.address.city();},
  type: 'Apartment',
  bedrooms() { return Math.floor(Math.random()*100+1)/10;},
  image() {return faker.image.imageUrl();}
});
