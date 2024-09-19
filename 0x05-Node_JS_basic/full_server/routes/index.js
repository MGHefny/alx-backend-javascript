import AppController from '../controllers/AppController';


const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
};

export default mapRoutes;
module.exports = mapRoutes;
