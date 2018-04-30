using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GiftCertApp.Models;

namespace GiftCertApp.Controllers
{
    public class GiftCertController : Controller
    {
        private readonly MarcoPoloGCDBContext _context;

        public GiftCertController(MarcoPoloGCDBContext context)
        {
            _context = context;
        }

        // GET: GiftCert
        public async Task<IActionResult> Index()
        {
            var marcoPoloGCDBContext = _context.GiftCert.Include(g => g.GcType);
            return View(await marcoPoloGCDBContext.ToListAsync());
        }

        // GET: GiftCert/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var GiftCert = await _context.GiftCert
                .Include(g => g.GcType)
                .SingleOrDefaultAsync(m => m.Id == id);
            if (GiftCert == null)
            {
                return NotFound();
            }

            return View(GiftCert);
        }

        // GET: GiftCert/Create
        public IActionResult Create()
        {
            ViewData["GcTypeId"] = new SelectList(_context.GcType, "Id", "Id");
            return View();
        }

        // POST: GiftCert/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,GcTypeId,Value,IssuanceDate,DtipermitNo,ExpirationDate,LastModifiedBy,CreatedDate,ModifiedDate,Qrcode,Active,GiftCertNo,Note")] GiftCert GiftCert)
        {
            if (ModelState.IsValid)
            {
                _context.Add(GiftCert);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["GcTypeId"] = new SelectList(_context.GcType, "Id", "Id", GiftCert.GcTypeId);
            return View(GiftCert);
        }

        // GET: GiftCert/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var GiftCert = await _context.GiftCert.SingleOrDefaultAsync(m => m.Id == id);
            if (GiftCert == null)
            {
                return NotFound();
            }
            ViewData["GcTypeId"] = new SelectList(_context.GcType, "Id", "Id", GiftCert.GcTypeId);
            return View(GiftCert);
        }

        // POST: GiftCert/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,GcTypeId,Value,IssuanceDate,DtipermitNo,ExpirationDate,LastModifiedBy,CreatedDate,ModifiedDate,Qrcode,Active,GiftCertNo,Note")] GiftCert GiftCert)
        {
            if (id != GiftCert.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(GiftCert);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!GiftCertExists(GiftCert.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["GcTypeId"] = new SelectList(_context.GcType, "Id", "Id", GiftCert.GcTypeId);
            return View(GiftCert);
        }

        // GET: GiftCert/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var GiftCert = await _context.GiftCert
                .Include(g => g.GcType)
                .SingleOrDefaultAsync(m => m.Id == id);
            if (GiftCert == null)
            {
                return NotFound();
            }

            return View(GiftCert);
        }

        // POST: GiftCert/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var GiftCert = await _context.GiftCert.SingleOrDefaultAsync(m => m.Id == id);
            _context.GiftCert.Remove(GiftCert);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool GiftCertExists(int id)
        {
            return _context.GiftCert.Any(e => e.Id == id);
        }
    }
}
