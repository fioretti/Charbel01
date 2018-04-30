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
    [Route("api/GcType")]
    public class GcTypeController : Controller
    {
        private readonly MarcoPoloGCDBContext _context;

        public GcTypeController(MarcoPoloGCDBContext context)
        {
            _context = context;
        }

        // GET: api/GcType
        [HttpGet]
        public IEnumerable<GcType> GetGcType()
        {
            return _context.GcType;
        }

        // GET: api/GcType/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGcType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var GcType = await _context.GcType.SingleOrDefaultAsync(m => m.Id == id);

            if (GcType == null)
            {
                return NotFound();
            }

            return Ok(GcType);
        }

        // PUT: api/GcType/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGcType([FromRoute] int id, [FromBody] GcType GcType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != GcType.Id)
            {
                return BadRequest();
            }

            GcType.ModifiedDate = DateTime.Now;
            GcType.LastModifiedBy = "leila";

            _context.Entry(GcType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GcTypeExists(id))
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

        // POST: api/GcType
        [HttpPost]
        public async Task<IActionResult> PostGcType([FromBody] GcType GcType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            GcType.CreatedDate = DateTime.Now;
            GcType.ModifiedDate = DateTime.Now;
            GcType.LastModifiedBy = "leila";

            _context.GcType.Add(GcType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGcType", new { id = GcType.Id }, GcType);
        }

        // DELETE: api/GcType/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGcType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var GcType = await _context.GcType.SingleOrDefaultAsync(m => m.Id == id);
            if (GcType == null)
            {
                return NotFound();
            }

            _context.GcType.Remove(GcType);
            await _context.SaveChangesAsync();

            return Ok(GcType);
        }

        private bool GcTypeExists(int id)
        {
            return _context.GcType.Any(e => e.Id == id);
        }
    }
}