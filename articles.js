// First, update the articles.js to include author information:
const articles = [
    {
        id: 1,
        title: "Test A: Les ondes gravitationnelles",
        author: "Farba Diouf",
        category: "science",
        preview: "Une exploration des dernières découvertes en physique des ondes gravitationnelles...",
        content: `
            <h1>Test A: Les ondes gravitationnelles</h1>
            <div class="article-meta">
                <span class="author">Par Marie Laurent</span> • 
                <span class="date">2024-11-10</span>
            </div>
            <p>Les ondes gravitationnelles sont des perturbations de la courbure de l'espace-temps qui se propagent comme des vagues.</p>
            <h2>Histoire de leur découverte</h2>
            <p>Prédites par Einstein en 1916, leur première détection directe a eu lieu en 2015...</p>
            <h2>Impact sur notre compréhension de l'univers</h2>
            <p>Cette découverte a ouvert une nouvelle fenêtre d'observation sur l'univers...</p>
        `,
        date: "2024-11-10",
        image: "ondegravita.jpg"
    },
    {
        id: 2,
        title: "Test B: Animation CSS avancée",
        author: "Samba Sene",
        category: "code",
        preview: "Comment créer des animations fluides avec CSS...",
        content: `
            <h1>Test B: Animation CSS avancée</h1>
            <div class="article-meta">
                <span class="author">Par Thomas Dubois</span> • 
                <span class="date">2024-11-10</span>
            </div>
            <p>Les animations CSS modernes permettent de créer des interfaces utilisateur dynamiques et engageantes.</p>
            <div class="code-image">
            .element {
                animation: slide-in 0.5s ease-out;
            }

            @keyframes slide-in {
                from {
                    transform: translateX(-100%);
                }
                to {
                    transform: translateX(0);
                }
            }
            </div>
            <h2>Principes fondamentaux</h2>
            <p>Les animations CSS reposent sur deux concepts clés : les transitions et les keyframes...</p>
        `,
        date: "2024-11-10",
        image: "codecss.jpg"
    }
];
