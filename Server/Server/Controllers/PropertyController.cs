using Common.Entity;
using Microsoft.AspNetCore.Mvc;
using Service.Intrerface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {

        private readonly Iservice<PropertyDto> service;
        public PropertyController(Iservice<PropertyDto> service)
        {
            this.service = service;
        }
        // GET: api/<PropertyControler>
        [HttpGet]
        public async Task<List<PropertyDto>> Get()
        {
            var prop= await service.GetAllAsync();
            //foreach(var item in prop)
            //{    
            //     var images = item.ImageUrlList;
            //     item.ImageUrlList = new List<string>();
            //     foreach(var image in images)
            //    {
            //        item.ImageUrlList.Add(GetImage(image));
            //    }
                
               
            //}
            return prop;
        }

        // GET api/<PropertyControler>/5
        [HttpGet("{id}")]
        public async Task<PropertyDto> Get(int id)
        {
            return await service.GetByIdsAsync(id);
        }

        // POST api/<PropertyControler>
        [HttpPost]
        public async Task<ActionResult> Post([FromForm] PropertyDto value)
        {
            value.ImageUrlList = new List<string>();

            if (value.FileImageList != null)
            {
                foreach (var image in value.FileImageList) {
                    var mypath = Path.Combine(Environment.CurrentDirectory + "/images/" + image.FileName);
                    using(FileStream fs=new FileStream(mypath,FileMode.Create))
                    {
                        image.CopyTo(fs);
                        fs.Close();
                        value.ImageUrlList.Add(image.FileName); 
                    }

                }
            }
            return Ok(await service.AddAsync(value));
               
        }

        // PUT api/<PropertyControler>/5
        [HttpPut("{id}")]
        public Task Put(int id, [FromForm] PropertyDto value)
        {

            return service.UpdateAsync(id, value);
        }
        
        // DELETE api/<PropertyControler>/5
        [HttpDelete("{id}")]
        public Task Delete(int id)
        {
            return service.RemoveAsync(id);

        }

        [HttpGet("getImage/{ImageUrl}")]
        public string GetImage(string ImageUrl)
        {
            //"D:\תכנות שנה ב\RealEstateMedaition\Server\Server\images\בינין5.jpg"
            var path = Path.Combine(Environment.CurrentDirectory + "/images", ImageUrl);
            byte[] bytes=System.IO.File.ReadAllBytes(path); 
            string  imageBase64=Convert.ToBase64String(bytes);
            string image = string.Format("data:image/jpeg;base64,{0}", imageBase64);
            return image;   
        }
    }
}
