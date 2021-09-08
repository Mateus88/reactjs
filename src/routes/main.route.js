const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller')



router.get('/emailvalido/:email_user',Controller.emailvalido)//
router.get('/usernamevalido/:username',Controller.usernamevalido) //
router.post('/insertAdmin',Controller.inserirAdmin)// check
router.post('/insertLocal',Controller.inserirLocal)// check
router.get('/allLocal', Controller.listarLocais)// check
router.get('/allLocais2', Controller.listarLocais2)// check
router.post('/insertAlerta', Controller.inserirAlerta)// check
router.get('/allAlertas', Controller.listarAlerta)// check
router.get('/allAlertas2', Controller.listarAlerta2)// check
router.post('/insertReport', Controller.inserirReport)// check
router.get('/allReports', Controller.listarReport)// check
router.get('/allReports2', Controller.listarReport2)// check
router.post('/insertAvaliacao', Controller.inserirAvaliacao)
router.post('/insertUtilizador', Controller.inserirUtilizador)//check
router.get('/login/:username/:password', Controller.login)//check
router.get('/loginadmin',Controller.loginadmin) // check
router.get('/live/:id_local', Controller.live) //check
router.get('/live2', Controller.live2) //check
router.get('/daily', Controller.diariamente)//check
router.get('/dailyadmin', Controller.diariamente2)//check
router.get('/weekly',Controller.semanalmente)//check
router.get('/weekly2',Controller.semanalmente2)//check
router.get('/reports/:id_user/:id_avaliador/:id_local', Controller.reportspossiveis) // check 
router.get('/feed/:id_user', Controller.feed)//check
router.get('/rank', Controller.rank)//check
router.get("/rank_by_user/:id_user",Controller.rankbyuser)//
router.get("/inativo/:id_local", Controller.inatividade) //check
router.get("/reportbyuser/:id_user", Controller.ReportByUser) //check
router.get("/nrReport/:id_user", Controller.NumerosReport) //check
router.get('/reports/:id_local', Controller.reportLocal) // check 








module.exports = router;
