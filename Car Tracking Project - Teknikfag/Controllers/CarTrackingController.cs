using Microsoft.AspNetCore.Mvc;
using Car_Tracking_Project___Teknikfag.DataAccess;

namespace Car_Tracking_Project___Teknikfag.Controllers
{
    [ApiController]
    [Route("[controller]/[Action]")]
    public class CarTrackingController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<CarModel>> GetCars()
        {
            try
            {
                string sql = "SELECT * FROM Cars INNER JOIN models ON Cars.ModelID = models.ID ORDER BY cars.NumberPlade ASC;";
                return SqlDataAccess.LoadData<CarModel>(sql);
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Error happened"); ;
            }
        }

        [HttpGet]
        public ActionResult<CarModel> GetCarRoutes(string car)
        {
            try
            {
                string sql = $"SELECT * FROM positions WHERE NumberPlade='{car}';";
                List<TrackingModel> result = SqlDataAccess.LoadData<TrackingModel>(sql);
                CarModel CarRoutes = new()
                {
                    NumberPlade = car,
                    Positions = result
                };

                return CarRoutes;
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Error happened"); ;
            }
        }




        [HttpPost]
        public ActionResult<List<CarModel>> PostCarPosition(string car, float lat, float lon)
        {
            try
            {
                TrackingModel data = new()
                {
                    NumberPlade = car,
                    LAT = lat,
                    LON = lon
                };

                string sql = "INSERT INTO positions (NumberPlade, LAT, LON) VALUES (@NumberPlade, @LAT, @LON);";
                SqlDataAccess.SaveData<TrackingModel>(sql, data);

                return Ok();
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Error happened"); ;
            }
        }
    }
}