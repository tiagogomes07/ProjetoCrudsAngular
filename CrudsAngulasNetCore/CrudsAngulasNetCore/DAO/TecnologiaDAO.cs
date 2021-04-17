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
    public class TecnologiaDAO
    {
        private IConfiguration _configuracoes;
        private static string strconnection;

        public TecnologiaDAO(IConfiguration config)
        {
            strconnection = config["postgres"];
            _configuracoes = config;
        }

        public IEnumerable<Tecnologia> ListarTodos()
        {
            using (NpgsqlConnection conexao = new NpgsqlConnection(strconnection))
            {
                return conexao.GetAll<Tecnologia>();
            }
        }

        public Tecnologia Get(int id)
        {
            using (NpgsqlConnection conexao = new NpgsqlConnection(strconnection))
            {
                return conexao.Get<Tecnologia>(id);
            }
        }

        public void AddTecnologia(Tecnologia tecnologia)
        {
            using (NpgsqlConnection db = new NpgsqlConnection(strconnection))
            {
                db.Open();
                var pam = new NpgsqlParameter[]
                {
                    new NpgsqlParameter { ParameterName="Nome",      DbType=DbType.String, Value=tecnologia.Nome},
                    new NpgsqlParameter { ParameterName="Apelido",   DbType=DbType.String, Value=tecnologia.Apelido},
                    new NpgsqlParameter { ParameterName="Utilidade", DbType=DbType.String, Value=tecnologia.Utilidade},
                };

                using (var cmd = new NpgsqlCommand(
                    "INSERT INTO \"Cruds\".tecnologia (nome, apelido, utilidade) " +
                    "VALUES(@Nome, @Apelido, @Utilidade);", db))
                {
                    cmd.Parameters.AddRange(pam);
                    cmd.ExecuteNonQuery();
                }
                db.Close();
            }
        }

        public void EditTecnologia(Tecnologia tecnologia)
        {
            using (NpgsqlConnection db = new NpgsqlConnection(strconnection))
            {
                db.Open();
                var pam = new NpgsqlParameter[]
                {
                    new NpgsqlParameter { ParameterName="Id",        DbType=DbType.Int32, Value=tecnologia.Id},
                    new NpgsqlParameter { ParameterName="Nome",      DbType=DbType.String, Value=tecnologia.Nome},
                    new NpgsqlParameter { ParameterName="Apelido",   DbType=DbType.String, Value=tecnologia.Apelido},
                    new NpgsqlParameter { ParameterName="Utilidade", DbType=DbType.String, Value=tecnologia.Utilidade},
                };

                using (var cmd = new NpgsqlCommand(
                    "UPDATE \"Cruds\".tecnologia " +
                    "SET nome=@Nome, apelido=@Apelido, utilidade=@Utilidade " +
                    "WHERE Id=@Id;", db))
                {
                    cmd.Parameters.AddRange(pam);
                    cmd.ExecuteNonQuery();
                }
                db.Close();
            }
        }

        public void DeleteTecnologia(int id)
        {
            using (NpgsqlConnection db = new NpgsqlConnection(strconnection))
            {
                db.Open();
                var pam = new NpgsqlParameter[]
                {
                    new NpgsqlParameter { ParameterName="Id",      DbType=DbType.Int32, Value=id},
                };

                using (var cmd = new NpgsqlCommand("DELETE FROM \"Cruds\".tecnologia WHERE id = @Id;", db))
                {
                    cmd.Parameters.AddRange(pam);
                    cmd.ExecuteNonQuery();
                }
                db.Close();
            }
        }
    }
}
