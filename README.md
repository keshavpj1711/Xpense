# <img src="./src/assets/image.png" alt="drawing" width="25"/> Xpense

Xpense is a Vite-based React project that utilizes Tailwind CSS and shadcn/ui for styling and UI components. 
This README outlines how to set up the project, collaborate effectively, and contribute to its development.

## Tech Stack

Xpense is going to be built using the following technologies:

- **Frontend:**
  - **React**
  - **Vite**
  - **Tailwind CSS**
  - **shadcn/ui**: A collection of accessible and customizable components built with Radix UI and Tailwind CSS, enhancing the UI component library.

- **Backend:**
  - **Supabase**: An open-source backend-as-a-service platform that provides a PostgreSQL database, authentication, and storage. It serves as the backend for handling data storage, user authentication, and real-time capabilities.

## Getting Started

### Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v14 or higher)
- A package manager (preferably npm)

Two install any of the above please make a google search in order to get started.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/keshavpj1711/Xpense.git
   cd Xpense
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173/`. Or at the location which is mentioned after running `npm run dev`.

## Workflow for Collaborator

After cloning you'll try to add new features, following are the contributing guidlines

### 1. Create a New Branch

Always create a new branch for your feature or fix to keep the main branch stable:

```bash
git checkout -b feature-branch-name
```

### 2. Make Changes and Commit

1. Develop the feature or fix bugs in your branch.
2. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

### 3. Push Changes

Push your branch to the remote repository:

```bash
git push origin feature-branch-name
```

### 4. Create a Pull Request (PR)

1. Go to the repository on GitHub.
2. Click **Pull Requests** and create a new PR.
3. Provide a clear description of the changes and request a review.

## Code Review and Merging

1. As the repository owner, review incoming PRs.
2. Suggest changes if necessary and merge the PR into the main branch once approved.

## Synchronize with Upstream Changes

One of the most important thing is that collaborators should regularly pull updates from the main branch to stay up-to-date:

```bash
git checkout main
git pull origin main
```

>By following these instructions, collaborators can efficiently contribute to the Xpense project while ensuring a smooth and organized development process.

