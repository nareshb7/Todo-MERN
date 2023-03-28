const {Router} = require('express')
const { getTodo, saveTodo, updateTodo, deleteTodo, deleteAll } = require('../controllers/TodoControllers')

const router = Router()

router.get('/',getTodo)
router.post('/save',saveTodo)
router.post('/update', updateTodo)
router.post('/delete', deleteTodo)
router.delete('/', deleteAll)


module.exports = router