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
    [Route("api/GiftCert")]
    public class GiftCertController : Controller
    {
        private readonly MarcoPoloGCDBContext _context;

        public GiftCertController(MarcoPoloGCDBContext context)
        {
            _context = context;
        }

        // GET: api/GiftCert
        [HttpGet]
        public IEnumerable<GiftCert> GetGiftCert()
        {
            return _context.GiftCert;
        }

        // GET: api/GiftCert/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGiftCert([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var GiftCert = await _context.GiftCert.SingleOrDefaultAsync(m => m.Id == id);

            if (GiftCert == null)
            {
                return NotFound();
            }

            return Ok(GiftCert);
        }

        // PUT: api/GiftCert/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGiftCert([FromRoute] int id, [FromBody] GiftCert GiftCert)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != GiftCert.Id)
            {
                return BadRequest();
            }

            GiftCert.ModifiedDate = DateTime.Now;
            GiftCert.LastModifiedBy = "leila";

            _context.Entry(GiftCert).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GiftCertExists(id))
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

        // POST: api/GiftCert
        [HttpPost]
        public async Task<IActionResult> PostGiftCert([FromBody] GiftCert GiftCert)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            GiftCert.CreatedDate = DateTime.Now;
            GiftCert.ModifiedDate = DateTime.Now;
            GiftCert.LastModifiedBy = "leila";

            _context.GiftCert.Add(GiftCert);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGiftCert", new { id = GiftCert.Id }, GiftCert);
        }

        // DELETE: api/GiftCert/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGiftCert([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var GiftCert = await _context.GiftCert.SingleOrDefaultAsync(m => m.Id == id);
            if (GiftCert == null)
            {
                return NotFound();
            }

            _context.GiftCert.Remove(GiftCert);
            await _context.SaveChangesAsync();

            return Ok(GiftCert);
        }

        private bool GiftCertExists(int id)
        {
            return _context.GiftCert.Any(e => e.Id == id);
        }
    }
}