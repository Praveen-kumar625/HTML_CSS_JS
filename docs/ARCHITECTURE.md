# Repository Architecture & Design Patterns

This document outlines the architectural decisions and design patterns implemented across this portfolio to ensure scalability, maintainability, and performance.

---

## 🏗️ Structural Philosophy: The Categorized Monorepo
We use a categorized folder structure to separate production-ready applications from fundamental learning notes.

- **`projects/`**: High-fidelity applications following production standards.
- **`games/`**: Logic-intensive interactive applications.
- **`learning-archives/`**: Time-stamped fundamental challenges and theoretical notes.

---

## 🛠️ Core Design Patterns

### 1. The UI-State Separation (Vanilla JS)
Across all projects (e.g., `movie-database`, `task-manager`), we implement a consistent `UI` object pattern.
- **Selective DOM Querying:** All DOM references are cached in a single `UI` or `SELECTORS` object at the top of the file to prevent redundant querying.
- **Functional Logic:** Business logic (fetching, calculation) is kept in pure or dedicated functions, decoupled from direct DOM manipulation where possible.

### 2. Event Delegation
For dynamic lists (like the `task-manager`), we prioritize event delegation or structured event attachment during creation to maintain performance and prevent memory leaks.

### 3. Async/Await Orchestration
Our API integrations utilize the modern `async/await` syntax with robust `try/catch` blocks. This ensures that users always receive feedback (loading states or error messages) regardless of network conditions.

---

## 📦 Data Management
- **Persistence:** We utilize `window.localStorage` for lightweight, client-side state persistence without the need for a backend.
- **API Integration:** Integration with standard RESTful APIs (like TVMaze) demonstrates the ability to handle real-world JSON data and dynamic rendering.

---

## 🎨 Styling Standards
- **Modern CSS:** Leveraging Flexbox and CSS Grid for layout.
- **Design Tokens:** Use of CSS variables (`:root`) for consistent color palettes and spacing across projects.
- **Responsive Web Design (RWD):** Mobile-first media queries are standard across all production projects.
