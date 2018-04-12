using System;
using System.Linq;
using System.Security.Principal;

namespace GiftCertApp.Models.General
{
  public class Principal : IPrincipal
  {
    public bool IsInRole(string action)
    {
      return UserData.Roles
                .SelectMany(role => role.Actions)
                .Any(roleAction => string.Equals(roleAction.Name, action, StringComparison.InvariantCultureIgnoreCase));
    }

    public AuthenticatedUserData UserData { get; set; }
    public IIdentity Identity { get; private set; }

    public Principal(IIdentity identity)
    {
      Identity = identity;
      UserData = new AuthenticatedUserData();
    }
  }
}