// Auto Alpina Auctions - Vehicle Inventory Data

const vehicles = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 189900,
    mileage: 42000,
    color: "Silver",
    transmission: "Automatic",
    fuelType: "Petrol",
    engineSize: "1.8L",
    bodyType: "Sedan",
    condition: "Excellent",
    description: "Well-maintained Toyota Corolla 1.8 XS Auto. Full service history, accident-free. One owner.",
    features: ["Bluetooth", "Reverse Camera", "Cruise Control", "Electric Windows", "ABS", "Airbags"],
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    ],
    badge: "Hot Deal"
  },
  {
    id: 2,
    make: "Volkswagen",
    model: "Polo",
    year: 2021,
    price: 219900,
    mileage: 28000,
    color: "White",
    transmission: "Automatic",
    fuelType: "Petrol",
    engineSize: "1.0L TSI",
    bodyType: "Hatchback",
    condition: "Excellent",
    description: "Stunning VW Polo 1.0 TSI Comfortline Auto. Still under manufacturer warranty. Spotless condition.",
    features: ["Apple CarPlay", "Android Auto", "Touchscreen", "Park Distance Control", "Lane Assist", "Cruise Control"],
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
    ],
    badge: "Low Mileage"
  },
  {
    id: 3,
    make: "BMW",
    model: "3 Series",
    year: 2019,
    price: 389900,
    mileage: 65000,
    color: "Black",
    transmission: "Automatic",
    fuelType: "Petrol",
    engineSize: "2.0L",
    bodyType: "Sedan",
    condition: "Good",
    description: "BMW 320i M Sport Auto. Luxury package included. Full BMW service history. Stunning machine.",
    features: ["iDrive Navigation", "Heated Seats", "Sunroof", "Harman Kardon Sound", "Parking Sensors", "Adaptive Cruise"],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&q=80"
    ],
    badge: ""
  },
  {
    id: 4,
    make: "Ford",
    model: "Ranger",
    year: 2020,
    price: 449900,
    mileage: 55000,
    color: "Blue",
    transmission: "Automatic",
    fuelType: "Diesel",
    engineSize: "3.2L",
    bodyType: "Bakkie",
    condition: "Excellent",
    description: "Ford Ranger 3.2 XLT 4x4 Auto. Canopy included. One owner, full service history. Never been off-road.",
    features: ["4x4", "Canopy", "Bluetooth", "Reverse Camera", "Tow Bar", "Cruise Control"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80"
    ],
    badge: "Popular"
  },
  {
    id: 5,
    make: "Hyundai",
    model: "Tucson",
    year: 2021,
    price: 349900,
    mileage: 31000,
    color: "Grey",
    transmission: "Automatic",
    fuelType: "Petrol",
    engineSize: "2.0L",
    bodyType: "SUV",
    condition: "Excellent",
    description: "Hyundai Tucson 2.0 Elite Auto. Panoramic sunroof, full leather interior. Still under warranty.",
    features: ["Panoramic Sunroof", "Leather Seats", "Navigation", "Blind Spot Monitor", "Lane Keep Assist", "Wireless Charging"],
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80"
    ],
    badge: "New Arrival"
  },
  {
    id: 6,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2018,
    price: 449900,
    mileage: 78000,
    color: "White",
    transmission: "Automatic",
    fuelType: "Petrol",
    engineSize: "2.0L",
    bodyType: "Sedan",
    condition: "Good",
    description: "Mercedes-Benz C200 AMG Line Auto. Full leather, panoramic roof. Complete service history with MB dealer.",
    features: ["AMG Styling", "Panoramic Roof", "Comand Navigation", "Burmester Sound", "Heated Seats", "Memory Seats"],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      "https://images.unsplash.com/photo-1605515298946-d664b5d54302?w=800&q=80"
    ],
    badge: ""
  },
  {
    id: 7,
    make: "Toyota",
    model: "Hilux",
    year: 2022,
    price: 569900,
    mileage: 18000,
    color: "White",
    transmission: "Automatic",
    fuelType: "Diesel",
    engineSize: "2.8L GD-6",
    bodyType: "Bakkie",
    condition: "Excellent",
    description: "Toyota Hilux 2.8 GD-6 Legend 50 4x4 Auto. Nearly new with only 18,000km. Comprehensive warranty remaining.",
    features: ["4x4", "Leather Seats", "Navigation", "Reverse Camera", "Tow Bar", "Cruise Control", "Lane Departure Warning"],
    images: [
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    badge: "Premium"
  },
  {
    id: 8,
    make: "Kia",
    model: "Sportage",
    year: 2021,
    price: 319900,
    mileage: 39000,
    color: "Red",
    transmission: "Automatic",
    fuelType: "Petrol",
    engineSize: "2.0L",
    bodyType: "SUV",
    condition: "Excellent",
    description: "Kia Sportage 2.0 EX Auto. Full Kia service history, one careful owner. Panoramic sunroof.",
    features: ["Panoramic Sunroof", "Leather Seats", "Navigation", "Reverse Camera", "Blind Spot Detection", "Smart Key"],
    images: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80"
    ],
    badge: ""
  },
  {
    id: 9,
    make: "Audi",
    model: "A3",
    year: 2019,
    price: 329900,
    mileage: 52000,
    color: "Grey",
    transmission: "Automatic",
    fuelType: "Petrol",
    engineSize: "1.4L TFSI",
    bodyType: "Hatchback",
    condition: "Good",
    description: "Audi A3 1.4 TFSI Stronic. S-line exterior package, full leather interior. Complete Audi dealer service history.",
    features: ["S-Line Package", "Leather Seats", "MMI Navigation", "Xenon Lights", "Cruise Control", "Park Assist"],
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
      "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=800&q=80"
    ],
    badge: ""
  },
  {
    id: 10,
    make: "Nissan",
    model: "X-Trail",
    year: 2020,
    price: 379900,
    mileage: 47000,
    color: "Silver",
    transmission: "CVT",
    fuelType: "Petrol",
    engineSize: "2.5L",
    bodyType: "SUV",
    condition: "Good",
    description: "Nissan X-Trail 2.5 Tekna 4WD CVT. Third row seating, panoramic roof. One owner with full service history.",
    features: ["7 Seater", "4WD", "Panoramic Roof", "360 Camera", "Navigation", "Heated Seats"],
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80"
    ],
    badge: ""
  },
  {
    id: 11,
    make: "Honda",
    model: "Jazz",
    year: 2021,
    price: 199900,
    mileage: 22000,
    color: "Blue",
    transmission: "CVT",
    fuelType: "Hybrid",
    engineSize: "1.5L Hybrid",
    bodyType: "Hatchback",
    condition: "Excellent",
    description: "Honda Jazz 1.5 Hybrid. Exceptional fuel economy, near-new condition. Perfect city car.",
    features: ["Hybrid System", "Apple CarPlay", "Android Auto", "Honda Sensing Suite", "Magic Seats", "LED Lights"],
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
    ],
    badge: "Eco"
  },
  {
    id: 12,
    make: "Mazda",
    model: "CX-5",
    year: 2020,
    price: 399900,
    mileage: 44000,
    color: "Red",
    transmission: "Automatic",
    fuelType: "Diesel",
    engineSize: "2.2L SkyActiv-D",
    bodyType: "SUV",
    condition: "Excellent",
    description: "Mazda CX-5 2.2D Individual AWD Auto. Mazda Soul Red, premium interior. Full service history.",
    features: ["AWD", "Leather Seats", "Bose Sound System", "Head-Up Display", "360 Monitor", "i-Activsense"],
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80"
    ],
    badge: ""
  }
];

// Get unique makes for filter
function getUniqueMakes() {
  return [...new Set(vehicles.map(v => v.make))].sort();
}

// Get unique models for a given make
function getModelsByMake(make) {
  return [...new Set(vehicles.filter(v => v.make === make).map(v => v.model))].sort();
}

// Get price range
function getPriceRange() {
  const prices = vehicles.map(v => v.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

// Format price to ZAR
function formatPrice(price) {
  return new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", minimumFractionDigits: 0 }).format(price);
}

// Filter vehicles
function filterVehicles(filters) {
  return vehicles.filter(vehicle => {
    if (filters.make && vehicle.make !== filters.make) return false;
    if (filters.model && vehicle.model !== filters.model) return false;
    if (filters.minPrice && vehicle.price < filters.minPrice) return false;
    if (filters.maxPrice && vehicle.price > filters.maxPrice) return false;
    if (filters.bodyType && vehicle.bodyType !== filters.bodyType) return false;
    if (filters.transmission && vehicle.transmission !== filters.transmission) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const haystack = `${vehicle.make} ${vehicle.model} ${vehicle.year} ${vehicle.color} ${vehicle.bodyType}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

// Get vehicle by ID
function getVehicleById(id) {
  return vehicles.find(v => v.id === parseInt(id));
}
