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
    public class GcTypeController : Controller
    {
        private readonly MarcoPoloGCDBContext _context;

        public GcTypeController(MarcoPoloGCDBContext context)
        {
            _context = context;
        }

        // GET: GcType
        public async Task<IActionResult> Index()
        {
            return View(await _context.GcType.ToListAsync());
        }

        // GET: GcType/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var GcType = await _context.GcType
                .SingleOrDefaultAsync(m => m.Id == id);
            if (GcType == null)
            {
                return NotFound();
            }

            return View(GcType);
        }

        // GET: GcType/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: GcType/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,LastModifiedBy,CreatedDate,ModifiedDate,Name,Active")] GcType GcType)
        {
            if (ModelState.IsValid)
            {
                _context.Add(GcType);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(GcType);
        }

        // GET: GcType/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var GcType = await _context.GcType.SingleOrDefaultAsync(m => m.Id == id);
            if (GcType == null)
            {
                return NotFound();
            }
            return View(GcType);
        }

        // POST: GcType/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,LastModifiedBy,CreatedDate,ModifiedDate,Name,Active")] GcType GcType)
        {
            if (id != GcType.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(GcType);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!GcTypeExists(GcType.Id))
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
            return View(GcType);
        }

        // GET: GcType/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var GcType = await _context.GcType
                .SingleOrDefaultAsync(m => m.Id == id);
            if (GcType == null)
            {
                return NotFound();
            }

            return View(GcType);
        }

        // POST: GcType/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var GcType = await _context.GcType.SingleOrDefaultAsync(m => m.Id == id);
            _context.GcType.Remove(GcType);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool GcTypeExists(int id)
        {
            return _context.GcType.Any(e => e.Id == id);
        }
    }
}
