using System;
using System.Collections.Generic;

namespace GiftCertApp.Models
{
    public partial class Gcredemption
    {
        public int Id { get; set; }
        public DateTime? RedemptionDate { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? ModifiedDate { get; set; }
        public bool? Active { get; set; }
        public int? GiftCertId { get; set; }
        public string Remarks { get; set; }

        public GiftCertificate GiftCert { get; set; }
    }
}
