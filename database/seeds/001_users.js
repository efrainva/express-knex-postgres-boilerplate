exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { 
          location: '1st st',
          price: '300',
          room: '3',
        },
        { 
          location: "2nd st",
          price: '300',
          room: '2',
        },
        {
          location: "3rd st",
          price: '300',
          room: '1',
        }
      ]);
    });
};
