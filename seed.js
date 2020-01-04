const {db, Projects, Skills} = require('./server/models/index');

const projects = [
    {
        name: 'skinRx',
        description: 'A mobile application designed for health-conscious skincare lovers',
        contributions: ['Implemented React Native to build the user interface', 'Employed cheerio library to scrape the EWG website for products, ingredients, and toxicity scores','Incorporated the multer middleware into the backend to allow users to upload images and send the image to the server using a FormData object'],
        technologies: 'React Native, Redux, Sequelize, Express, PostgreSQL, Javascript, HTML, CSS',
        link: 'https://github.com/Capstone-R2D3',
        image: '/images/skinRx.png',
        color: 'rgba(13, 79, 160, 0.6)'
    },
    {
        name: 'elect',
        description: 'A mobile application to help indecisive friend groups choose restaurants',
        contributions: ['Relied on Google Places API to generate a list of restaurants', 'Incorporated flutter packages to create animations, construct toast notifications, and get the device location'],
        technologies: 'Flutter, Dart',
        link: 'https://github.com/elect-for-the-indecisive/elect',
        image: '/images/elect.png',
        color: 'rgba(22, 157, 83, 0.6)'
    },
    {
        name: 'The Seriously Cereal Shop',
        description: 'A e-commerce website designed to sell some classic cereals',
        contributions: ['Utilized JS and NERD stack to create the application', 'Implemented Passport and Express Sessions to enable the cart to persist through page refreshes', 'Employed Mocha with Chai, Enzyme, Supertest, and other libraries to write tests for both the frontend and backend'],
        technologies: 'React, Redux, Sequelize, Express, PostgreSQL, Javascript, HTML, CSS',
        link: 'https://cinnamon-post-crunch.herokuapp.com',
        image: '/images/cereal.png',
        color: 'rgba(97, 65, 172, 0.6)'
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