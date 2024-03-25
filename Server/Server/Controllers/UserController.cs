using Common.Entity;
using Microsoft.AspNetCore.Mvc;
using Service.Intrerface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly Iservice<UserDto> service;
        public UserController(Iservice<UserDto> service)
        {
            this.service = service;
        }
        // GET: api/<UserController>
        [HttpGet]
        public async Task<List<UserDto>> Get()
        {
            return await service.GetAllAsync();
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public async Task<UserDto> Get(int id)
        {
            return await service.GetByIdsAsync(id);
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] UserDto value)
        {

            return Ok(await service.AddAsync(value));
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async void Put(int id, [FromForm] UserDto value)
        {

            await service.UpdateAsync(id, value);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public async void Delete(int id)
        {

            await service.RemoveAsync(id);
        }
    }
}
