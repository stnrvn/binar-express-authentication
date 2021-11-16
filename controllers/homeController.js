class HomeController{
  static async home(req, res){
    try {
      res.render('home')
    } catch (error) {
      return res.send(error)
    }
  }
}

module.exports = HomeController