const Hapi = require('hapi');

// Read the host address and the port from the environment
const port = process.env.PORT || 3000;

const server = Hapi.server({
  port: port,
  routes: {
    cors: true
  },
  app: {}
});

var users = [{
  "id": "1",
  "nombre": "edgardo",
  "apellido": "vasquez",
  "edad": 29
}, {
  "id": "2",
  "nombre": "carolina",
  "apellido": "prado",
  "edad": 28
}];

// Add the route
server.route([{
    method: 'GET',
    path: '/',
    handler: async (req, res) => {
      return 'Hola Hapijs!';
    }
  },
  {
    method: 'GET',
    path: '/user',
    handler: async (req, res) => {
      console.log("/user GET");
      return users;
    }
  },
  {
    method: 'GET',
    path: '/user/{id}',
    handler: async (req, res) => {
      console.log("/user GET " + req.params.id);
      return users.filter((item) => item.id === req.params.id);
    }
  },
  {
    method: 'POST',
    path: '/user',
    handler: async (req, res) => {
      console.log("/user POST");
      console.log(req.payload);
      users.push(req.payload);
      return 'POST!';
    }
  },
  {
    method: 'PUT',
    path: '/user/{id}',
    handler: async (req, res) => {
      console.log("/user PUT " + req.params.id);
      var index = users.findIndex(a => a.id === req.params.id);
      if (index !== undefined && index > -1) {
        users[index].nombre = req.payload.nombre;
        users[index].apellido = req.payload.apellido;
        users[index].edad = req.payload.edad;
      }
      return users;
    }
  },
  {
    method: 'DELETE',
    path: '/user/{id}',
    handler: async (req, res) => {
      console.log("/user DELETE " + req.params.id);

      var index = users.findIndex(a => a.id === req.params.id);
      console.log(index);
      if (index !== undefined && index > -1) {
        users.splice(index, 1);
      }
      return users;
    }
  },
]);

const iniciarServer = async () => {
  try {
    await server.start();
    console.log(`Servidor corriendo en: ${server.info.uri}`);
  } catch (error) {
    console.log('Error al iniciar el servidor Hapi');
  }
};

iniciarServer();