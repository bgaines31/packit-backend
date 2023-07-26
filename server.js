// // const { db } = require('./models/User');
// const app = require('./app');
const { sequelize } = require('./db/db');
// import { Trip } from './models/Trip';
// const PORT = process.env.PORT || 3000;
require('dotenv').config('.env');
const express = require('express');
const app = express();
const { Trip, Item } = require('./db');
const cors = require('cors');
const morgan = require('morgan');
const { PORT } = process.env || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req, res, next) => {
  try {
    res.send(await Trip.findAll());
  } catch (error) {
    console.error(error);
    next(error);
  }
});
app.get('/trips', async (req, res, next) => {
  try {
    res.send(await Trip.findAll());
  } catch (error) {
    console.error(error);
    next(error);
  }
});
app.get('/trips/:id', async (req, res, next) => {
  try {
    res.send(await Trip.findOne({ where: { id: req.params.id } }));
  } catch (error) {
    console.error(error);
    next(error);
  }
});
app.post('/trips', async (req, res) => {
  const { title, startDate, endDate, coverPhoto } = req.body;
  res.send(await Trip.create(title, startDate, endDate, coverPhoto));
});

app.delete('/trips/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const existingTrip = await Trip.findByPk(id);
    if(!existingTrip) {
      res.status(404).send(`Trip with id ${id} not found`);
      return;
    }
    await Trip.destroy({where: {id}});
    res.send(await Trip.findAll());
  } catch (error) {
    next(error);
  }
});

app.get('/items', async (req, res, next) => {
  try {
    res.send(await Item.findAll());
  } catch (error) {
    console.error(error);
    next(error);
  }
});
app.get('/items/:id', async (req, res, next) => {
  try {
    res.send(await Item.findOne({ where: { id: req.params.id } }));
  } catch (error) {
    console.error(error);
    next(error);
  }
});
app.get('/:id/packingList', async (req, res, next) => {
  try {
    res.send(
      await Item.findAll({ where: { tripId: req.params.id } })
    );
  } catch (error) {
    console.error(error);
    next(error);
  }
});
app.post('/items', async (req, res) => {
  const { name, packed } = req.body;
  res.send(await Item.create(name, packed = false));
});

app.delete('/items/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const existingItem = await Item.findByPk(id);
    if(!existingItem) {
      res.status(404).send(`Item with id ${id} not found`);
      return;
    }
    await Item.destroy({where: {id}});
    res.send(await Item.findAll());
  } catch (error) {
    next(error);
  }
});
const init = async () => {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

init();
