const { sequelize, Trip, Item } = require('./db');
const { trips, items } = require('./db/seedData');
//
describe('Items and Trips Models', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  //CREATE//
  test('can create a Trip', async () => {
    const testTrip = await Trip.create(trips[0]);
    expect(testTrip.title).toEqual('Paris, France');
  });
  test('can create a Item', async () => {
    const testItem = await Item.create(items[0]);
    expect(testItem.name).toEqual('sneakers');
  });

  //READ//
  test('can find Trips', async () => {
    const foundTrip = await Trip.findAll();
    expect(foundTrip[0].title).toEqual('Paris, France');
  });

  test('can find Items', async () => {
    const foundItem = await Item.findAll();
    expect(foundItem[0].name).toEqual('sneakers');
  });

  //DELETE//
  test('can delete Trips', async () => {
    const foundTrip = await Trip.findAll();
    const deletedTrip = await foundTrip[0].destroy();
    expect(deletedTrip.title).toEqual('Paris, France');
  });
  test('can delete Items', async () => {
    const foundItem = await Item.findAll();
    const deletedItem = await foundItem[0].destroy();
    expect(deletedItem.name).toEqual('sneakers');
  });

  //UPDATE//
  test('can update Trip', async () => {
    const testTrip = await Trip.create({ title: 'Toronto, Canada' });
    const foundTrip = await Trip.findAll();
    const updatedTrip = await foundTrip[0].update({
      title: 'Honolulu, Hawaii',
    });
    expect(updatedTrip.title).toBe('Honolulu, Hawaii');
  });

  test('can update Item', async () => {
    const testItem = await Item.create({
      name: 'toothpastee',
    });
    const foundItem = await Item.findAll();
    const updatedItem = await foundItem[0].update({
      name: 'toothpaste',
    });
    expect(updatedItem.name).toBe('toothpaste');
  });

  test('Trip can have many Items', async () => {
    await sequelize.sync({ force: true }); 
    const testTrip = await Trip.create({ title: 'Toronto, Canada' })
    const testItem1 = await Item.create({name: "toothbrush", packed: true})
    const testItem2 = await Item.create({name: "soap", packed: false})
    const testItem3 = await Item.create({name: "razor", packed: true})
    await testTrip.addItem(testItem1);  
    await testTrip.addItem(testItem2); 
    await testTrip.addItem(testItem3);         

    const tripItems = await testTrip.getItems();

    expect(tripItems.length).toBe(3);
    expect(testTrip[0] instanceof Item).toBeTruthy;
});

});
