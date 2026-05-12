const dataPath = "../assets/data/json/data.json";

async function loadEventData() {
  try {
    const response = await fetch(dataPath);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    populatePage(data);
  } catch (error) {
    console.error("No se pudo cargar data.json:", error);
    document.getElementById("hero-title").textContent = "Salinazo Extremo 2";
  }
}

function populatePage(data) {
  console.log("Datos cargados:", data);
  const eventInfo = data.event_info;
  const registration = data.registration;
  const members = data.members || [];

  document.getElementById("hero-title").textContent = eventInfo.name;
  document.getElementById("event-tagline").textContent = eventInfo.tagline;
  document.getElementById("event-date").textContent = eventInfo.date;
  document.getElementById("event-start").textContent = eventInfo.schedule.start;
  document.getElementById("event-arrival").textContent = eventInfo.schedule.arrival;

  const stravaLink = data.social?.strava_link || "https://www.strava.com";
  const responsivLink = data.social?.responsiv_link || "https://responsiv.com";

  document.getElementById("strava-button").href = stravaLink;
  document.getElementById("responsiv-button").href = responsivLink;

  // document.getElementById("footer-info").textContent = `${eventInfo.name} • MTB • ${eventInfo.location.city}, ${eventInfo.location.state}`;

  const membersList = document.getElementById("members-list");
  membersList.innerHTML = "";

  if (members.length === 0) {
    membersList.innerHTML = "<li>No hay participantes registrados.</li>";
    return;
  }

  members.forEach((member) => {
    const item = document.createElement("li");
    item.className = "member-item";
    item.innerHTML = `
      <span class="member-number">${member.participant_number}</span>
      <span class="member-name">${member.name}</span>
    `;

    membersList.appendChild(item);
  });
} 

loadEventData();
