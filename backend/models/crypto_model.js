const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Crypto = new Schema(
    {
        currency:{ type: String, required: true },
        date: { type: String, required: true },
        open: { type: Number, required: true },
        high: { type: Number, required: true },
        low: { type: Number, required: true },
        close: { type: Number, required: true },
        volume: { type: String, required: true },
        marketcap: { type: String, required: true },

    },
    { collection: 'crypto' },
)

module.exports = mongoose.model('crypto', Crypto)