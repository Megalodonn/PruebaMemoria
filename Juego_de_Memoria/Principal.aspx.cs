using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Juego_de_Memoria
{
    public partial class Principal : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string GetEstado(string Intentos, string Correctas)
        {
            try
            {
                var metodo = new Principal();
                //metodo.ViewState["Intentos"] = Intentos;
                //metodo.ViewState["Correctas"] = Correctas;

                metodo.Session["Intentos"] = Intentos;
                metodo.Session["Correctas"] = Correctas;

                //string jsonFolder = System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\File\reg.txt");

                //string tt = metodo.ViewState["Intentos"].ToString();
                //string tt1 = metodo.Session["Intentos"].ToString();

            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex.Message);
            }
            finally
            {
                StreamWriter sw = new StreamWriter(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\Juego_de_Memoria\File\reg.txt"));
                //sw.WriteLine("Intentos : " + Intentos);
                //sw.WriteLine("Correctas : " + Correctas);
                sw.WriteLine(Intentos+","+ Correctas);
                //sw.WriteLine(Correctas);
                sw.Close();


            }
            return "Exito";
        }
  
    }
}