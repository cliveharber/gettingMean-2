/* GET homepage */
const about = (req, res) => {
  res.render('generic-text', { title: 'About' });
};

module.exports = {
  about
};
