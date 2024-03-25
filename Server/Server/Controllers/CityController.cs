using Common.Entity;
using Microsoft.AspNetCore.Mvc;
using Reposetory.Entity;
using Service.Intrerface;
using System.Runtime.InteropServices;
using System.Security;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {

        private readonly Iservice<CityDto> service;
        public CityController(Iservice<CityDto> service)
        {
            this.service= service;  
        }
        // GET: api/<CityController>
        [HttpGet]
        public async Task<List<CityDto>> Get()
        {
            return await service.GetAllAsync();
        }

        // GET api/<CityController>/5
        [HttpGet("{id}")]
        public async Task<CityDto> Get(int id)
        {
            return await service.GetByIdsAsync(id);
        }

        // POST api/<CityController>
        [HttpPost]
        public async Task<ActionResult> Post([FromForm] CityDto value)
        {
           return Ok(await service.AddAsync(value));
        }

        // PUT api/<CityController>/5
        [HttpPut("{id}")]
        public  Task Put(int id, [FromForm] CityDto value)
        {
            return service.UpdateAsync(id, value);   
        }

        // DELETE api/<CityController>/5
        [HttpDelete("{id}")]
        public  Task Delete(int id)
        {
            return service.RemoveAsync(id);
        }
    }
}
