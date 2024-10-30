const express = require('express');
const router = express.Router();


// routes
router.get('/',(req,res)=> {
    res.render('index.html', { title: 'First website'});
});

router.get('/node', (req, res) => { // Cambia '/contact' por '/node'
    res.render('node.html', { title: 'Node Page' }); // Cambia 'contact.html' por 'node.html'
});



module.exports = router;