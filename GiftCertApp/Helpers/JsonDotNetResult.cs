using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace LabManagementDatabase.Helpers
{
  public class JsonDotNetResult : JsonResult
  {
    private static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
    {
      ContractResolver = new CamelCasePropertyNamesContractResolver(),
    };

        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public override void ExecuteResult(ControllerContext context)
    {
      if (this.JsonRequestBehavior == JsonRequestBehavior.DenyGet &&
          string.Equals(context.HttpContext.Request.HttpMethod, "GET", StringComparison.OrdinalIgnoreCase))
      {
        throw new InvalidOperationException("GET request not allowed");
      }

      var response = context.HttpContext.Response;

      response.ContentType = !string.IsNullOrEmpty(this.ContentType) ? this.ContentType : "application/json";

      if (this.ContentEncoding != null)
      {
        response.ContentEncoding = this.ContentEncoding;
      }

      if (this.Data == null)
      {
        return;
      }

      response.Write(JsonConvert.SerializeObject(this.Data, Settings));
    }

        public override void ExecuteResult(ActionContext context)
        {
            base.ExecuteResult(context);
        }

        public override Task ExecuteResultAsync(ActionContext context)
        {
            return base.ExecuteResultAsync(context);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override string ToString()
        {
            return base.ToString();
        }
    }
}