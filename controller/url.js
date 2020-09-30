const shortid = require('shortid');
const validUrl = require('valid-url');

const Url = require('../model/Url');

exports.shortUrl = async (req, res, next) => {
  try {
    const { url } = req.body;
    const codeurl = shortid.generate();
    const baseurl = `${req.protocol}://${req.headers.host}/${codeurl}`;
    // eslint-disable-next-line no-undef
    if (!validUrl.isUri(url)) {
      return res.status(401).json({
        msg: 'format is wrong',
      });
    }
    const urlnew = await new Url({
      url: url,
      codeUrl: codeurl,
      shortUrl: baseurl,
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
    const url = await Url.findOne({ codeUrl: req.params.codeUrl });
    if (url == null) {
      res.sendStatus(404);
    }
    res.redirect(url.url);
  } catch (error) {
    next(error);
  }
};
