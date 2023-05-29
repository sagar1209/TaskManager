const express = require('express');
const router = express();
const {getAlltask,
    createtask,
    gettask,
    updatetask,
    deletetask,} = require('../controller/task');

router.get('/',getAlltask);
router.post('/',createtask);
router.get('/:id',gettask);
router.patch('/:id',updatetask);
router.delete('/:id',deletetask);

module.exports = router;