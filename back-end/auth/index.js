const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })

    if (!user) {
      console.log('No such user found:', req.body.email)

      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)

      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    console.log(user)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.sendStatus(200)
})

router.get('/me', async (req, res, next) => {
  try {
    const you = await User.findById(req.user.id)
    const yourActivity = await you.getActivity()
    const yourActivityTags = await yourActivity.getTags()
    yourActivity.dataValues.tags = yourActivityTags
    req.user.activity = yourActivity
    console.log(req.user)
    res.json(req.user)
  } catch (e) {
    next(e)
  }
})
