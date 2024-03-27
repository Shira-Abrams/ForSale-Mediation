using Common.Entity;
using Microsoft.AspNetCore.Mvc;
using Service.Intrerface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchingPropertyController : ControllerBase
    {

        private readonly Iservice<SearchingPropertyDto> service;
        public SearchingPropertyController(Iservice<SearchingPropertyDto> service)
        {
            this.service = service;
        }
        // GET: api/<SearchingPropertyController>
        [HttpGet]
        public async Task<List<SearchingPropertyDto>> Get()
        {
            return await service.GetAllAsync();
        }

        // GET api/<SearchingPropertyController>/5
        [HttpGet("{id}")]
        public async Task<SearchingPropertyDto> Get(int id)
        {
            return await service.GetByIdsAsync(id);
        }

        // POST api/<SearchingPropertyController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] SearchingPropertyDto value)
        {

            return Ok(await service.AddAsync(value));
        }

        // PUT api/<SearchingPropertyController>/5
        [HttpPut("{id}")]
        public async void Put(int id, [FromForm] SearchingPropertyDto value)
        {
            await service.UpdateAsync(id, value);

        }

        // DELETE api/<SearchingPropertyController>/5
        [HttpDelete("{id}")]
        public async void Delete(int id)
        {

            await service.RemoveAsync(id);
        }
    }
}
