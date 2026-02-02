namespace PerfumeApi.Models
{
    public class Favorite
    {
        public int Id { get; set; }

        public string ClientId { get; set; } = "";

        public int PerfumeId { get; set; }
    }
}
