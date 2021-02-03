const db = require('../config/db');
const xilogravuraRepository = require('../repository/xilogravuraRepository');
const cordelRepository = require('../repository/cordelRepository');

const UserCordel = require('../models/UserCordel');

const csv = require('csv-parser');
const fs = require('fs');

module.exports = {
    async store(request, response) {
        try {
            // Insere as xilogravuras no banco
            fs.createReadStream('./xilogravuras.csv')
            .pipe(csv())
            .on('data', (row) => {
                const xilogravura = xilogravuraRepository.findOne({ row })

                if (!xilogravura) {
                    xilogravuraRepository.create(row);
                    console.log(row);
                }
            })
            .on('end', () => {
                console.log('CSV file successfully processed')
            });

            // Insere os cordeis no banco
            fs.createReadStream('./cordeis.csv')
            .pipe(csv())
            .on('data', (row) => {
                const cordel = cordelRepository.findOne({ row })
                
                if (!cordel) {
                    cordelRepository.create(row);
                    console.log(row);
                }
            })
            .on('end', () => {
                console.log('CSV file successfully processed')
            });
            
            return response.send({ message: 'CSV file successfully processed' });
        } catch (error) {
            console.error(error);
        }
        
    },

    async cordeis(request, response) {
        const cordeis = await cordelRepository.find();

        return response.json(cordeis);
    },

    async create_cordel(request, response) {
        const { imageUrl, autor, titulo, texto } = request.body;

        try {
            await UserCordel.create({
                imageUrl,
                autor,
                titulo,
                texto,
            });

            return response.send({ message: 'Cordel criado com sucesso!' });
        } catch (error) {
            console.error(error);
        }
    },

    async users_cordeis(request, response) {
        const cordeis = await UserCordel.find();

        return response.json(cordeis);
    },
}

