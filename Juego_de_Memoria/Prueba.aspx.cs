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
    public partial class Prueba : System.Web.UI.Page
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
                var metodo = new Prueba();
                metodo.Estado();
                //string tt = metodo.ViewState["Intentos"].ToString();

            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex.Message);
            }
            finally
            {
            }
            return "Exito";
        }
        public void Estado()
        {
            //ViewState["Intentos"] = Intentos;
            string tt = ViewState["Intentos"].ToString();
            string tt1 = Session["Correctas"].ToString();
            //string uuuu = Path.Combine(Application.StartupPath, "reg.txt");
            string jsonFolder = System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\File\reg.txt");
        }
    }
}