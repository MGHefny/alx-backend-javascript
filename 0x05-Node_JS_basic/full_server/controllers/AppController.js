/**
 * Miscellaneous route.
 */
class AppController {
  static getHomepage(request, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
