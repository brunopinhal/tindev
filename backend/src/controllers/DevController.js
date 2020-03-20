const axios = require('axios'); // Pacote que auxilia fazer requisições em APIs externas
const Dev = require('../models/dev');

module.exports = {
    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user:username }); // findOne = método do moongose utilizado para encontrar 1 usuário, assim como forEach
        
        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name , bio, avatar_url: avatar } = response.data; 

        const dev = await Dev.create({ 
            name,
            user: username,
            bio,
            avatar
         })
        
        return res.json(dev);
    }
};