using System;
using System.Collections.Generic;

namespace GiftCertApp.Models
{
    public partial class ServicesType
    {
        public ServicesType()
        {
            GcServicesType = new HashSet<GcServicesType>();
        }

        public int Id { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Name { get; set; }
        public bool? Active { get; set; }

        public ICollection<GcServicesType> GcServicesType { get; set; }
    }
}
