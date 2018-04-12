using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GiftCertApp.Models.General
{
  public class NewAccessRequest : EmailBaseTemplate
  {
    public string Justification { get; set; }
    public string UserName { get; set; }
    public NewAccessRequest(string viewName) : base(viewName)
    {
    }
  }
}