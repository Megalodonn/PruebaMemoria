using apiprueba.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;

namespace apiprueba.Data_Estados
{
    public class Estados
    {
        public static List<Estado> LisstarEstado()
        {
            List<Estado> ListEstado = new List<Estado>();

            try
            {
                string line;
                string RutaFile = ConfigurationManager.AppSettings["File"] + "\\reg.txt";
                Estado estados = new Estado();
                //StreamReader sr = new StreamReader("C:\\Sample.txt");
                //StreamReader sr = new StreamReader(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\ServicioMemoria\File\reg.txt"));
                StreamReader sr = new StreamReader(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, RutaFile));
                line = sr.ReadLine();
                while (line != null)
                {
                    string[] words = line.Split(',');
                    estados.Intentos = words[0].ToString();
                    estados.Correctas = words[1].ToString();
                    ListEstado.Add(estados);
                    //Console.WriteLine(line);
                    line = sr.ReadLine();
                }
                sr.Close();

                //var metodo = new Estados();
                //estados.Intentos = metodo.Session["Intentos"].ToString();
                //estados.Correctas =
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex.Message);
            }
            finally
            {
                //blorden = null;
            }

            return ListEstado;
        }
    }
}