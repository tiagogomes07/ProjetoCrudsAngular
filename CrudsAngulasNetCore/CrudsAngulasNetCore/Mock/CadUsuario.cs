using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CrudsAngulasNetCore.Model;

namespace CrudsAngulasNetCore.Mock
{
    public class CadUsuario
    {
        // which, however, doesn't work really well in multithreaded program.
        private static List<Usuario> _instance;

        // This is the static method that controls the access to the singleton
        // instance. On the first run, it creates a singleton object and places
        // it into the static field. On subsequent runs, it returns the client
        // existing object stored in the static field.
        public static List<Usuario> GetInstance()
        {
            if (_instance == null)
            {
                _instance = new List<Usuario>()
                {
                    new Usuario { Id= 1, Nome = "H.Cavil",  SobreNome = "S" },
                    new Usuario { Id= 2, Nome = "ZySnyder",  SobreNome = "D" },
                    new Usuario { Id= 3, Nome = "DaviJones",  SobreNome = "P" },
                    new Usuario { Id= 3, Nome = "DaviJones",  SobreNome = "P" },
                };
            }
            return _instance;
        }

    }
}
