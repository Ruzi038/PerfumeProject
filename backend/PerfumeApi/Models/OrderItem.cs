namespace PerfumeApi.Models
{
    public class OrderItem
    {
        public int Id { get; set; }

        public int PerfumeId { get; set; }
        public Perfume? Perfume { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

        public int OrderId { get; set; }
    }
}
