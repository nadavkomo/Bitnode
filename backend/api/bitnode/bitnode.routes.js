const express = require('express')
    // const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware.js')
const { getBitnode, getBitnodes, deleteBitnode, updateBitnode, addBitnode, checkBitnodes } = require('./bitnode.controller.js')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.post('/checkbitnodes', checkBitnodes)
router.get('/', getBitnodes)
router.get('/:id', getBitnode)
router.put('/:id', updateBitnode)
router.post('/', addBitnode)
router.delete('/:id', deleteBitnode)

module.exports = router