import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup,Tooltip } from "react-leaflet";
import L, { LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// Define India's boundaries for restricting the map
const indiaBounds: LatLngBoundsExpression = [
  [1.00000000, 38.00000000], // Southwest corner (Min Lat, Min Lng)
  
  [43.39,111.59], // Northeast corner (Max Lat, Max Lng)
];

// Museum data
const museums = [
    {
        name: 'National Museum, New Delhi',
        location: [28.6118, 77.2197], 
        image:  'https://media.insider.in/image/upload/c_crop,g_custom/v1589447819/a7g6zgrbbhtdkss9sf8k.jpg',
        description: 'One of the largest museums in India, showcasing artifacts from prehistoric times to modern history.'
    },
    {
        name: 'Indian Museum, Kolkata',
        location: [22.5555, 88.3510],
        image: 'https://kolkatatourism.travel/images/places-to-visit/headers/indian-museum-kolkata-entry-fee-timings-holidays-reviews-header.jpg',
        description: 'Established in 1814, it is the ninth-oldest museum in the world and features rare artifacts and fossils.'
    },
    {
        name: 'Chatrapati Shivaji Vastugraha',
        location: [18.9262, 72.8311],
        image: 'https://csmvs.in/wp-content/uploads/2022/01/IMG_3153-Pano-1920x633.jpg',
        description: 'Formerly the Prince of Wales Museum, housing ancient Indian art, sculptures, and cultural artifacts.'
    },
    {
        name: '1857 Memorial Museum, Lucknow',
        location: [26.8574, 80.9426],
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/lucknow-residency-lucknow-uttar-pradesh-1-attr-hero?qlt=82&ts=1726648641175',
        description: 'Dedicated to the First War of Indian Independence, this museum houses exhibits from the 1857 rebellion.'
    },
    {
        name: 'Archaeological Museum, Kalibangan',
        location: [29.4727, 74.1260],
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6HSjYlY4wuV-p5fqRmYbighlLbPH355MaJyak8ibs2m_C_PgdmIZ23aZ9Tj3dvCYwE6_YbudlwMOTlKGwY5NCCCBHgB-M8zJfXfTwsKOv9V0QJvvvUmMaQeyWlQtlsCtPeqtpCvitCVk/s1600/Kalibangan-museum-Rajasthan.jpg',
        description: 'Showcasing artifacts from the Harappan civilization, including pottery and seals.'
    },
    {
        name: 'Interpretation Centre, Dholavira',
        location: [23.8907, 70.3709],
        image: 'https://www.gujarattourism.com/content/dam/gujrattourism/images/indus-valley-civilization-sites/dholavira/Dholavira-1.jpg',
        description: 'Located at the UNESCO World Heritage Site of Dholavira, showcasing Indus Valley civilization artifacts.'
    },
    {
        name: 'Archaeological Museum, Velha, Goa',
        location: [15.5036, 73.9125],
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Archaeological_Museum_and_Church_of_St._Francis_of_Assisi_in_Goa_DSC02487.JPG',
        description: 'A collection of Portuguese-era artifacts and sculptures from Old Goa.'
    },
    {
        name: 'Archaeological Museum, Konark',
        location: [19.8876, 86.0945],
        image: 'https://www.tempotravellerinodisha.com/wp-content/uploads/2018/10/ASI-Museum.jpg',
        description: 'A repository of sculptures and relics from the famous Sun Temple of Konark.'
    },
    {
        name: 'Sri Suryapahar Museum, Assam',
        location: [26.1993, 90.5671],
        image: 'https://www.rvatemples.com/wp-content/uploads/2018/05/srisuryapahar.jpg',
        description: 'An archaeological site museum preserving relics of Buddhist, Hindu, and Jain traditions.'
    },
    {
        name: 'Sanchi Museum, Madhya Pradesh',
        location: [23.4863, 77.7391],
        image: 'https://eindiatourism.in/wp-content/uploads/2024/02/Sanchi_archaeological_museum.jpg',
        description: 'Houses Buddhist artifacts and stupas from the Mauryan period.'
    },
    {
        name: 'Yaad-e-Jallian, Punjab',
        location: [31.6200, 74.8765],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7vT0R2rdNJogqK0tu6SP7SvRCXT9S0aahA&s',
        description: 'A tribute to the Jallianwala Bagh massacre, showcasing the struggle for India’s independence.'
    },
    {
        name: 'Deeg Palace Museum, Rajasthan',
        location: [27.4711, 77.3271],
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/21/70/9e/less-visited-place-near.jpg?w=1200&h=-1&s=1',
        description: 'An 18th-century palace museum showcasing Rajput architecture and lifestyle.'
    },
    {
        name: 'Tipu Sultan Museum, Karnataka',
        location: [12.2961, 76.6505],
        image: 'https://pohcdn.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Sultan_Tipu_Palace.jpg',
        description: 'Dedicated to Tipu Sultan, featuring his personal belongings and weapons.'
    },
    {
        name: 'Archaeological Museum, Amravati',
        location: [20.9374, 77.7796],
        image: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/01/2dbac502cc576e4aebb93b7e79d68f96_1000x1000.jpg',
        description: 'Features Buddhist relics and sculptures from the Amaravati Stupa.'
    },
    {
        name: 'Kapilvastu Museum, Piprahwa',
        location: [27.5181, 82.0488],
        image: 'https://images.squarespace-cdn.com/content/v1/561b7e62e4b0b66177bc2043/1452773227660-S4KM15EE9PHMBENAAVT4/SOD_Buddha-14_02-0001edit2.jpg?format=1500w',
        description: 'Showcasing the archaeological remains of Kapilvastu, the birthplace of Buddha.'
    },
    {
        name: 'Archaeological Museum, Vaishali',
        location: [25.9874, 85.1271],
        image: 'https://www.trawell.in/admin/images/upload/770096525Vaishali_Museum.jpg',
        description: 'Preserving Buddhist artifacts from the ancient city of Vaishali.'
    },
    {
        name: 'Mahatma Gandhi Museum, Aga Khan Palace',
        location: [18.5521, 73.9018],
        image: 'https://i0.wp.com/pedalandtringtring.com/wp-content/uploads/2021/03/Aga-Khan-Palace.jpg?fit=4032%2C2268&ssl=1',
        description: 'A historic site where Mahatma Gandhi was imprisoned, now a museum dedicated to his life.'
    },
    {
        name: 'Hazarduari Palace Museum, Bengal',
        location: [24.1862, 88.2680],
        image: 'https://lh3.googleusercontent.com/l2lOwjwEyhaThvJv-ubyqDD6whyL0PO5UfEM7oAbOPLd9TibP-kzVNbmZblBJMhv5Ly1V7IJCkk5cKaFZO8zg_3nXU30kDQheg=w3840-h2160-c-rw-v3',
        description: 'A grand palace museum showcasing Nawabi artifacts from Bengal.'
    }
];

const MuseumMap: React.FC = () => {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <div>
       <h1 className="text-xl font-semibold mb-2">Indian Museums</h1>
      <MapContainer
        center={[20.5937, 78.9629]} // Centered on India
        zoom={5}
        style={{ height: "600px", width: "100%" }}
        maxBounds={indiaBounds} // Restrict map to India
        maxBoundsViscosity={1.0} // Bounce back effect
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {museums.map((museum, index) => (
          <Marker key={index} position={museum.location as [number, number]}>

           {/* Problem */}
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false} sticky={true}>
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      padding: "10px",
      textAlign: "center",
      maxWidth: "250px",
      border: "1px solid #ddd",
    }}
  >
    <img
      src={museum.image}
      alt={museum.name}
      style={{
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: "8px",
      }}
    />
   <h3 
  style={{
    fontSize: "14px", 
    margin: "5px 0", 
    color: "#333", 
    overflow: "hidden", 
    textOverflow: "ellipsis", 
    whiteSpace: "nowrap", 
    maxWidth: "100%" 
  }}
>
  {museum.name}
</h3>

    <p
  style={{
    fontSize: "12px",
    color: "#666",
    marginBottom: "5px",
    maxHeight: "50px",  // Restrict height
    overflow: "hidden",  // Hide overflow
    textOverflow: "ellipsis",  // Show "..." for long text
    whiteSpace: "normal",  // Allow text wrapping
    display: "-webkit-box",
    WebkitLineClamp: 3, // Limit to 3 lines
    WebkitBoxOrient: "vertical",
  }}
>
  {museum.description}
</p>
  </div>
</Tooltip>

          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MuseumMap;
