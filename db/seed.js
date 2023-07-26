// const { trips, items } = require('./seedData');
// const { Trip } = require('./Trip.js');
// const { Item } = require('./Item.js');
// const { sequelize } = require('./db.js');

// const seed = async () => {
//   try {
//     await sequelize.sync({ force: true });
//     await Promise.all(trips.map((trip) => Trip.create(trip)));
//     await Item.bulkCreate(items);
//     console.log('db populated!');
//   } catch (error) {
//     console.error(error);
//   }
// };

// seed();
const {trips, items} = require('./seedData.js');
const {Trip} = require('./');
const {Item} = require('./');
const {sequelize} = require('./db');


const seed = async () => {
    try {
        await sequelize.sync({ force: true });
        const createdTrips = await Trip.bulkCreate(trips);
        const createdItems = await Item.bulkCreate(items);
        for(let i=0; i<createdItems.length; ++i){
            let item = createdItems[i];
            const tripId = createdTrips[i % 4].id;
            await item.setTrip(tripId);
        }
        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();