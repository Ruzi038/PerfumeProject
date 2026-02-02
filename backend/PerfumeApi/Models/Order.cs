using System.ComponentModel.DataAnnotations;

namespace PerfumeApi.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        public string ClientId { get; set; } = "";

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public decimal TotalPrice { get; set; }

        public List<OrderItem> Items { get; set; } = new();
    }
}
