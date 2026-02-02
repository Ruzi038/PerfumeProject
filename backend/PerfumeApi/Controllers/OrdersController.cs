using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PerfumeApi.Data;
using PerfumeApi.Models;

namespace PerfumeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _db;

        public OrdersController(AppDbContext db)
        {
            _db = db;
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] List<int> cart)
        {
            if (cart == null || cart.Count == 0)
                return BadRequest("Cart is empty");

            var clientId = Request.Headers["X-Client-Id"].FirstOrDefault() ?? "guest";

            var perfumes = await _db.Perfumes
                .Where(p => cart.Contains(p.Id))
                .ToListAsync();

            var order = new Order
            {
                ClientId = clientId,
                CreatedAt = DateTime.UtcNow
            };

            order.Items = perfumes
                .GroupBy(p => p.Id)
                .Select(g => new OrderItem
                {
                    PerfumeId = g.Key,
                    Quantity = cart.Count(id => id == g.Key),
                    UnitPrice = g.First().Price
                })
                .ToList();

            order.TotalPrice = order.Items.Sum(i => i.Quantity * i.UnitPrice);

            _db.Orders.Add(order);
            await _db.SaveChangesAsync();

            return Ok(order);
        }
    }
}
