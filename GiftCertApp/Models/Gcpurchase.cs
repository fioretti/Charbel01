using System;
using System.Collections.Generic;

namespace GiftCertApp.Models
{
    public partial class Gcpurchase
    {
        public int Id { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool? Active { get; set; }
        public int? GiftCertId { get; set; }
        public string Remarks { get; set; }
        public string PaymentMode { get; set; }
        public string Ccnumber { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public string CardType { get; set; }

        public GiftCertificate GiftCert { get; set; }
    }
}
