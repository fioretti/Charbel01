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
        public IEnumerable<GiftCertificate> GetGiftCertificate()
        {
            return _context.GiftCertificate;
        }

        // GET: api/GiftCert/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGiftCertificate([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var giftCertificate = await _context.GiftCertificate.SingleOrDefaultAsync(m => m.Id == id);

            if (giftCertificate == null)
            {
                return NotFound();
            }

            return Ok(giftCertificate);
        }

        // PUT: api/GiftCert/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGiftCertificate([FromRoute] int id, [FromBody] GiftCertificate giftCertificate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != giftCertificate.Id)
            {
                return BadRequest();
            }

            giftCertificate.ModifiedDate = DateTime.Now;
            giftCertificate.LastModifiedBy = "leila";

            _context.Entry(giftCertificate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GiftCertificateExists(id))
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
        public async Task<IActionResult> PostGiftCertificate([FromBody] GiftCertificate giftCertificate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            giftCertificate.CreatedDate = DateTime.Now;
            giftCertificate.ModifiedDate = DateTime.Now;
            giftCertificate.LastModifiedBy = "leila";

            _context.GiftCertificate.Add(giftCertificate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGiftCertificate", new { id = giftCertificate.Id }, giftCertificate);
        }

        // DELETE: api/GiftCert/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGiftCertificate([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var giftCertificate = await _context.GiftCertificate.SingleOrDefaultAsync(m => m.Id == id);
            if (giftCertificate == null)
            {
                return NotFound();
            }

            _context.GiftCertificate.Remove(giftCertificate);
            await _context.SaveChangesAsync();

            return Ok(giftCertificate);
        }

        private bool GiftCertificateExists(int id)
        {
            return _context.GiftCertificate.Any(e => e.Id == id);
        }
    }
}