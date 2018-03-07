const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://mjudka:kodidb@ds261138.mlab.com:61138/kanban-app',
  port: process.env.PORT || 8000,
};

export default config;
