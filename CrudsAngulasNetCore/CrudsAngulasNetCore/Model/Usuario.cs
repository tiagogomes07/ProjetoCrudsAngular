using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace CrudsAngulasNetCore.Model
{
    [Table("\"Cruds\".usuario")]
    public class Usuario
    {
        [Dapper.Contrib.Extensions.Key]
        public long? Id { get; set; }        
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Cpf { get; set; }
        public string Rg { get; set; }
    }
}
