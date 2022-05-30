using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Teknikfag_Hjemmeside___Eksamens_Projekt.Models;
using Newtonsoft.Json;
using System.Globalization;

namespace Teknikfag_Hjemmeside___Eksamens_Projekt.Controllers
{
    public class HomeController : Controller
    {
        HttpClient client = new();
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            List<CarModel> Cars = new();

            // Sets the url
            client.BaseAddress = new Uri("http://10.142.111.242:8080/CarTracking/");
            var responseTask = client.GetAsync("GetCars");
            responseTask.Wait();

            // Checks the result of the API call and handles it.
            var result = responseTask.Result;
            if (result.IsSuccessStatusCode)
            {
                var readtask = result.Content.ReadFromJsonAsync<IList<CarModel>>();
                readtask.Wait();

                if (readtask.Result.Count != 0)
                {
                    Cars = (List<CarModel>)readtask.Result;
                }
            }
            else
            {
                Cars = (List<CarModel>)Enumerable.Empty<CarModel>();
                ModelState.AddModelError(string.Empty, "an error has occoured. please contact your administrator.");
            }

            return View(Cars);
        }

        public IActionResult CarDetails(string car)
        {
            CarModel Car = new();

            // Sets the url
            client.BaseAddress = new Uri("http://10.142.111.242:8080/CarTracking/");
            var responseTask = client.GetAsync($"GetCarRoutes?car={car}");
            responseTask.Wait();

            // Checks the result of the API call and handles it.
            var result = responseTask.Result;
            if (result.IsSuccessStatusCode)
            {
                var readtask = result.Content.ReadFromJsonAsync<CarModel>();
                readtask.Wait();

                Car = readtask.Result;
            }
            else
            {
                Car = (CarModel)Enumerable.Empty<CarModel>();
                ModelState.AddModelError(string.Empty, "an error has occoured. please contact your administrator.");
            }
            return View(Car);
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}