using System;
using System.Text;

namespace GiftCertApp.Helpers
{
  public class DisplayInfoHelper
  {
    public static string FormatFullName(string firstName, string lastName, string department)
    {
      var display = new StringBuilder();

      display.AppendFormat("{0}, {1}",
        lastName, firstName);

      if (!string.IsNullOrEmpty(department))
      {
        display.AppendFormat(" ({0})",
        department);
      } 

      return display.ToString();
    }
  }
}