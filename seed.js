const {db, Projects, Skills} = require('./server/models/index');

const projects = [
    {
        name: 'skinRx',
        description: 'A mobile application designed for health-conscious skincare lovers'
    },
    {
        name: 'elect',
        description: 'A mobile application to help indecisive friend groups choose restaurants'
    },
    {
        name: 'The Seriously Cereal Shop',
        description: 'A e-commerce website designed to sell some classic cereals'
    }
]

const skills = [
    {
        name: 'PostgresSQL',
        icon: '/images/postgreSQL.png'
    },
    {
        name: 'Node',
        icon: '/images/node.png'
    },
    {
        name: 'Javascript',
        icon: '/images/js.png'
    },
    {
        name: 'React, React Native',
        icon: '/images/reactNative.png'
    },
    {
        name: 'Redux',
        icon: '/images/redux.png'
    },
    {
        name: 'Heroku',
        icon: '/images/heroku.svg'
    },
    {
        name: 'Express',
        icon: '/images/express.png'
    },
    {
        name: 'Mocha, Chai',
        icon: '/images/mocha-chai.png'
    },
    {
        name: 'Sequelize',
        icon: '/images/sequelize.png'
    },
    {
        name: 'Webpack',
        icon: '/images/webpack.png'
    }
]

async function seed() {
  try {
      await db.sync({force: true});
      await Projects.bulkCreate(projects);
      await Skills.bulkCreate(skills);
      await db.close();
      console.log('database reset!');
  } catch (error) {
      console.log(error);
  }
}

seed()