using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GiftCertApp.Models.Enum
{ 
    public enum GiftCertStatus
    {
        Draft = 1,
        Requested = 2,
        Acceptance = 3,
        OnHold = 4,

        LabQueue = 10,
        LabWiP = 11,

        QualityQueue = 20,
        Quality = 21,
        QualityRejected = 22,

        DatasheetQueue = 30,
        DatasheetProcess = 31,
        DatasheetApproval = 32,
        DatasheetRejected = 33,
        DatasheetPostProcess = 34,

        Canceled = 90,
        RequestRejected = 91,

        Closed = 100
    }
}
