using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PerfumeApi.Data;
using PerfumeApi.Models;

namespace PerfumeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FavoritesController : ControllerBase
    {
        private readonly AppDbContext _db;

        public FavoritesController(AppDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<IActionResult> GetFavorites()
        {
            var clientId = Request.Headers["X-Client-Id"].FirstOrDefault() ?? "guest";

            var favorites = await _db.Favorites
                .Where(f => f.ClientId == clientId)
                .ToListAsync();

            return Ok(favorites);
        }
        [HttpPost]
        public async Task<IActionResult> AddFavorite([FromBody] Favorite favorite)
        {
            var clientId = Request.Headers["X-Client-Id"].FirstOrDefault() ?? "guest";
            favorite.ClientId = clientId;

            _db.Favorites.Add(favorite);
            await _db.SaveChangesAsync();

            return Ok(favorite);
        }
        [HttpDelete("{perfumeId}")]
        public async Task<IActionResult> RemoveFavorite(int perfumeId)
        {
            var clientId = Request.Headers["X-Client-Id"].FirstOrDefault() ?? "guest";

            var favorite = await _db.Favorites
                .FirstOrDefaultAsync(f => f.ClientId == clientId && f.PerfumeId == perfumeId);

            if (favorite == null)
                return NotFound();

            _db.Favorites.Remove(favorite);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
