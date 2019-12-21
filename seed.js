const {db, Projects, Skills} = require('./server/models/index');

const projects = [
    {
        name: 'skinRx',
        description: 'A suite of applications...'
    },
    {
        name: 'elect',
        description: 'A mobile app...'
    },
    {
        name: 'The Seriously Cereal Shop',
        description: 'A web application...'
    }
]

const skills = [
    {
        name: 'PostgresSQL',
        icon: 'postgres image'
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