const trips = [
  {
    title: 'Paris, France',
    startDate: 2023 / 9 / 13,
    endDate: 2023 / 9 / 11,
    coverPhoto:
      'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
      tripId: 1
  },
  {
    title: 'Barcelona, Spain',
    startDate: 2023 / 10 / 13,
    endDate: 2023 / 10 / 11,
    coverPhoto:
      'https://www.seabourn.com/content/dam/sbn/inventory-assets/ports/BCN/barcelona-spain-guell-552368572.jpg',
      tripId: 2
  },
  {
    title: 'Bangkok, Thailand',
    startDate: 2023 / 11 / 13,
    endDate: 2023 / 11 / 11,
    coverPhoto:
      'https://linkstravelandtours.co.uk/wp-content/uploads/2018/12/bangkok-temple-dawn-thailand.jpg',
      tripId: 3
  },
  {
    title: 'Mexico City, Mexico',
    startDate: 2023 / 12 / 13,
    endDate: 2023 / 12 / 11,
    coverPhoto:
      'https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city_2x1.JPG',
      tripId: 4
  },
  {
    title: 'Paris, France',
    startDate: 2023 / 9 / 13,
    endDate: 2023 / 9 / 11,
    coverPhoto:
      'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
      tripId: 1
  },
  {
    title: 'Barcelona, Spain',
    startDate: 2023 / 10 / 13,
    endDate: 2023 / 10 / 11,
    coverPhoto:
      'https://www.seabourn.com/content/dam/sbn/inventory-assets/ports/BCN/barcelona-spain-guell-552368572.jpg',
      tripId: 2
  },
  {
    title: 'Bangkok, Thailand',
    startDate: 2023 / 11 / 13,
    endDate: 2023 / 11 / 11,
    coverPhoto:
      'https://linkstravelandtours.co.uk/wp-content/uploads/2018/12/bangkok-temple-dawn-thailand.jpg',
      tripId: 3
  },
  {
    title: 'Mexico City, Mexico',
    startDate: 2023 / 12 / 13,
    endDate: 2023 / 12 / 11,
    coverPhoto:
      'https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city_2x1.JPG',
      tripId: 4
  },
  {
    title: 'Paris, France',
    startDate: 2023 / 9 / 13,
    endDate: 2023 / 9 / 11,
    coverPhoto:
      'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
      tripId: 1
  },
  {
    title: 'Barcelona, Spain',
    startDate: 2023 / 10 / 13,
    endDate: 2023 / 10 / 11,
    coverPhoto:
      'https://www.seabourn.com/content/dam/sbn/inventory-assets/ports/BCN/barcelona-spain-guell-552368572.jpg',
      tripId: 2
  },
  {
    title: 'Bangkok, Thailand',
    startDate: 2023 / 11 / 13,
    endDate: 2023 / 11 / 11,
    coverPhoto:
      'https://linkstravelandtours.co.uk/wp-content/uploads/2018/12/bangkok-temple-dawn-thailand.jpg',
      tripId: 3
  },
  {
    title: 'Mexico City, Mexico',
    startDate: 2023 / 12 / 13,
    endDate: 2023 / 12 / 11,
    coverPhoto:
      'https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city_2x1.JPG',
      tripId: 4
  },
  {
    title: 'Paris, France',
    startDate: 2023 / 9 / 13,
    endDate: 2023 / 9 / 11,
    coverPhoto:
      'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
      tripId: 1
  },
  {
    title: 'Barcelona, Spain',
    startDate: 2023 / 10 / 13,
    endDate: 2023 / 10 / 11,
    coverPhoto:
      'https://www.seabourn.com/content/dam/sbn/inventory-assets/ports/BCN/barcelona-spain-guell-552368572.jpg',
      tripId: 2
  },
  {
    title: 'Bangkok, Thailand',
    startDate: 2023 / 11 / 13,
    endDate: 2023 / 11 / 11,
    coverPhoto:
      'https://linkstravelandtours.co.uk/wp-content/uploads/2018/12/bangkok-temple-dawn-thailand.jpg',
      tripId: 3
  },
  {
    title: 'Mexico City, Mexico',
    startDate: 2023 / 12 / 13,
    endDate: 2023 / 12 / 11,
    coverPhoto:
      'https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city_2x1.JPG',
      tripId: 4
  },
];
const items = [
  {
    name: 'sneakers',
    packed: true,
  },
  {
    name: 't-shirt',
    packed: true,
  },
  {
    name: 'jeans',
    packed: false,
  },
  {
    name: 'skirt',
    packed: false,
  },
  {
    name: 'tank top',
    packed: true,
  },
  {
    name: 'curling iron',
    packed: false,
  },
  {
    name: 'sandals',
    packed: true,
  },
  {
    name: 'dress',
    packed: true,
  },
  {
    name: 'shorts',
    packed: false,
  },
  {
    name: 'skirt',
    packed: false,
  },
  {
    name: 'sweater',
    packed: true,
  },
  {
    name: 'curling iron',
    packed: false,
  },
  {
    name: 'sneakers',
    packed: true,
  },
  {
    name: 't-shirt',
    packed: true,
  },
  {
    name: 'sunscreen',
    packed: false,
  },
  {
    name: 'skirt',
    packed: false,
  },
  {
    name: 'swimsuit',
    packed: true,
  },
  {
    name: 'hair ties',
    packed: false,
  },
  {
    name: 'sneakers',
    packed: true,
  },
  {
    name: 'dress',
    packed: true,
  },
  {
    name: 'sandals',
    packed: false,
  },
  {
    name: 'swimsuit',
    packed: false,
  },
  {
    name: 'heels',
    packed: false,
  },
  {
    name: 'flatiron',
    packed: true,
  },
];

module.exports = { trips, items };
