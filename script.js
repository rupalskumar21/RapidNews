const apiKey = '8e73a52090b84011a39eb56ddf3dd910'; // Replace with your actual API key

// Fetch top headlines from the API
fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-09-03&sortBy=publishedAt&apiKey=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Log the data to inspect its structure

        // Ensure data.articles exists and is an array before proceeding
        if (data.articles && Array.isArray(data.articles)) {
            displayArticles(data.articles);
        } else {
            console.error('No articles found or data.articles is not an array.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Function to display articles
function displayArticles(articles) {
    const newsContainer = document.getElementById('news-list');
    newsContainer.innerHTML = ''; // Clear any previous content

    // Ensure articles is an array before calling forEach
    if (Array.isArray(articles)) {
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description ? article.description : 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(articleElement);
        });
    } else {
        console.error('articles is not array');
    }
}
