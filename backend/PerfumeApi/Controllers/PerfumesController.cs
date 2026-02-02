using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PerfumeApi.Data;

namespace PerfumeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PerfumesController : ControllerBase
    {
        private readonly AppDbContext _db;

        public PerfumesController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var perfumes = await _db.Perfumes.ToListAsync();
            return Ok(perfumes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var perfume = await _db.Perfumes.FindAsync(id);

            if (perfume == null)
                return NotFound();

            return Ok(perfume);
        }
    }
}
