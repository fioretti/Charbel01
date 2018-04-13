﻿using System;
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
    [Route("api/Outlet")]
    public class OutletController : Controller
    {
        private readonly MarcoPoloGCDBContext _context;

        public OutletController(MarcoPoloGCDBContext context)
        {
            _context = context;
        }

        // GET: api/Outlet
        [HttpGet]
        public IEnumerable<Outlet> GetOutlet()
        {
            return _context.Outlet;
        }

        // GET: api/Outlet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOutlet([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var outlet = await _context.Outlet.SingleOrDefaultAsync(m => m.Id == id);

            if (outlet == null)
            {
                return NotFound();
            }

            return Ok(outlet);
        }

        // PUT: api/Outlet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOutlet([FromRoute] int id, [FromBody] Outlet outlet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != outlet.Id)
            {
                return BadRequest();
            }

            outlet.ModifiedDate = DateTime.Now;
            outlet.LastModifiedBy = "leila";

            _context.Entry(outlet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OutletExists(id))
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

        // POST: api/Outlet
        [HttpPost]
        public async Task<IActionResult> PostOutlet([FromBody] Outlet outlet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            outlet.CreatedDate = DateTime.Now;
            outlet.ModifiedDate = DateTime.Now;
            outlet.LastModifiedBy = "leila";

            _context.Outlet.Add(outlet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOutlet", new { id = outlet.Id }, outlet);
        }

        // DELETE: api/Outlet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOutlet([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var outlet = await _context.Outlet.SingleOrDefaultAsync(m => m.Id == id);
            if (outlet == null)
            {
                return NotFound();
            }

            _context.Outlet.Remove(outlet);
            await _context.SaveChangesAsync();

            return Ok(outlet);
        }

        private bool OutletExists(int id)
        {
            return _context.Outlet.Any(e => e.Id == id);
        }
    }
}