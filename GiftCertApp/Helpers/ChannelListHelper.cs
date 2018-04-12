using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GiftCertApp.Models.Data;

namespace GiftCertApp.Helpers
{
  public class ChannelListHelper
  {
    public void InjectNaOption(IList<Channel> channels)
    {
      channels.Insert(0, new Channel
      {
        Id = 0,
        Name = "N/A"
      });
    }
  }
}