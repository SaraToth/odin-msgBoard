const messages = require("../data/messages");
const { randomUUID } = require("crypto");

const indexController = () => {

    return {
        get: (req, res) => {
            res.render("index", { title: "Mini Message Board", messages: messages });
        },

        post: (req, res) => {
            const { user, text } = req.body;

                messages.push({
                text: text,
                user: user,
                added: new Date(),
                id: randomUUID(),
            });

            res.redirect("/");
        },

    }
}

module.exports = indexController();