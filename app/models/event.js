import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  standardStartTime: DS.attr('string'),
  endTime: DS.attr('string')
});
