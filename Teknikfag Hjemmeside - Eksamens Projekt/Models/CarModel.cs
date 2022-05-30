namespace Teknikfag_Hjemmeside___Eksamens_Projekt.Models
{
    public class CarModel
    {
        public string NumberPlade { get; set; }
        public int ModelID { get; set; }

        // This is the model object
        public int ID { get; set; }
        public string Model { get; set; }

        public List<TrackingModel> Positions { get; set; }
    }
}
