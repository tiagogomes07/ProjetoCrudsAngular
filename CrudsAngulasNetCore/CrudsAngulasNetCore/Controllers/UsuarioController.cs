using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CrudsAngulasNetCore.Model;
using Microsoft.AspNetCore.Mvc;

namespace CrudsAngulasNetCore.Controllers
{
    [Route("api/[controller]")]
    public class UsuarioController : Controller
    {
       
        [HttpGet("[action]")]
        public IEnumerable<Usuario> ListaUsuarios()
        {
            return CrudsAngulasNetCore.Mock.CadUsuario.GetInstance();
        }

    }
}
