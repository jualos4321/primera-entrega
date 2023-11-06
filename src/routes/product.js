import { Router } from "express";

const products = []
let id = 0

const router = Router()

router.get('/', (req, res) =>{
    if(req.query.limit = 10){
        res.send(res.status(200).send({ data: products }))
       }else{
        res.send(products.slice(11, 100))
       }
   
})

router.get('/:pid', (req,res) =>{
    res.send(req.params.pid.find(req => req.pid === pid))
})

router.post('/', (req, res) =>{
    id++
    const pid = id
    const newContent = req.body
    products.push(newContent)
    products.push(pid)
    res.status(200).send({ data : newContent})
})

router.put('/', (req, res) =>{
    const newUpdate = req.body
    products.push(newUpdate)
    products.push(pid)
    res.status(200).send({ data : newUpdate})
})

router.delete('/:pid', (req, res) =>{
     const borrar = (req.params.pid.find(req => req.pid === pid))
     borrar = []
})

export default router;