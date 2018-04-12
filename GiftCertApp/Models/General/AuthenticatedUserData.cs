using System.Collections.Generic;
using GiftCertApp.Models.Data;

namespace GiftCertApp.Models.General
{
  public class AuthenticatedUserData
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public string DisplayName
    {
      get { return string.Format("{0} {1}", FirstName, LastName); }
    }

    public IList<Role> Roles { get; set; }
  }
}