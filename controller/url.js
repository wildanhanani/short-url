const Url = require('../model/Url');
const shortid = require('shortid');

exports.shortUrl = async (req, res, next) => {
  try {
    const { url } = req.body;
    const shortUrl = shortid.generate();

    const urlnew = await new Url({
      url: url,
      shortUrl: shortUrl,
    }).save();
    res.status(200).json({
      data: urlnew,
    });
  } catch (error) {
    next(error);
  }
};

exports.generate = async (req, res, next) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (url == null) {
      res.sendStatus(404);
    }
    res.redirect(url.url);
  } catch (error) {
    next(error);
  }
};
