using GiftCertApp.Models.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GiftCertApp.Models.Data
{
    public class GiftCertRequest
    {
        public IList<GiftCertStatus> Status { get; set; }
        public DateTime? RequestedDateFrom { get; set; }
        public DateTime? RequestedDateTo { get; set; }
    }
}
