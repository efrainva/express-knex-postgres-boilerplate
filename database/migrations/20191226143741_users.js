exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string('location')
    tbl.integer('rooms')
    tbl.integer('price')

    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
