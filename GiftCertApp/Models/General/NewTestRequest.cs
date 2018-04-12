namespace GiftCertApp.Models.General
{
  public class NewTestRequest : EmailBaseTemplate
  {
    public NewTestRequest(string viewName) : base(viewName)
    {
    }

    public string ProjectCode { get; set; }
    public string KlusaCode { get; set; }
    public string Division { get; set; }
    public string BusinessLine { get; set; }
    public string RequestType { get; set; }
    public string RequesterComments { get; set; }
    public string Requester { get; set; }
    public string ViewUrl { get; set; }
    public string PartNumbers { get; set; }
  }
}