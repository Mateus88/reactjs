var sequelize = require('../model/badedados');
const db = require("../model/Pool");
const { QueryTypes } = require('sequelize');


//return em formato json

/*
  exports.inserir = async (req, res) => {
    const {nivel_densidade, significado_nivel, id_cor} = req.body;
    const { rows } = await sequelize.query(
        'INSERT INTO public.nivel_de_densidade(nivel_densidade, significado_nivel, id_cor) VALUES (?, ?, ?)',
        {
          type: sequelize.QueryTypes.INSERT,
          replacements: [nivel_densidade, significado_nivel, id_cor],
        }
    );
    res.status(201).send({
      message: "Movie added successfully!"
    });
  };
  */



 exports.usernamevalido = async (req, res) => {
  const {username} = req.params;
  const response = await sequelize.query(
    "select count(*) from utilizador where username like ?",
    {
      type: sequelize.QueryTypes.INSERT,
      replacements: [username],
    }
  );
  res.status(200).send(response);
}

exports.emailvalido = async (req, res) => {
  const {email_user} = req.params;
  const response = await sequelize.query(
    "select count(*) from utilizador where email_user like ?",
    {
      type: sequelize.QueryTypes.INSERT,
      replacements: [email_user],
    }
  );
  res.status(200).send(response);
}



  //funciona
  exports.inserirAdmin = async (req, res) => {
    const { email_admin, password} = req.body;
    const { rows } = await sequelize.query(
        "INSERT INTO public.admin(email_admin, password) VALUES (?,?)",
        { 
          type: sequelize.QueryTypes.INSERT,
          replacements: [email_admin, password],

        }
        
    );
    res.status(201).send({
      message: "Admin added successfully!",
      
    });
  };

  exports.NumerosReport= async (req, res) => {
    const { id_user } = req.params;
    const response = await sequelize.query(
        "SELECT COUNT(*) AS EFETUADOS, SUM(VALIDACOES) AS VALIDADOS, SUM(DENUNCIAS) AS DENUNCIAS FROM REPORT WHERE ID_USER= ?",
        { 
          type: sequelize.QueryTypes.INSERT,
          replacements: [id_user],

        }
        
    );
    res.status(200).send(response);
  };




  
  //funciona
  exports.ReportByUser= async (req, res) => {
    const { id_user } = req.params;
    const response = await sequelize.query(
        "SELECT ID_REPORT, NOME_LOCAL, DATA_HORAS_REPORT, VALIDACOES, DENUNCIAS, ID_NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL WHERE ID_USER = ? ORDER BY DATA_HORAS_REPORT DESC",
        { 
          type: sequelize.QueryTypes.INSERT,
          replacements: [id_user],

        }
        
    );
    res.status(200).send(response);
  };

  //funciona
  exports.inserirAlerta = async (req, res) => {
    const { id_local, id_admin, id_tipoalerta} = req.body;
    const { rows } = await sequelize.query(
        "INSERT INTO public.alerta(id_local, id_admin, id_tipoalerta) VALUES (?,?,?)",
        {
        type: sequelize.QueryTypes.INSERT,
        replacements:  [id_local, id_admin, id_tipoalerta],
        }
    );
    res.status(201).send({
      message: "Alerta added successfully!",
    
    });
  };



 //funciona
  exports.inserirLocal = async (req, res) => {
    const { nome_local,latitude, longitude} = req.body;
    const { rows } = await sequelize.query(
        "INSERT INTO public.local( nome_local,latitude, longitude) VALUES (?,?,?)",
        {
          type: sequelize.QueryTypes.INSERT,
          replacements: [ nome_local,latitude, longitude],
        }
     
    );
    res.status(201).send({
      message: "Local added successfully!",
      
    });
  };

  exports.rank = async (req, res) => {
    const response = await sequelize.query("Select * from classificacao");
    res.status(200).send(response);
  };
  
  
  
  //funciona
  exports.listarLocais = async (req, res) => {
    const response = await sequelize.query("SELECT * FROM local");
   
    res.status(200).send(response);
    
  
  };

  //funciona
  exports.listarLocais2 = async (req, res) => {
    const response = await sequelize.query("SELECT * FROM local",
     { type: QueryTypes.SELECT });
   
    res.status(200).send(response);
    
  
  };


  
  //funciona
  exports.listarReport= async (req, res) => {
    const response = await sequelize.query("select id_report, nome_local, username, SIGNIFICADO_NIVEL, validacoes, denuncias, data_horas_report from report inner join local on REPORT.ID_LOCAL = LOCAL.ID_LOCAL inner join UTILIZADOR on REPORT.ID_USER = UTILIZADOR.ID_USER  inner join NIVEL_DE_DENSIDADE ON REPORT.ID_NIVEL_DENSIDADE = NIVEL_DE_DENSIDADE.NIVEL_DENSIDADE ORDER BY data_horas_report DESC ");
    res.status(200).send(response);
  };
  
    //funciona
    exports.listarReport2= async (req, res) => {
      const response = await sequelize.query("select id_report, nome_local, username, SIGNIFICADO_NIVEL, validacoes, denuncias, data_horas_report from report inner join local on REPORT.ID_LOCAL = LOCAL.ID_LOCAL inner join UTILIZADOR on REPORT.ID_USER = UTILIZADOR.ID_USER  inner join NIVEL_DE_DENSIDADE ON REPORT.ID_NIVEL_DENSIDADE = NIVEL_DE_DENSIDADE.NIVEL_DENSIDADE ORDER BY data_horas_report DESC ",
      { type: QueryTypes.SELECT });
      res.status(200).send(response);
    };
    

   //funciona
   exports.listarAlerta = async (req, res) => {
    const response = await sequelize.query("select ID_ALERTA, ID_ADMIN, NOME_LOCAL, DATA_HORAS_ALERTA, TIPO_ALERTA FROM ALERTA INNER JOIN LOCAL ON ALERTA.ID_LOCAL = LOCAL.ID_LOCAL INNER JOIN TIPO_ALERTA ON ALERTA.ID_TIPOALERTA = TIPO_ALERTA.ID_TIPOALERTA ORDER BY data_horas_alerta DESC ");
    res.status(200).send(response);
  };
  
 
      

   //funciona
   exports.listarAlerta2 = async (req, res) => {
    const response = await sequelize.query("select ID_ALERTA, ID_ADMIN, NOME_LOCAL, DATA_HORAS_ALERTA, TIPO_ALERTA FROM ALERTA INNER JOIN LOCAL ON ALERTA.ID_LOCAL = LOCAL.ID_LOCAL INNER JOIN TIPO_ALERTA ON ALERTA.ID_TIPOALERTA = TIPO_ALERTA.ID_TIPOALERTA ORDER BY data_horas_alerta DESC ",
    { type: QueryTypes.SELECT });
    res.status(200).send(response);
  };
  

  //funciona
  exports.inserirReport = async (req, res) => {
    const { id_local, id_user, id_nivel_densidade} = req.body;
    const { rows } = await sequelize.query(
        "INSERT INTO public.report(  id_local, id_user, id_nivel_densidade) VALUES (?,?,?)",
        {
          type: sequelize.QueryTypes.INSERT,
          replacements: [id_local, id_user, id_nivel_densidade],
        }
     
    );
    res.status(201).send({
      message: "Report added successfully!",
    
    });
  };
 





  exports.inserirAvaliacao = async (req, res) => {
    const { valor_avaliacao, id_report, id_avaliador} = req.body;
    const { rows } = await sequelize.query(
        "INSERT INTO public.avaliacao( valor_avaliacao, id_report, id_avaliador) VALUES (?,?,?)",   
        {
          type: sequelize.QueryTypes.INSERT,
          replacements: [ valor_avaliacao, id_report, id_avaliador],
        }   
    );
    const response = await sequelize.query("DROP TABLE IF EXISTS CLASSIFICACAO; SELECT RANK () OVER (ORDER BY pontuacao DESC) AS CLASSIFICAÇÃO, UTILIZADOR.ID_USER, USERNAME, NOMECOMPLETO, pontuacao INTO CLASSIFICACAO FROM UTILIZADOR")
    res.status(201).send({
      message: "Avaliacao added successfully!",
    
    });
  };
 

  exports.inserirUtilizador = async (req, res) => {
    const { username, nomecompleto, data_nascimento_user,localidade,  morada_user,  tel_user, email_user, password} = req.body;
    const { rows } = await sequelize.query(
        "INSERT INTO public.utilizador(username, nomecompleto, data_nascimento_user, localidade, morada_user, tel_user, email_user, password) VALUES (?,?,?,?,?,?,?,?)",
       
        {
          type: sequelize.QueryTypes.INSERT,
          replacements: [username, nomecompleto, data_nascimento_user, localidade, morada_user, tel_user, email_user, password],
        }
        );
    const response = await sequelize.query("DROP TABLE IF EXISTS CLASSIFICACAO; SELECT RANK () OVER (ORDER BY pontuacao DESC) AS CLASSIFICAÇÃO, UTILIZADOR.ID_USER, USERNAME, NOMECOMPLETO, pontuacao INTO CLASSIFICACAO FROM UTILIZADOR")
    res.status(201).send({
      message: "Utilizador added successfully!",
    
    });
  };

exports.login = async (req, res) => {
  const {username, password} = req.params;                                                
  const response = await sequelize.query("SELECT id_user FROM UTILIZADOR WHERE username = ? AND password = ?", 
  {
      type: sequelize.QueryTypes.INSERT,
      replacements: [username, password],

  }
  );
  res.status(200).send(response);
};

exports.loginadmin = async (req, res) => {
  const {email_admin, password} = req.body;
  const response = await sequelize.query("SELECT id_admin FROM public.admin WHERE email_admin like ? AND password like ?",
  {
    type: sequelize.QueryTypes.INSERT,
    replacements: [email_admin, password],
	} 
  );
  res.status(200).send(response);
};


/*
exports.temporeal = async (req, res) => {
  const response = await sequelize.query("Select NOME_LOCAL, AVG(ID_NIVEL_DENSIDADE) AS NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL WHERE EXTRACT(HOUR FROM CURRENT_TIMESTAMP-data_horas_report)< 1 GROUP BY NOME_LOCAL ORDER BY data_horas_report  ",
  
  );
  
  res.status(200).send(response);
};

exports.diariamente = async (req, res) => {
  const response = await sequelize.query("Select NOME_LOCAL, AVG(ID_NIVEL_DENSIDADE) AS NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL WHERE EXTRACT(DAY FROM data_horas_report) = EXTRACT(DAY FROM CURRENT_TIMESTAMP) GROUP BY NOME_LOCAL ORDER BY data_horas_report  ");
  res.status(200).send(response);
};

exports.semanalmente = async (req, res) => {
  const response = await sequelize.query("Select NOME_LOCAL, AVG(ID_NIVEL_DENSIDADE) AS NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL WHERE EXTRACT(day FROM CURRENT_TIMESTAMP-data_horas_report)<= 7 GROUP BY NOME_LOCAL ORDER BY data_horas_report  ");
  res.status(200).send(response);
};
*/



exports.live2 = async (req, res) => {
 
  const response = await sequelize.query("Select local.nome_local ,AVG(ID_NIVEL_DENSIDADE) AS NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL  WHERE (DATE_PART('day', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp)) * 24 + (DATE_PART('hour', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp)) * 60 + (DATE_PART('minute', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp)) < 59 GROUP BY local.nome_local",
  { type: QueryTypes.SELECT });
  res.status(200).send(response);
}

exports.live = async (req, res) => {
  const {id_local} = req.params;
  const response = await sequelize.query("Select AVG(ID_NIVEL_DENSIDADE) AS NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL  WHERE (DATE_PART('day', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp)) * 24 + (DATE_PART('hour', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp)) * 60 + (DATE_PART('minute', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp)) < 59 AND local.id_local = ?",
  {
    type: sequelize.QueryTypes.INSERT,
    replacements: [id_local],
	} 
  );
  res.status(200).send(response);
}

//receber o dia
exports.diariamente = async (req, res) => {

  const {dia} = req.body;
  const response = await sequelize.query("Select NOME_LOCAL, AVG(ID_NIVEL_DENSIDADE) AS NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL WHERE data_horas_report::timestamp::date = ? GROUP BY NOME_LOCAL",
  {
    type: sequelize.QueryTypes.INSERT,
    replacements: [dia],
	} 
  
  );
  res.status(200).send(response);
};


exports.diariamente2 = async (req, res) => {
  const response = await sequelize.query("Select NOME_LOCAL, AVG(ID_NIVEL_DENSIDADE) AS NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL WHERE DATE_PART('day', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp) < 1 GROUP BY NOME_LOCAL",
  { type: QueryTypes.SELECT });
  res.status(200).send(response);
};




//um periodo inicio e fim
exports.semanalmente = async (req, res) => {
  const {inicio,fim} = req.body;
  const response = await sequelize.query("Select NOME_LOCAL, AVG(ID_NIVEL_DENSIDADE) AS NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL WHERE data_horas_report::timestamp::date between ? and ? GROUP BY NOME_LOCAL",
  
  {
    type: sequelize.QueryTypes.INSERT,
    replacements: [inicio,fim],
	} 
  );
  
  
  
  res.status(200).send(response);
};


exports.semanalmente2 = async (req, res) => {
  const response = await sequelize.query("Select NOME_LOCAL, AVG(ID_NIVEL_DENSIDADE) AS NIVEL_DENSIDADE FROM REPORT INNER JOIN LOCAL ON REPORT.ID_LOCAL = LOCAL.ID_LOCAL WHERE DATE_PART('day', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp) <= 7 GROUP BY NOME_LOCAL",
  { type: QueryTypes.SELECT });
  res.status(200).send(response);
};


exports.reportspossiveis = async (req, res) => {
  const {id_user, id_avaliador, id_local} = req.params;
  const response = await sequelize.query("SELECT REPORT.ID_REPORT, REPORT.ID_LOCAL, REPORT.ID_USER, USERNAME, REPORT.ID_NIVEL_DENSIDADE, REPORT.VALIDACOES, REPORT.DENUNCIAS, REPORT.DATA_HORAS_REPORT FROM report INNER JOIN UTILIZADOR ON REPORT.ID_USER= UTILIZADOR.ID_USER WHERE REPORT.id_user <> ? and id_report <> ALL(SELECT id_report FROM avaliacao where id_avaliador=?) and  id_local = ? ORDER BY DATA_HORAS_REPORT" ,
  {
    type: sequelize.QueryTypes.INSERT,
    replacements: [id_user, id_avaliador, id_local],
	} 
  );
  res.status(200).send(response);
};



exports.reportLocal = async (req, res) => {
  const {id_local} = req.params;
  const response = await sequelize.query("SELECT REPORT.ID_REPORT, REPORT.ID_LOCAL, REPORT.ID_USER, USERNAME, REPORT.ID_NIVEL_DENSIDADE, REPORT.VALIDACOES, REPORT.DENUNCIAS, REPORT.DATA_HORAS_REPORT FROM report INNER JOIN UTILIZADOR ON REPORT.ID_USER= UTILIZADOR.ID_USER WHERE ID_LOCAL = ? ORDER BY DATA_HORAS_REPORT DESC" ,
  {
    type: sequelize.QueryTypes.INSERT,
    replacements: [id_local],
	} 
  );
  res.status(200).send(response);
};


exports.feed = async (req, res) => {
  const {id_user} = req.params;
  const response = await sequelize.query("SELECT USERNAME, AVALIACAO.ID_REPORT, VALOR_AVALIACAO, DATA_HORAS_AVALIACAO FROM AVALIACAO INNER JOIN REPORT ON AVALIACAO.ID_REPORT = REPORT.ID_REPORT INNER JOIN UTILIZADOR ON AVALIACAO.ID_AVALIADOR = UTILIZADOR.ID_USER WHERE REPORT.ID_USER = ? ORDER BY DATA_HORAS_AVALIACAO DESC",
  {
    type: sequelize.QueryTypes.INSERT,
    replacements: [id_user],
	} 
  );
  res.status(200).send(response);
}


exports.rankbyuser = async (req, res) => {
  const {id_user} = req.params;
  const response = await sequelize.query("SELECT utilizador.nomecompleto, utilizador.username, email_user, tel_user, data_nascimento_user, morada_user, localidade, utilizador.nivel_avatar, utilizador.pontuacao, descricao_avatar,classificaÇÃo FROM utilizador INNER JOIN avatar ON utilizador.nivel_avatar = avatar.nivel_avatar INNER JOIN classificacao ON utilizador.id_user= classificacao.id_user WHERE utilizador.id_user = ?",
  {
    type: sequelize.QueryTypes.INSERT,
    replacements: [id_user],
	} 
  );
  res.status(200).send(response);
}

exports.inatividade = async (req, res) => {
  const {id_local} = req.params;
  const response = await sequelize.query("SELECT count(*) as nr_reports from Report where (DATE_PART('day', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp) * 24 + DATE_PART('hour', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp)) * 60 + DATE_PART('minute', CURRENT_TIMESTAMP::timestamp - data_horas_report::timestamp) < 5 AND id_local = ? ",
  {
    type: sequelize.QueryTypes.INSERT,
    replacements: [id_local],
  }
);
res.status(200).send(response);;
};

