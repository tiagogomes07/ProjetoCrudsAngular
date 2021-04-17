using System;
using System.Collections.Generic;
using CrudsAngulasNetCore.Dao;
using CrudsAngulasNetCore.Model;
using Microsoft.AspNetCore.Mvc;

namespace CrudsAngulasNetCore.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class TecnologiasController : ControllerBase
    {
        // GET: api/Tecnologias
        [HttpGet("api/Tecnologias/Listar")]
        public IEnumerable<Tecnologia> Get([FromServices] TecnologiaDAO tecnologiaDAO)
        {
            return tecnologiaDAO.ListarTodos();
        }

        // GET: api/Tecnologias/5
        [HttpGet("api/Tecnologias/Listar/{id}")]
        public Tecnologia Get([FromServices] TecnologiaDAO tecnologiaDAO, int id)
        {
            return tecnologiaDAO.Get(id);
        }

        // POST: api/Tecnologias
        [HttpPost("api/Tecnologias/Add")]
        public void Post([FromServices] TecnologiaDAO tecnologiaDAO, [FromBody] Tecnologia tecnologia)
        {
            tecnologiaDAO.AddTecnologia(tecnologia);
        }

        // PUT: api/Tecnologias/5
        [HttpPut("api/Tecnologias/Edit")]
        public void Put([FromServices] TecnologiaDAO tecnologiaDAO, [FromBody] Tecnologia tecnologia)
        {
            tecnologiaDAO.EditTecnologia(tecnologia);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("api/Tecnologias/Delete/{id}")]
        public void Delete([FromServices] TecnologiaDAO tecnologiaDAO, [FromQuery] int id)
        {
            tecnologiaDAO.DeleteTecnologia(id);
        }
    }
}
