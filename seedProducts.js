const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Product = require('./models/Product');
const Service = require('./models/Service');

const seedData = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const services = await Service.insertMany([
    { name: 'Plumber' },
    { name: 'Builder' },
    { name: 'Electrician' },
    { name: 'Carpenter' },
    { name: 'Gardener' },
    { name: 'Home Support' },
  ]);

  await Product.insertMany([
    {
      name: 'Home Renovation',
      services: services.map(service => service._id),
    },
  ]);

  console.log('Database seeded!');
  mongoose.connection.close();
};

seedData().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
