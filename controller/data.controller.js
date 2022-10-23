const db = require('../db')

class DataController {
    async getData(req, res) {
        const table = await db.query('SELECT * FROM public.welbex_data')
        res.json(table)
    }
}
    
module.exports = new DataController()  
    