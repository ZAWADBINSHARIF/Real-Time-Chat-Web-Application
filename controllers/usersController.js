class usersController {

    static getUsers(_req, res) {
        res.render('users', {
            title: "Users - Chat Application"
        });
    };
};

module.exports = usersController;