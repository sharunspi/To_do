var express = require('express');
var router = express.Router();
const fs = require('fs')
let DBPATH ='./user/db.json'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname+'/build/index.html')
});
router.get('/get_list', function(req, res, next) {
  let data =  JSON.parse(fs.readFileSync(DBPATH))
  res.json({
    listOfTasks:data
  })
});
router.post('/add_new_task',(req,res,next)=>{
  let data =  JSON.parse(fs.readFileSync(DBPATH))
  data.push(req.body)
  fs.writeFileSync(DBPATH,JSON.stringify(data))
  res.json({
    message:'new task added',
    status:true
  })
})

router.delete('/all',(req,res)=>{
  fs.writeFileSync(DBPATH,'[]')
  res.json({
    message:'All task deleted',
    status:true
  }) 
})
router.delete('/task/:taskId',(req,res)=>{
  let data =  JSON.parse(fs.readFileSync(DBPATH))
  let restData = data.filter(task => task.taskId != req.params.taskId )
  fs.writeFileSync(DBPATH,JSON.stringify(restData))
  res.json({
    message:'Task '+req.params.taskId + ' deleted',
    status:true
  })
})

module.exports = router;
