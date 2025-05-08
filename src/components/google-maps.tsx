const GoogleMaps = () => {
  return (
    <div className="w-full h-96 md:h-128">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7938.815753743979!2d-122.13448225438465!3d37.41885911455297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbaf39a5003c1%3A0xf12add6b5bda11a6!2s401%20Lambert%20Ave%2C%20Palo%20Alto%2C%20CA%2094306!5e0!3m2!1sen!2sus!4v1746742616343!5m2!1sen!2sus" style={{ border:"0", width: "100%", height: "100%"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default GoogleMaps;