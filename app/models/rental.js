import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  bedrooms: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', { async: true}),
  propertyType: DS.belongsTo('propertyType', { async: true })
});
