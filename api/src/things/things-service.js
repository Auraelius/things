const ThingsService = {
  getAllThingss(knex) {
    return knex.select('*').from('things')
    // TODO add query parameters for filtering
  },
  insertThings(knex, newThing) {
    return knex
      .insert(newThing)
      .into('things')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  getById(knex, id) {
    return knex.from('things').select('*').where('id', id).first()
  },
  deleteThings(knex, id) {
    return knex('things')
      .where({ id })
      .delete()
  },
  updateThings(knex, id, newThingsFields) {
    return knex('things')
      .where({ id })
      .update(newThingsFields)
  },
}

module.exports = ThingsService
