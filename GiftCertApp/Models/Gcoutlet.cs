﻿using System;
using System.Collections.Generic;

namespace GiftCertApp.Models
{
    public partial class GcOutlet
    {
        public int Id { get; set; }
        public int? GiftCertId { get; set; }
        public int? OutletId { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool? Active { get; set; }

        public GiftCert GiftCert { get; set; }
        public Outlet Outlet { get; set; }
    }
}
