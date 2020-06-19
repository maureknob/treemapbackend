const connection = require('../database/connection');
const generateUniqueId = require("../utils/generateUniqueId");
module.exports = {

    async index (request, response) {
        const coordinates = await connection('tree_coordinates').select('*');
    
        return response.json(coordinates);
    },


    async create(request, response) {
        const {lat, lng} = request.body;

        const id = generateUniqueId();
    
       await connection('tree_coordinates').insert({
            id,
            lat,
            lng,
        })
    
        return response.json({id});
    }
};