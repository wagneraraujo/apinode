
class UserControler{

  index(req, res){
    console.log(req.body)
  }


  show(req, res){
    return res.status(200).json({
      users
    })
  }

}

module.exports = new UserControler()
