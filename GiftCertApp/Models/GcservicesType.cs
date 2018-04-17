using System;
using System.Collections.Generic;

namespace GiftCertApp.Models
{
    public partial class GcservicesType
    {
        public int Id { get; set; }
        public int? ServicesTypeId { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool? Active { get; set; }
        public int? GiftCertId { get; set; }

        public GiftCertificate GiftCert { get; set; }
        public ServicesType ServicesType { get; set; }
    }
}
