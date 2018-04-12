namespace GiftCertApp.Models.General
{
  public class JsonResponse<T>
  {
    public bool Ok { get; set; }
    public T Payload { get; set; }
  }
}