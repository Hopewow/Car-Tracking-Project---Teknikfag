namespace Car_Tracking_Project___Teknikfag
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