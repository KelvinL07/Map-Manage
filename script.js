// Coordinates for predefined locations
const locations = {
    "Tianfu Airport": [30.3015, 104.4373],
    "Chunxi Road": [30.6558, 104.0783],
    "Kuanzhai Alley": [30.6655, 104.0536],
    "Panda Base": [30.7350, 104.1450],
    "Eastern Suburb Memory": [30.6725, 104.1200],
    "Jiuyan Bridge": [30.6400, 104.0880],
    "People's Park": [30.6585, 104.0556],
    "Wenshu Monastery": [30.6780, 104.0670],
    "Chengdu Station": [30.6288, 104.1408],
    "Jiuzhaigou": [33.2612, 103.9189],
    "Jiefangbei": [29.5595, 106.5772],
    "Hongyadong": [29.5645, 106.5765],
    "Liziba": [29.5505, 106.5350],
    "Eling Factory": [29.5500, 106.5400],
    "Ciqikou": [29.5828, 106.4526],
    "Chaotianmen": [29.5685, 106.5862],
    "Cableway": [29.5610, 106.5830],
    "Chongqing Airport": [29.7196, 106.6416]
};

// State
let itinerary = [
    { id: "1", day: "Day 1", time: "13:00", title: "Arrive at Chengdu Tianfu Airport", category: "Transport", coords: locations["Tianfu Airport"], desc: "Arrival / immigration / baggage claim" },
    { id: "2", day: "Day 1", time: "15:30", title: "Check in to Chengdu hotel", category: "Hotel", coords: locations["Chunxi Road"], desc: "Stay around Chunxi Road / Taikoo Li" },
    { id: "3", day: "Day 1", time: "16:30", title: "Chunxi Road / Taikoo Li", category: "Food", coords: locations["Chunxi Road"], desc: "Light walk + snacks (Long Chaoshou, Egg Pancake)" },
    { id: "4", day: "Day 1", time: "18:30", title: "Kuanzhai Alley Dinner", category: "Food", coords: locations["Kuanzhai Alley"], desc: "First dinner: Hotpot (Tianxing Zhengyuan)" },
    { id: "5", day: "Day 2", time: "08:00", title: "Chengdu Panda Base", category: "Sightseeing", coords: locations["Panda Base"], desc: "Go early because pandas are active in the morning." },
    { id: "6", day: "Day 2", time: "12:30", title: "Lunch at Chunxi Road", category: "Food", coords: locations["Chunxi Road"], desc: "Authentic Sichuan Cuisine (Zisha Guotuo)" },
    { id: "7", day: "Day 2", time: "14:30", title: "Eastern Suburb Memory", category: "Sightseeing", coords: locations["Eastern Suburb Memory"], desc: "Photos / café / creative park" },
    { id: "8", day: "Day 2", time: "19:30", title: "Jiuyan Bridge / Night View", category: "Food", coords: locations["Jiuyan Bridge"], desc: "Night view + supper (Cold pot skewers)" },
    { id: "9", day: "Day 3", time: "09:00", title: "People's Park", category: "Sightseeing", coords: locations["People's Park"], desc: "Tea house / slow-life experience (Heming Teahouse)" },
    { id: "10", day: "Day 3", time: "11:30", title: "Kuixinglou Lunch", category: "Food", coords: locations["Kuanzhai Alley"], desc: "Taolin Restaurant or Chengdu Chike" },
    { id: "11", day: "Day 3", time: "14:30", title: "Wenshu Monastery", category: "Sightseeing", coords: locations["Wenshu Monastery"], desc: "Temple / snacks / souvenirs" },
    { id: "12", day: "Day 3", time: "18:00", title: "Last dinner in Chengdu", category: "Food", coords: locations["People's Park"], desc: "Pork trotter soup before the train trip" },
    { id: "13", day: "Day 4", time: "09:00", title: "Train to Jiuzhaigou", category: "Transport", coords: locations["Chengdu Station"], desc: "High speed train to Jiuzhaigou" },
    { id: "14", day: "Day 4", time: "Afternoon", title: "Jiuzhaigou Hotel", category: "Hotel", coords: locations["Jiuzhaigou"], desc: "Check in near the valley entrance" },
    { id: "15", day: "Day 5", time: "Morning", title: "Train to Chongqing", category: "Transport", coords: locations["Jiuzhaigou"], desc: "Check out and travel to Chongqing" },
    { id: "16", day: "Day 5", time: "Afternoon", title: "Chongqing Hotel", category: "Hotel", coords: locations["Jiefangbei"], desc: "Check in to Jiefangbei / Jiaochangkou hotel" },
    { id: "17", day: "Day 5", time: "18:30", title: "Hongyadong / Jiefangbei", category: "Food", coords: locations["Hongyadong"], desc: "Chongqing hotpot and night view" },
    { id: "18", day: "Day 6", time: "08:00", title: "Chongqing Noodles", category: "Food", coords: locations["Jiefangbei"], desc: "Pea-and-minced-pork noodles for breakfast" },
    { id: "19", day: "Day 6", time: "09:30", title: "Liziba Monorail", category: "Sightseeing", coords: locations["Liziba"], desc: "Monorail going through the building" },
    { id: "20", day: "Day 6", time: "11:00", title: "Lunch near Liziba", category: "Food", coords: locations["Liziba"], desc: "Liziba Liangshan Chicken" },
    { id: "21", day: "Day 6", time: "13:30", title: "Eling Factory No.2", category: "Sightseeing", coords: locations["Eling Factory"], desc: "Photos / café" },
    { id: "22", day: "Day 6", time: "15:30", title: "Ciqikou Ancient Town", category: "Food", coords: locations["Ciqikou"], desc: "Snacks (Mahua, chicken giblets)" },
    { id: "23", day: "Day 6", time: "18:30", title: "Jianghu Cuisine Dinner", category: "Food", coords: locations["Jiefangbei"], desc: "Maoxuewang or old Chongqing dishes" },
    { id: "24", day: "Day 7", time: "10:30", title: "Raffles City / Chaotianmen", category: "Sightseeing", coords: locations["Chaotianmen"], desc: "Photos / shopping" },
    { id: "25", day: "Day 7", time: "14:30", title: "Yangtze River Cableway", category: "Sightseeing", coords: locations["Cableway"], desc: "Cableway to Longmenhao" },
    { id: "26", day: "Day 7", time: "21:30", title: "Go to Chongqing Airport", category: "Transport", coords: locations["Chongqing Airport"], desc: "Heading to the airport for the night flight" }
];

const categoryColors = {
    "Hotel": "var(--color-hotel)",
    "Food": "var(--color-food)",
    "Sightseeing": "var(--color-sightseeing)",
    "Optional": "var(--color-optional)",
    "Transport": "var(--color-transport)"
};

// Add default dates to initial itinerary based on Day string
itinerary.forEach(item => {
    if (!item.date && item.day && item.day.startsWith('Day ')) {
        const dayNum = parseInt(item.day.replace('Day ', ''), 10);
        if (!isNaN(dayNum)) {
            // Start date is 2026-11-28 (Day 1). So 27th + dayNum
            const d = new Date(2026, 10, 27 + dayNum); // Month is 0-indexed, 10=Nov
            // Handle time zone offset cleanly for YYYY-MM-DD
            d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
            item.date = d.toISOString().split('T')[0];
        }
    }
});

const categoryHex = {
    "Hotel": "#ff9f0a",
    "Food": "#ffd60a",
    "Sightseeing": "#32d74b",
    "Optional": "#64d2ff",
    "Transport": "#8e8e93"
};

// Initialize Map
const map = L.map('map', {
    zoomControl: false
}).setView([30.6558, 104.0783], 6); 

let currentTileLayer = null;

function setMapTiles(isLightMode) {
    if (currentTileLayer) {
        map.removeLayer(currentTileLayer);
    }
    const tileTheme = isLightMode ? 'rastertiles/voyager' : 'dark_all';
    currentTileLayer = L.tileLayer(`https://{s}.basemaps.cartocdn.com/${tileTheme}/{z}/{x}/{y}{r}.png`, {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);
}

// Initial Tile Load (will be updated by theme toggle if needed, defaulting to dark)
setMapTiles(false);

L.control.zoom({ position: 'topright' }).addTo(map);

// Map State
let markers = [];
let routeLine = null;

// DOM Elements
const listEl = document.getElementById('itinerary-list');

// Main Render Loop
function render() {
    // 1. Clear Map
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    if (routeLine) map.removeLayer(routeLine);
    
    // 2. Clear List
    listEl.innerHTML = '';
    
    let currentDay = "";
    const latlngs = [];
    const coordCounts = {};

    // 3. Rebuild
    itinerary.forEach((item, index) => {
        // Draw day headers logic handled in CSS/HTML but simplified here 
        // to avoid conflict with sortable.js. We'll add a data attribute for day.
        
        const card = document.createElement('div');
        card.className = 'itinerary-item';
        card.dataset.id = item.id;
        card.style.setProperty('--category-color', categoryColors[item.category] || 'var(--text-secondary)');
        
        const dateStr = item.date ? ` (${item.date})` : '';
        card.innerHTML = `
            <div class="item-time">
                <span style="background: var(--category-color); color: #fff; padding: 2px 6px; border-radius: 10px; margin-right: 6px; font-weight: bold; font-size: 11px;">${index + 1}</span>
                ${item.day}${dateStr} ${item.time} &middot; ${item.category}
            </div>
            <div class="item-title">${item.title}</div>
            <div class="item-desc">${item.desc}</div>
        `;
        listEl.appendChild(card);

        if (item.coords) {
            const coordKey = item.coords.join(',');
            if (!coordCounts[coordKey]) {
                coordCounts[coordKey] = 0;
            }
            const offset = coordCounts[coordKey];
            coordCounts[coordKey]++;
            
            // Offset roughly ~200-300m for duplicates so they don't hide each other
            const renderCoords = [
                item.coords[0] + (offset * -0.003),
                item.coords[1] + (offset * 0.003)
            ];

            latlngs.push(renderCoords);
            const colorHex = categoryHex[item.category] || "#ffffff";
            
            const markerIcon = L.divIcon({
                className: 'custom-icon',
                html: `<div class="custom-marker" style="--marker-color: ${colorHex}; width: 24px; height: 24px;">
                         <div class="marker-label">${index + 1}</div>
                       </div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

            const marker = L.marker(renderCoords, { icon: markerIcon }).addTo(map);
            
            const popupDateStr = item.date ? ` (${item.date})` : '';
            marker.bindPopup(`
                <div class="popup-title">${item.title}</div>
                <div class="popup-detail"><strong>Time:</strong> ${item.day}${popupDateStr} ${item.time}</div>
                <div class="popup-detail"><strong>Type:</strong> ${item.category}</div>
                <div class="popup-detail">${item.desc}</div>
            `);

            markers.push(marker);

            card.addEventListener('click', () => {
                map.flyTo(renderCoords, 14, { duration: 1.5 });
                setTimeout(() => marker.openPopup(), 1500);
                document.querySelectorAll('.itinerary-item').forEach(el => el.style.background = 'rgba(255, 255, 255, 0.03)');
                card.style.background = 'rgba(255, 255, 255, 0.1)';
            });
        }
    });

    if (latlngs.length > 0) {
        routeLine = L.polyline(latlngs, {
            color: '#0a84ff', weight: 3, opacity: 0.6, dashArray: '10, 10', lineJoin: 'round'
        }).addTo(map);
    }
    
    // 4. Update Header Date Range
    const dates = itinerary.map(item => item.date).filter(Boolean).sort();
    if (dates.length > 0) {
        const formatDate = (dateStr) => {
            const d = new Date(dateStr);
            d.setMinutes(d.getMinutes() + d.getTimezoneOffset()); // Fix timezone parsing offset
            return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        };
        const first = formatDate(dates[0]);
        const last = formatDate(dates[dates.length - 1]);
        const displayStr = first === last ? first : `${first} - ${last}`;
        document.getElementById('trip-dates-display').textContent = displayStr;
    } else {
        document.getElementById('trip-dates-display').textContent = 'Dates TBD';
    }
}

// Initial render
render();
// Fit bounds once at startup
setTimeout(() => {
    if (routeLine) map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
}, 500);

// Initialize SortableJS
new Sortable(listEl, {
    animation: 150,
    ghostClass: 'sortable-ghost',
    dragClass: 'sortable-drag',
    onEnd: function (evt) {
        // Update array order based on DOM
        const itemEl = itinerary.splice(evt.oldIndex, 1)[0];
        itinerary.splice(evt.newIndex, 0, itemEl);
        render(); // Re-render markers and lines
    }
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle-btn');
let isLightMode = localStorage.getItem('theme') === 'light';

function applyTheme() {
    if (isLightMode) {
        document.body.classList.add('light-mode');
        themeToggleBtn.textContent = '🌙';
    } else {
        document.body.classList.remove('light-mode');
        themeToggleBtn.textContent = '☀️';
    }
    setMapTiles(isLightMode);
}

// Apply initial theme
applyTheme();

themeToggleBtn.addEventListener('click', () => {
    isLightMode = !isLightMode;
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    applyTheme();
});

// Modal & Add Logic
const modal = document.getElementById('add-modal');
const addBtn = document.getElementById('add-loc-btn');
const cancelAddBtn = document.getElementById('cancel-add-btn');
const saveBtn = document.getElementById('save-loc-btn');

const pickMapBtn = document.getElementById('pick-map-btn');
const banner = document.getElementById('pick-mode-banner');
const cancelPickBtn = document.getElementById('cancel-pick-btn');
const coordsInput = document.getElementById('input-coords');

const searchInput = document.getElementById('osm-search-input');
const searchResults = document.getElementById('osm-search-results');

let isPicking = false;
let tempCoords = null;
let tempMarker = null;

addBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

cancelAddBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    resetForm();
});

pickMapBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    banner.classList.remove('hidden');
    isPicking = true;
    document.getElementById('map').style.cursor = 'crosshair';
});

cancelPickBtn.addEventListener('click', () => {
    cancelPicking();
    modal.classList.remove('hidden');
});

map.on('click', (e) => {
    if (isPicking) {
        tempCoords = [e.latlng.lat, e.latlng.lng];
        coordsInput.value = `${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`;
        
        if (tempMarker) map.removeLayer(tempMarker);
        tempMarker = L.marker(tempCoords).addTo(map);

        cancelPicking();
        modal.classList.remove('hidden');
    }
});

function cancelPicking() {
    isPicking = false;
    banner.classList.add('hidden');
    document.getElementById('map').style.cursor = '';
}

// OpenStreetMap Nominatim Search
let searchTimeout = null;

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    searchResults.innerHTML = '';
    
    if (query.length < 3) {
        searchResults.classList.add('hidden');
        return;
    }
    
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`);
            const data = await res.json();
            
            searchResults.innerHTML = '';
            if (data.length > 0) {
                searchResults.classList.remove('hidden');
                data.forEach(place => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.textContent = place.display_name;
                    item.addEventListener('click', () => {
                        selectOsmPlace(place);
                    });
                    searchResults.appendChild(item);
                });
            } else {
                searchResults.classList.add('hidden');
            }
        } catch (err) {
            console.error("Search failed", err);
        }
    }, 500);
});

function selectOsmPlace(place) {
    searchInput.value = place.display_name;
    searchResults.classList.add('hidden');
    
    const titleInput = document.getElementById('input-title');
    if (!titleInput.value) {
        titleInput.value = place.name || place.display_name.split(',')[0];
    }
    
    const lat = parseFloat(place.lat);
    const lng = parseFloat(place.lon);
    
    tempCoords = [lat, lng];
    coordsInput.value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    
    if (tempMarker) map.removeLayer(tempMarker);
    tempMarker = L.marker(tempCoords).addTo(map);
    map.flyTo(tempCoords, 14);
}

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.add('hidden');
    }
});

saveBtn.addEventListener('click', () => {
    const day = document.getElementById('input-day').value || 'Day ?';
    const date = document.getElementById('input-date').value || '';
    const time = document.getElementById('input-time').value || '--:--';
    const title = document.getElementById('input-title').value || 'New Location';
    const category = document.getElementById('input-category').value;
    const desc = document.getElementById('input-desc').value || '';
    
    if (!tempCoords) {
        alert("Please pick a location on the map or search first!");
        return;
    }

    const newItem = {
        id: Date.now().toString(),
        day, date, time, title, category, desc,
        coords: tempCoords
    };

    itinerary.push(newItem);
    render();
    
    modal.classList.add('hidden');
    resetForm();
});

function resetForm() {
    document.getElementById('input-day').value = '';
    document.getElementById('input-date').value = '';
    document.getElementById('input-time').value = '';
    document.getElementById('input-title').value = '';
    document.getElementById('input-desc').value = '';
    coordsInput.value = '';
    searchInput.value = '';
    searchResults.classList.add('hidden');
    tempCoords = null;
    if (tempMarker) {
        map.removeLayer(tempMarker);
        tempMarker = null;
    }
}
