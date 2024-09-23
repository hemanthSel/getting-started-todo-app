const GREETING = 'Hello from Docker!!!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
