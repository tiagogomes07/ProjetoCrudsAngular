using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CrudsAngulasNetCore.Dao;
using CrudsAngulasNetCore.Model;
using Microsoft.AspNetCore.Mvc;

namespace CrudsAngulasNetCore.Controllers
{
    //[Route("api/[controller]")]
    public class UsuarioController : Controller
    {       
        [HttpGet("api/Usuario/ListaUsuarios")]
        public IEnumerable<Usuario> ListaUsuarios([FromServices]UsuarioDAO usuarioDAO)
        {            
            return usuarioDAO.ListarTodos();
        }

        [HttpPost("api/Usuario/AddUsuario")]
        public ActionResult AddUsuario([FromServices]UsuarioDAO usuarioDAO, [FromBody] Usuario usuario)
        {
            usuarioDAO.AddUsuario(usuario);
            return new JsonResult( usuario);
        }

        [HttpPut("api/Usuario/EditUsuario")]
        public void EditUsuario([FromServices]UsuarioDAO usuarioDAO, [FromBody] Usuario usuario)
        {
            usuarioDAO.EditUsuario(usuario);
        }

        [HttpDelete("api/Usuario/DeleteUsuario/{id}")]
        public void DeleteUsuario([FromServices]UsuarioDAO usuarioDAO, [FromQuery] int id)
        {
            usuarioDAO.DeleteUsuario(id);
        }

    }
}
