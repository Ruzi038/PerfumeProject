namespace PerfumeApi.Models
{
    public class Perfume
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Brand { get; set; } = "";
        public string Gender { get; set; } = "";
        public string Season { get; set; } = "";
        public string Longevity { get; set; } = "";
        public decimal Price { get; set; }
        public string ImageUrl { get; set; } = "";
    }
}
