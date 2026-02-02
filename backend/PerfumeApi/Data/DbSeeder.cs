using PerfumeApi.Models;

namespace PerfumeApi.Data
{
    public static class DbSeeder
    {
        public static void Seed(AppDbContext context)
        {
            if (context.Perfumes.Any())
                return;

            context.Perfumes.AddRange(

                new Perfume {
                    Name = "Dior Sauvage",
                    Brand = "Dior",
                    Gender = "men",
                    Season = "all",
                    Longevity = "long",
                    Price = 95,
                    ImageUrl = "https://cdn.paris-avenues.com/image/cache/catalog/seo50/3348901486385-550x550.jpg"
                },

                new Perfume {
                    Name = "Bleu de Chanel",
                    Brand = "Chanel",
                    Gender = "men",
                    Season = "winter",
                    Longevity = "long",
                    Price = 120,
                    ImageUrl = "https://orchard.vn/wp-content/uploads/2015/01/chanel-bleu-de-chanel-edp_3.jpg"
                },

                new Perfume {
                    Name = "Tom Ford Oud Wood",
                    Brand = "Tom Ford",
                    Gender = "men",
                    Season = "fall",
                    Longevity = "long",
                    Price = 220,
                    ImageUrl = "https://www.lookfantastic.ie/images?url=https://static.thcdn.com/productimg/original/12709312-2145154277020969.jpg"
                },

                new Perfume {
                    Name = "Acqua di Gio Profumo",
                    Brand = "Giorgio Armani",
                    Gender = "men",
                    Season = "summer",
                    Longevity = "long",
                    Price = 135,
                    ImageUrl = "https://tidlon.com/wp-content/uploads/2022/07/1c0edb483eb8f37a19dfd0f004a3e5ca-e1657871077664.png"
                },

                new Perfume {
                    Name = "YSL La Nuit de l’Homme",
                    Brand = "Yves Saint Laurent",
                    Gender = "men",
                    Season = "fall",
                    Longevity = "moderate",
                    Price = 98,
                    ImageUrl = "https://www.yslbeauty.com/dw/image/v2/BDCR_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw91b2cfe8/images/PACKSHOTS/FRAGRANCE/FOR_HIM/WW-50356YSL_la-nuit-de-l-homme-edp/WW-50356YSL_la-nut-de-lhomme-edp_2023_alt-view-2.jpg"
                },

                new Perfume {
                    Name = "Chanel Coco Mademoiselle",
                    Brand = "Chanel",
                    Gender = "women",
                    Season = "all",
                    Longevity = "long",
                    Price = 130,
                    ImageUrl = "https://dynamic.zacdn.com/S8YtQvdDcm-3fOEH_Y4c0mxoNtM=/filters:quality(70):format(webp)/https://static-hk.zacdn.com/p/chanel-3296-8819317-2.jpg"
                },

                new Perfume {
                    Name = "YSL Black Opium",
                    Brand = "Yves Saint Laurent",
                    Gender = "women",
                    Season = "fall",
                    Longevity = "long",
                    Price = 115,
                    ImageUrl = "https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-us-Library/default/dw22c2ed6a/pdp/images/WW-51116YSL/BO%20Over%20Red%20About%20Image.jpg"
                },

                new Perfume {
                    Name = "Dior J’adore",
                    Brand = "Dior",
                    Gender = "women",
                    Season = "spring",
                    Longevity = "moderate",
                    Price = 130,
                    ImageUrl = "https://www.fnp.sa/cdn/shop/files/PFHR2.jpg"
                },

                new Perfume {
                    Name = "Marc Jacobs Daisy",
                    Brand = "Marc Jacobs",
                    Gender = "women",
                    Season = "spring",
                    Longevity = "moderate",
                    Price = 95,
                    ImageUrl = "https://i.makeup.uk/l/ln/lnsz54mhokze.jpg"
                },

                new Perfume {
                    Name = "Viktor & Rolf Flowerbomb",
                    Brand = "Viktor & Rolf",
                    Gender = "women",
                    Season = "winter",
                    Longevity = "long",
                    Price = 150,
                    ImageUrl = "https://www.myperfumeshop.qa/cdn/shop/products/viktor-rolf-flowerbomb-edp-perfume-for-her-263403.jpg"
                },

                new Perfume {
                    Name = "Creed Aventus",
                    Brand = "Creed",
                    Gender = "unisex",
                    Season = "all",
                    Longevity = "long",
                    Price = 330,
                    ImageUrl = "https://labelleperfumes.com/cdn/shop/files/creed-aventus-labelleperfumes-alt_800x.webp"
                },

                new Perfume {
                    Name = "Le Labo Santal 33",
                    Brand = "Le Labo",
                    Gender = "unisex",
                    Season = "fall",
                    Longevity = "long",
                    Price = 192,
                    ImageUrl = "https://orchard.vn/wp-content/uploads/2024/07/le-labo-santal-33_3.jpg"
                },

                new Perfume {
                    Name = "CK One",
                    Brand = "Calvin Klein",
                    Gender = "unisex",
                    Season = "spring",
                    Longevity = "moderate",
                    Price = 65,
                    ImageUrl = "https://imagescdn.simons.ca/images/21694-24301-11-A1_3/ck-one-eau-de-toilette-unisex.jpg"
                },

                new Perfume {
                    Name = "Tom Ford Black Orchid",
                    Brand = "Tom Ford",
                    Gender = "unisex",
                    Season = "winter",
                    Longevity = "long",
                    Price = 180,
                    ImageUrl = "https://www.beautyglobe.co.uk/cdn/shop/files/IMG-0193_421e3a77-aa26-48f6-8f99-0fe66d30636e.webp"
                },

                new Perfume {
                    Name = "Diptyque Philosykos",
                    Brand = "Diptyque",
                    Gender = "unisex",
                    Season = "summer",
                    Longevity = "moderate",
                    Price = 130,
                    ImageUrl = "https://www.diptyqueparis.com/media/catalog/product/o/r/original_jpg-_74a4600-modifier_9x16_2025_x_3600px_vue-alt-pdp.jpg"
                }
            );

            context.SaveChanges();
        }
    }
}
