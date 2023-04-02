const { error } = require('console');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'vgcollector_connector_app';
    host: 'localhost',
    database: 'vgcollector_connector',
    password: 'password',
    port: 5432,
});

const getConsoles = (req, res) =>{
    pool.query('SELECT * FROM consoles', (err, results) =>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}