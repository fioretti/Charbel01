﻿using System;
using System.Collections.Generic;

namespace GiftCertApp.Models
{
    public partial class Outlet
    {
        public Outlet()
        {
            Gcoutlet = new HashSet<Gcoutlet>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool? Active { get; set; }

        public ICollection<Gcoutlet> Gcoutlet { get; set; }
    }
}