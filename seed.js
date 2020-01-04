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
        name: 'Javascript',
        icon: '/images/js.png'
    },
    {
        name: 'Node',
        icon: '/images/node.png'
    },
    {
        name: 'PostgresSQL',
        icon: '/images/postgreSQL.png'
    },
    {
        name: 'Express',
        icon: '/images/express.png'
    },
    {
        name: 'Sequelize',
        icon: '/images/sequelize.png'
    },
    {
        name: 'Webpack',
        icon: '/images/webpack.png'
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
        name: 'Mocha',
        icon: '/images/mocha.png'
    },
    {
        name: 'Chai',
        icon: '/images/chai.png'
    },
    {
        name: 'HTML',
        icon: '/images/html.png'
    },
    {
        name: 'CSS',
        icon: '/images/css.png'
    },
    {
        name: 'Dart',
        icon: '/images/dart.png'
    },
    {
        name: 'Flutter',
        icon: '/images/flutter.png'
    },
    {
        name: 'Java',
        icon: '/images/java.png'
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