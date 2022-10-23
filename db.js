const Pool = require('pg').Pool
const pool = new Pool({
    user: "jrskmdjobstsft",
    password: "0631d8e816e212e99ad01d5b6f0a52ad7bd6c159ac6e0bf63b659ddbfed25da5",
    host: "ec2-52-48-159-67.eu-west-1.compute.amazonaws.com",
    port: "5432",
    database: "ddhr4mc2han9jd"
})

module.exports = pool