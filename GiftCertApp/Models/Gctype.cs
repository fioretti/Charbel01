using System;
using System.Collections.Generic;

namespace GiftCertApp.Models
{
    public partial class Gctype
    {
        public Gctype()
        {
            GiftCertificate = new HashSet<GiftCertificate>();
        }

        public int Id { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Name { get; set; }
        public bool? Active { get; set; }

        public ICollection<GiftCertificate> GiftCertificate { get; set; }
    }
}
