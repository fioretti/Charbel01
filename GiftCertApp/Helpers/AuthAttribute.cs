using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using GiftCertApp.Models.Data;
using GiftCertApp.Models.General;
using GiftCertApp.Services;

namespace GiftCertApp.Helpers
{
  public class AuthAttribute : AuthorizeAttribute
  {
    private readonly string[] _actions;

    public AuthAttribute(params string[] actions)
    {
      if (actions == null)
        actions = new string[] {};

      _actions = actions;
    }

    public override void OnAuthorization(AuthorizationContext filterContext)
    {
      var httpContext = filterContext.RequestContext.HttpContext;
      var principal = httpContext.User;
      var ldapUser = principal.Identity.Name;

      var dependencyResolver = DependencyResolver.Current;
      var userService = (UserService) dependencyResolver.GetService(typeof(UserService));

      var user = userService.GetUser(ldapUser);

      if (user == null)
      {
        SetNoPermissionResult(filterContext);
        return;
      }

      bool hasPermission;

      if (_actions.Length > 0)
      {
        var securityHelper = (SecurityHelper) dependencyResolver.GetService(typeof(SecurityHelper));
        hasPermission = securityHelper.Validate(_actions, user.Roles);
      }
      else
      {
        hasPermission = true;
      }

      if (!hasPermission)
      {
        SetNoPermissionResult(filterContext);
        return;
      }

      SetIdentity(httpContext, user, ldapUser);
    }

    private static void SetNoPermissionResult(AuthorizationContext filterContext)
    {
      var values = new RouteValueDictionary(new
      {
        action = "NoPermission",
        controller = "Error"
      });

      filterContext.Result = new RedirectToRouteResult(values);
    }

    private static void SetIdentity(HttpContextBase httpContext, User user, string ldapUser)
    {
      var userAuthData = new LmdAuthenticatedUserData
      {
        Id = user.Id,
        FirstName = user.FirstName,
        LastName = user.LastName,
        Roles = user.Roles
      };

      var identity = new GenericIdentity(ldapUser, "NTLM");
      var principal = new LmdPrincipal(identity) {UserData = userAuthData};

      httpContext.User = principal;
    }
  }
}