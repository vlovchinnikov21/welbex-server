const db = require('../db')

class DataController {
    async getData(req, res) {
        const table = await db.query('SELECT * FROM welbex_data')
        res.json(table.rows)
    }
}
    
module.exports = new DataController()  
    