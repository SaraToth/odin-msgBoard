const messages = require("../data/messages");

const messageController = () => {
    return {
        get: (req, res) => {
            res.render("form", { title: "New Message" });
        },

        getPage: (req, res) => {
            const messageId = req.params.id;
            const message = messages.find(
                (msg) => msg.added.toISOString() === messageId
            );
            if (!message) {
                return res.status(404).render("error", { message: "Message not found"});
            }
            res.render("messageDetails", { message });
        }
    }
};

module.exports = messageController();