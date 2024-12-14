import React from "react";
import "./App.css";

const dramas = [
  {
    title: "The-Unstoppable",
    description: "After dying in his former life, Lance Darner unexpectedly reincarnated back to 20 years ago, just a few hours before the outbreak of a virus catastrophe.",
    image: "/comic/horror.jpg",
    url: 'https://mangatoon.mobi/en/the-unstoppable?content_id=3446108',
  },
  {
    title: "The-World-Canglan",
    description: "One is the immortal of the heaven, while the other is a good-for-nothing cultivator rookie.",
    image: "/comic/attack.jpg",
    url: 'https://mangatoon.mobi/en/the-world-canglan?content_id=2074',
  },
  {
    title: "Vampire-Charming",
    description: "What if you’re spotted by a vampire?! And he is a very handsome vampire!! A wonderful show is about to begin.",
    image: "/comic/vampire.jpg",
    url: 'https://mangatoon.mobi/en/vampire-charming?content_id=802',
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Comic Pool</h1>
      </header>
      <main className="main">
        {dramas.map((drama, index) => (
          <div className="drama-card" key={index}>
            <img src={drama.image} alt={drama.title} className="drama-image" />
            <a href={drama.url} target="_blank" rel="noopener noreferrer">
            <h2>{drama.title}</h2>
            </a>
            <p>{drama.description}</p>
          </div>
        ))}
      </main>
      <h2>About</h2>
      <p>Comics are a medium used to express ideas with images, often combined with text or other visual information. It typically takes the form of a sequence of panels of images.</p>
      <h2>History</h2>
      <p>The history of comics has followed different paths in different cultures. Scholars have posited a pre-history as far back as the Lascaux cave paintings. By the mid-20th century, comics flourished, particularly in the United States, western Europe (especially France and Belgium), and Japan. The history of European comics is often traced to Rodolphe Töpffer's cartoon strips of the 1830s, while Wilhelm Busch and his Max and Moritz also had a global impact from 1865 on, and became popular following the success in the 1930s of strips and books such as The Adventures of Tintin.</p>
      <h2>Popularity</h2>
      <p>Marvel and DC have dominated the comic book scene, particularly superhero comics. Characters like Spider-Man, Batman, and Wonder Woman are household names.
         The success of blockbuster movies, such as the Marvel Cinematic Universe (MCU) and DC Extended Universe (DCEU), has fueled the popularity of comics. Many people are introduced to comics through these films.  
      </p>
    </div>
  );
}

export default App;
