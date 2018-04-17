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
            var marcoPoloGCDBContext = _context.GiftCertificate.Include(g => g.Gctype);
            return View(await marcoPoloGCDBContext.ToListAsync());
        }

        // GET: GiftCert/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var giftCertificate = await _context.GiftCertificate
                .Include(g => g.Gctype)
                .SingleOrDefaultAsync(m => m.Id == id);
            if (giftCertificate == null)
            {
                return NotFound();
            }

            return View(giftCertificate);
        }

        // GET: GiftCert/Create
        public IActionResult Create()
        {
            ViewData["GctypeId"] = new SelectList(_context.Gctype, "Id", "Id");
            return View();
        }

        // POST: GiftCert/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,GctypeId,Value,IssuanceDate,DtipermitNo,ExpirationDate,LastModifiedBy,CreatedDate,ModifiedDate,Qrcode,Active,GiftCertNo,Note")] GiftCertificate giftCertificate)
        {
            if (ModelState.IsValid)
            {
                _context.Add(giftCertificate);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["GctypeId"] = new SelectList(_context.Gctype, "Id", "Id", giftCertificate.GctypeId);
            return View(giftCertificate);
        }

        // GET: GiftCert/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var giftCertificate = await _context.GiftCertificate.SingleOrDefaultAsync(m => m.Id == id);
            if (giftCertificate == null)
            {
                return NotFound();
            }
            ViewData["GctypeId"] = new SelectList(_context.Gctype, "Id", "Id", giftCertificate.GctypeId);
            return View(giftCertificate);
        }

        // POST: GiftCert/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,GctypeId,Value,IssuanceDate,DtipermitNo,ExpirationDate,LastModifiedBy,CreatedDate,ModifiedDate,Qrcode,Active,GiftCertNo,Note")] GiftCertificate giftCertificate)
        {
            if (id != giftCertificate.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(giftCertificate);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!GiftCertificateExists(giftCertificate.Id))
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
            ViewData["GctypeId"] = new SelectList(_context.Gctype, "Id", "Id", giftCertificate.GctypeId);
            return View(giftCertificate);
        }

        // GET: GiftCert/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var giftCertificate = await _context.GiftCertificate
                .Include(g => g.Gctype)
                .SingleOrDefaultAsync(m => m.Id == id);
            if (giftCertificate == null)
            {
                return NotFound();
            }

            return View(giftCertificate);
        }

        // POST: GiftCert/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var giftCertificate = await _context.GiftCertificate.SingleOrDefaultAsync(m => m.Id == id);
            _context.GiftCertificate.Remove(giftCertificate);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool GiftCertificateExists(int id)
        {
            return _context.GiftCertificate.Any(e => e.Id == id);
        }
    }
}
