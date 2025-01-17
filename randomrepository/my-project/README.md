# GitHub Random Repository Finder

## Project Overview
This project introduces key concepts in front-end development, such as working with external APIs, handling asynchronous requests, and managing various UI states using JavaScript. The application is a GitHub repository finder that fetches and displays a random repository based on a user-selected programming language.

## Features
- Dropdown menu for selecting a programming language.
- Fetches a random GitHub repository using the **GitHub Repository Search API**.
- Displays repository details, including:
  - Name
  - Description
  - Number of stars
  - Number of forks
  - Number of open issues
- Handles different UI states:
  - **Loading state** while fetching data.
  - **Empty state** if no data is available.
  - **Error state** for API request failures.
- "Refresh" button to fetch another random repository.

## Inspiration
This project was inspired by [Roadmap.sh](https://roadmap.sh/projects/github-random-repo).

## How It Works
1. User selects a programming language from the dropdown menu.
2. The app sends a request to the **GitHub Repository Search API** with the selected language as a query parameter.
3. The app fetches and displays a random repository that matches the selected language.
4. Users can click the "Refresh" button to fetch another repository.

## Resources Used
- **GitHub Repository Search API**: [API Documentation](https://docs.github.com/en/rest/search#search-repositories)
- **Programming Language Data**: A curated list of popular programming languages to populate the dropdown menu.

## Project Goals
- **API Integration**: Gain hands-on experience working with APIs and parsing JSON data.
- **Asynchronous JavaScript**: Practice handling asynchronous requests and promises.
- **UI State Management**: Learn to manage and display different UI states effectively.

## Future Improvements
- Add pagination for repositories.
- Include advanced filters (e.g., by repository size, creation date).
- Improve the UI with animations and responsive design.

## License
This project is licensed under the [MIT License](LICENSE).

---
Happy coding! 🚀
