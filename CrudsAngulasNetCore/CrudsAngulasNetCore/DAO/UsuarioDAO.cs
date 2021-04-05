using System.Collections.Generic;
using Npgsql;
using Microsoft.Extensions.Configuration;
using CrudsAngulasNetCore.Model;
using Dapper.Contrib.Extensions;
using System.IO;
using System.Diagnostics;
using System.Data.SqlClient;
using System.Data;
using Dapper;

namespace CrudsAngulasNetCore.Dao
{
    public class UsuarioDAO
    {
        private IConfiguration _configuracoes;
        private static string strconnection;

        public UsuarioDAO(IConfiguration config)
            {
                strconnection = config["postgres"];                
                _configuracoes = config;
            }

        public IEnumerable<Usuario> ListarTodos()
        {
            using (NpgsqlConnection conexao = new NpgsqlConnection(strconnection))
            {
                return conexao.GetAll<Usuario>();
            }
        }

        public void AddUsuario(Usuario usuario)
        {
            using (NpgsqlConnection db = new NpgsqlConnection(strconnection))
            {
                db.Open();
                var pam = new NpgsqlParameter[] 
                {
                    new NpgsqlParameter { ParameterName="Nome",      DbType=DbType.String, Value=usuario.Nome},
                    new NpgsqlParameter { ParameterName="SobreNome", DbType=DbType.String, Value=usuario.SobreNome},
                    new NpgsqlParameter { ParameterName="Cpf",       DbType=DbType.String, Value=usuario.Cpf},
                    new NpgsqlParameter { ParameterName="Rg",        DbType=DbType.String, Value=usuario.Rg},
                    new NpgsqlParameter { ParameterName="Email",     DbType=DbType.String, Value=usuario.Email},
                    new NpgsqlParameter { ParameterName="Telefone",  DbType=DbType.String, Value=usuario.Telefone},
                };

                using (var cmd = new NpgsqlCommand(
                    "INSERT INTO \"Cruds\".usuario (nome, sobrenome, cpf, rg, email, telefone) " +
                    "VALUES(@Nome, @SobreNome, @Cpf, @Rg, @Email, @Telefone);", db))
                {
                    cmd.Parameters.AddRange(pam);
                    cmd.ExecuteNonQuery();
                }
                db.Close();
            }
        }

        public void EditUsuario(Usuario usuario)
        {
            using (NpgsqlConnection conexao = new NpgsqlConnection(strconnection))
            {
                conexao.Update(usuario);
            }
        }

        public void DeleteUsuario(int idUsuario)
        {
            using (NpgsqlConnection db = new NpgsqlConnection(strconnection))
            {
                db.Open();
                var pam = new NpgsqlParameter[]
                {
                    new NpgsqlParameter { ParameterName="Id",      DbType=DbType.Int32, Value=idUsuario},
                };

                using (var cmd = new NpgsqlCommand("DELETE FROM \"Cruds\".usuario WHERE id = 0;", db))
                {
                    cmd.Parameters.AddRange(pam);
                    cmd.ExecuteNonQuery();
                }
                db.Close();
            }
        }
    }
}
