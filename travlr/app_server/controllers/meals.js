/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaway Meals' });
};
module.exports = {
    meals
};