const redis = require('async-redis');
const { json } = require('express');
let redisPort = process.env.PORT || 6379;
const client = redis.createClient(redisPort);

const expirationTime = 7200;

async function setCache(key, data) { 
    client.set(
        key,
        JSON.stringify(data)
    ); 
}


async function getCache(key) {
    let data = await client.get(key); 
    return JSON.parse(data)
}


module.exports.getCache = getCache
module.exports.setCache = setCache