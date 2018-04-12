using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GiftCertApp.Models;
using AutoMapper;
using GiftCertApp.Models.Data;

namespace GiftCertApp.Controllers
{
    public class ServiceTypeController : Controller
    {
        private readonly MarcoPoloGCDBContext _context;

        public ServiceTypeController(MarcoPoloGCDBContext context)
        {
            _context = context;
        }

        // GET: ServicesTypes
        public async Task<IActionResult> Index()
        {
            return View(await _context.ServicesType.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Insert([Bind("id,name,active")] ServicesType servicesType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Add(servicesType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServicesType", new { id = servicesType.Id }, servicesType);

            //  return servicesType;
            //var isOk = _service.Insert(deviceType);
            //return new JsonDotNetResult
            //{
            //    Data = new JsonResponse<DeviceType>
            //    {
            //        Ok = isOk,
            //        Payload = deviceType
            //    }
            //};
        }


        // GET: ServicesTypes/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var servicesType = await _context.ServicesType
                .SingleOrDefaultAsync(m => m.Id == id);
            if (servicesType == null)
            {
                return NotFound();
            }

            return View(servicesType);
        }

        // GET: ServicesTypes/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: ServicesTypes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,LastModifiedBy,CreatedDate,ModifiedDate,Name")] ServicesType servicesType)
        {
            if (ModelState.IsValid)
            {
                _context.Add(servicesType);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(servicesType);
        }

        // GET: ServicesTypes/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var servicesType = await _context.ServicesType.SingleOrDefaultAsync(m => m.Id == id);
            if (servicesType == null)
            {
                return NotFound();
            }
            return View(servicesType);
        }

        // POST: ServicesTypes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,LastModifiedBy,CreatedDate,ModifiedDate,Name")] ServicesType servicesType)
        {
            if (id != servicesType.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(servicesType);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ServicesTypeExists(servicesType.Id))
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
            return View(servicesType);
        }

        // GET: ServicesTypes/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var servicesType = await _context.ServicesType
                .SingleOrDefaultAsync(m => m.Id == id);
            if (servicesType == null)
            {
                return NotFound();
            }

            return View(servicesType);
        }

        // POST: ServicesTypes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var servicesType = await _context.ServicesType.SingleOrDefaultAsync(m => m.Id == id);
            _context.ServicesType.Remove(servicesType);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ServicesTypeExists(int id)
        {
            return _context.ServicesType.Any(e => e.Id == id);
        }
    }
}
