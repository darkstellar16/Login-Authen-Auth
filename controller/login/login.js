const loginInfo = require("../../model/userModel.js");

const bcrypt = require("bcrypt");

const loginData = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(404).send("Fields required");
        }
        const user = await loginInfo.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ email, password }, "fuck off to this life", { expiresIn: "2h" })

            user.token = token;
        }

        

    } catch (error) {

    }




}










module.exports = loginData;