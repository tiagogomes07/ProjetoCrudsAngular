using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CrudsAngulasNetCore.Model
{
    [Table("\"Cruds\".tecnologia")]
    public class Tecnologia
    {
        [Dapper.Contrib.Extensions.Key]
        public long? Id { get;set;}
        public string Nome { get; set; }
        public string Apelido { get; set; }
        public string Utilidade { get; set; }
    }
}
