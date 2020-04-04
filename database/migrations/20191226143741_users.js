exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string('Frist name')
    tbl.integer('Last name')
    tbl.integer('Email')
    tbl.bool('House')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
