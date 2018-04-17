using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GiftCertApp.Models;

namespace GiftCertApp.Api
{
    [Produces("application/json")]
    [Route("api/ServiceType")]
    public class ServiceTypeController : Controller
    {
        private readonly MarcoPoloGCDBContext _context;

        public ServiceTypeController(MarcoPoloGCDBContext context)
        {
            _context = context;
        }

        // GET: api/ServiceType
        [HttpGet]
        public IEnumerable<ServicesType> GetServicesType()
        {
            return _context.ServicesType;
        }

        // GET: api/ServiceType/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetServicesType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var servicesType = await _context.ServicesType.SingleOrDefaultAsync(m => m.Id == id);

            if (servicesType == null)
            {
                return NotFound();
            }

            return Ok(servicesType);
        }

        // PUT: api/ServiceType/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServicesType([FromRoute] int id, [FromBody] ServicesType servicesType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != servicesType.Id)
            {
                return BadRequest();
            }
            
            servicesType.ModifiedDate = DateTime.Now;
            servicesType.LastModifiedBy = "leila";

            _context.Entry(servicesType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServicesTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ServiceType
        [HttpPost]
        public async Task<IActionResult> PostServicesType([FromBody] ServicesType servicesType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            servicesType.CreatedDate = DateTime.Now;
            servicesType.ModifiedDate = DateTime.Now;
            servicesType.LastModifiedBy = "leila";

            _context.ServicesType.Add(servicesType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServicesType", new { id = servicesType.Id}, servicesType);
        }

        // DELETE: api/ServiceType/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServicesType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var servicesType = await _context.ServicesType.SingleOrDefaultAsync(m => m.Id == id);
            if (servicesType == null)
            {
                return NotFound();
            }

            _context.ServicesType.Remove(servicesType);
            await _context.SaveChangesAsync();

            return Ok(servicesType);
        }

        private bool ServicesTypeExists(int id)
        {
            return _context.ServicesType.Any(e => e.Id == id);
        }
    }
}