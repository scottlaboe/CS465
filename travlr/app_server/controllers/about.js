/* GET about view */
const about = (req, res) => {
    res.render('about', { title: 'About Travlr' });
};
module.exports = {
    about
};