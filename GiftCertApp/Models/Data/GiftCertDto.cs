using GiftCertApp.Abstracts;
using GiftCertApp.Models.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GiftCertApp.Models.Data
{
    public class GiftCertDto : IDatabaseEntity
    {
        public int Id { get; set; }
        public int? GcTypeId { get; set; }
        public decimal? Value { get; set; }
        public DateTime? IssuanceDate { get; set; }
        public string DtipermitNo { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Qrcode { get; set; }
        public bool? Active { get; set; }
        public string GiftCertNo { get; set; }
        public string Note { get; set; }

        public GiftCertStatus Status { get; set; }
    }
}
