const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId, // relaciona o _id do DB - ObjectId é o formato do mongoDb
        ref: 'Dev', // referenco ao model Dev
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],   
}, {
    timestamps: true, // Cria uma coluna automatica pelo mongoose chamada createdAt e uma updateAt
});

module.exports = model('Dev', DevSchema); // exporta o model e recebe o 1st parametro o nome a ser utilizado e o segundo o Schema (tabela)