using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudsAngulasNetCore.Model
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public int?  Cpf { get; set; }
        public int? Rg { get; set; }
    }
}
