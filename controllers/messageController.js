const messageController = () => {
    return {
        get: (req, res) => {
            res.render("form", { title: "New Message" });
        },
    }
};

module.exports = messageController();