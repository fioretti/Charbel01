using System.Collections.Generic;
using GiftCertApp.Abstracts;

namespace GiftCertApp.Models.Data
{
  public class Role : INamedEntity
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public IList<Action> Actions { get; set; }
    public bool EmailNotification { get; set; }

    public Role()
    {
      Actions = new List<Action>();
    }
  }
}