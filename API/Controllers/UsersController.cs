using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }


        //endpoint for get all users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        //endpoint for get user by id
        // api/user/3(id)
         [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}