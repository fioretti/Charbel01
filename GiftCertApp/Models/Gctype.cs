﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace GiftCertApp.Models
{
    public partial class GcType
    {
        public GcType()
        {
            GiftCert = new HashSet<GiftCert>();
        }

        public int Id { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Name { get; set; }
        public bool? Active { get; set; }

        [JsonIgnore]
        public ICollection<GiftCert> GiftCert { get; set; }
    }
}
