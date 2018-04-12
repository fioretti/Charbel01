using System;
using System.Collections.Generic;
using System.Linq;
using GiftCertApp.Models.Data;

namespace GiftCertApp.Helpers
{
  public class SecurityHelper
  {
    public virtual bool Validate(string[] actions, IList<Role> roles)
    {
      return actions.Any(
        action => roles
                    .SelectMany(role => role.Actions)
                    .Any(c => string.Equals(c.Name, action, StringComparison.InvariantCultureIgnoreCase)));
    }

    public virtual bool Validate(string action, IList<Role> roles)
    {
      return Validate(new [] {action}, roles);
    }
  }
}