const { sequelize } = require('./db/db');
require('dotenv').config('.env');
const express = require('express');
const app = express();
const { Trip, Item, User } = require('./db');
const { trips, items } = require('./db/seedData');
const cors = require('cors');
const { PORT, JWT_SECRET } = process.env;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const setUser = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, JWT_SECRET);
    const user = await decodedToken;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
//SIGN UP -- DONE
app.post('/signup', async (req, res, next) => {
  const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  };
  try {
    const { password, name, email } = req.body;
    const hashedPassword = await hashPassword(password, 10);
    const user = await User.create({
      name,
      password: hashedPassword,
      email,
    });
    const token = jwt.sign({ email, id: user.id }, JWT_SECRET);
    res.send({
      message: 'successfully created user ' + user.name,
      token: token,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// LOGIN -- DONE
app.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.sendStatus(401);
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.sendStatus(401);
      } else {
        const token = jwt.sign({ email, id: user.id }, JWT_SECRET, {
          expiresIn: '24h',
        });
        res.send({
          message: 'successfully logged in ' + user.name,
          token: token,
        });
      }
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.get("/auth-endpoint", setUser, (req, res) => {
  res.json({ message: "You are authorized to access me" });
});


// ---------------------------------------------------
app.get('/', async (req, res, next) => {
  try {
    res.send(await Trip.findAll());
  } catch (error) {
    console.error(error);
    next(error);
  }
});
app.get('/seed', async (req, res, next) => {
  try {
    Trip.bulkCreate(trips, items);
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
app.post('/trips', async (req, res, next) => {
  const { title, startDate, endDate, coverPhoto } = req.body;
  await Trip.create({ title, startDate, endDate, coverPhoto });
  res.send(await Trip.findAll());
});

app.put('/trips/:id', async (req, res, next) => {
  await Trip.update(req.body, { where: { id: req.params.id } });
  res.send(await Trip.findAll());
});
app.delete('/trips/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingTrip = await Trip.findByPk(id);
    if (!existingTrip) {
      res.status(404).send(`Trip with id ${id} not found`);
      return;
    }
    await Trip.destroy({ where: { id } });
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
  res.send(await Item.create(name, (packed = false)));
});

app.delete('/items/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingItem = await Item.findByPk(id);
    if (!existingItem) {
      res.status(404).send(`Item with id ${id} not found`);
      return;
    }
    await Item.destroy({ where: { id } });
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
