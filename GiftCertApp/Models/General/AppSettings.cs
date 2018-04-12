namespace GiftCertApp.Models.General
{
  public class AppSettings
  {
    public string ConnectionString { get; set; }
    public string AdConnectionString { get; set; }
    public string BaseUrl { get; set; }
    public string EmailServiceAccount { get; set; }

    public bool IsValid()
    {
      return !string.IsNullOrEmpty(BaseUrl)
        && !string.IsNullOrEmpty(ConnectionString)
        && !string.IsNullOrEmpty(EmailServiceAccount)
        && !string.IsNullOrEmpty(AdConnectionString);
    }
  }
}