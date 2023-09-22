const eventLaunch = [ ] // leave this empty, copy event screen data
const eventScreenings = [
    // Day 1 Entries
    {
      img: "assets/page2-assets/shawshank.jpg",
      eventTitle: "Screening: The Shawshank Redemption",
      description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      link: "https://www.imdb.com/title/tt0111161/",
      day: "day1",
      eventType: "screening",
      time: "11:00 AM - 01:00 PM"
    },
    {
      img: "assets/page2-assets/godfather.jpg",
      eventTitle: "Screening: The Godfather",
      description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      link: "https://www.imdb.com/title/tt0068646/",
      day: "day1",
      eventType: "screening",
      time: "11:00 AM - 01:00 PM"
    },
    {
      img: "assets/page2-assets/freddy.jpg",
      eventTitle: "New Launch: Five Nights at Freddy",
      description: "A troubled security guard begins working at Freddy Fazbear's Pizza. During his first night on the job, he realizes that the night shift won't be so easy to get through. Pretty soon he will unveil what actually happened at Freddy's.",
      link: "https://www.imdb.com/title/tt4589218/",
      day: "day1",
      eventType: "newLaunch",
      time: "11:00 AM - 01:00 PM"
    },
  
    // Day 2 Entries
    {
      img: "assets/page2-assets/inception.jpg",
      eventTitle: "Screening: Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      link: "https://www.imdb.com/title/tt1375666/",
      day: "day2",
      eventType: "screening",
      time: "11:00 AM - 01:00 PM"
    },
    {
      img: "assets/page2-assets/dark.jpg",
      eventTitle: "Screening: The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      link: "https://www.imdb.com/title/tt0468569/",
      day: "day2",
      eventType: "screening",
      time: "11:00 AM - 01:00 PM"
    },
    {
      img: "assets/page2-assets/aquaman.jpg",
      eventTitle: "New Launch: Aquaman The Lost Kingdom",
      description: "Arthur must enlist the help of his half-brother Orm in order to protect Atlantis against Black Manta, who has unleashed a devastating weapon in his obsessive quest to avenge his father's death.",
      link: "https://www.imdb.com/title/tt9663764/?ref_=vp_vi_tt",
      day: "day2",
      eventType: "newLaunch",
      time: "11:00 AM - 01:00 PM"
    },
  
    // Day 3 Entries
    {
      img: "assets/page2-assets/tom.jpg",
      eventTitle: "Signing Event: Famous Stars",
      description: "Join us for an exclusive signing session with some of the Most Popular actors. Get a chance to meet them in person and receive their autograph.",
      gate: "C-137",
      date: "September 25, 2023",
      link: "https://www.imdb.com/name/nm0000129/",
      day: "day3",
      eventType: "other",
      time: "11:00 AM - 01:00 PM"
    },
    {
      img: "assets/page2-assets/ryangosling.jpg",
      eventTitle: "Q&A: Ryan Gosling",
      description: "Don't miss this opportunity to participate in a live Q&A session with the talented actor, Ryan Gosling. Get your questions ready!",
      gate: "Event Hall A",
      date: "October 25, 2023",
      link: "https://www.imdb.com/name/nm0331516/",
      day: "day3",
      eventType: "other",
      time: "11:00 AM - 01:00 PM"

    },
    {
      img: "assets/page2-assets/starwars.jpg",
      eventTitle: "Character Cosplay Contest: Star Wars",
      description: "Calling all Star Wars fans! Dress up as your favorite characters and compete in our epic cosplay contest. May the Force be with you!",
      gate: "Cosplay Arena",
      date: "October 25, 2023",
      link: "https://www.starwars.com/",
      day: "day3",
      eventType: "other",
      time: "11:00 AM - 01:00 PM"
    }
  ]; 
  function populateEvents(day) {
    const cardsContainer = document.querySelector(".centered-cards");
    const filteredEvents = eventScreenings.filter(event => event.day === day);

    let outputData = "";

    for (const event of filteredEvents) {
        let additionalInfo = '';

        switch (event.eventType) {
            case 'other':
                additionalInfo = `
                    <p>Date: ${event.date}</p>
                    <p>Gate: ${event.gate}</p>
                `;
                break;
            // Add more cases for other event types if needed
        }

        outputData += `
            <div class="card">
                <img src="${event.img}" alt="${event.eventTitle}" />
                <div class="card-content">
                    <h3>${event.eventTitle}</h3><br>
                    <h3>Description:</h3>
                    <p>${event.description}</p><br>
                    <h3>Timing:</h3>
                    <p>Time:${event.time}</p><br>
                    <a href="${event.link}" target="_blank">IMDb Link</a><br><br>
                    ${additionalInfo}
                </div>
            </div>
        `;
    }
    cardsContainer.innerHTML = outputData;
}
document.getElementById("day1").addEventListener("click", () => populateEvents("day1"));
document.getElementById("day2").addEventListener("click", () => populateEvents("day2"));
document.getElementById("day3").addEventListener("click", () => populateEvents("day3"));
populateEvents("day1");


