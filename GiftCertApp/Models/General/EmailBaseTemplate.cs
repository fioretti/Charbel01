using Postal;

namespace GiftCertApp.Models.General
{
  public class EmailBaseTemplate : Email
  {
    public EmailBaseTemplate(string viewName) : base(viewName)
    {
    }

    public string Title { get; set; }
    public string Subject { get; set; }
    public string From { get; set; }
    public string To { get; set; }
    public object Cc { get; set; }
  }
}