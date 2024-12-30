# Next.js Base Repository

This repository serves as a base for projects developed with Next.js. It includes initial configurations, best practices, and a scalable framework to facilitate application development.

---

## **Table of Contents**

- [Next.js Base Repository](#nextjs-base-repository)
  - [**Table of Contents**](#table-of-contents)
  - [**Technologies**](#technologies)
  - [**Project Structure**](#project-structure)
  - [**Facility**](#facility)
  - [**Available Scripts**](#available-scripts)
  - [**Main Dependencies**](#main-dependencies)
  - [**Features Included**](#features-included)
  - [**Contribution**](#contribution)

---

## **Technologies**

This project uses the following technologies:

- **Next.js**: React framework for modern web applications.
- **TypeScript**: Support for static typing.
- **Tailwind CSS** (optional): CSS styles framework.
- **Zustand**: For global state management (optional).
- **ESLint and Prettier**: Tools to maintain clean and consistent code.

---

## **Project Structure**

The project structure follows a modular and scalable architecture:

```
next-base/
 └── 📁src
        └── 📁app
            └── 📁domains
                └── 📁auth
                    └── 📁components
                    └── 📁services
                    └── 📁store
                        └── authStore.ts
                    └── 📁utils
                    └── 📁views
            └── favicon.ico
            └── globals.css
            └── layout.tsx
            └── page.tsx
            └── 📁shared
                └── 📁components
                └── 📁utils
                └── 📁views
                    └── 📁c
                    └── 📁home
                        └── 📁components
                            └── Footer.tsx
                            └── Navbar.tsx
                        └── MyHome.tsx
                        └── 📁sections
                            └── Body.tsx
    └── .editorconfig
    └── .gitignore
    └── .prettierrc
    └── eslint.config.mjs
    └── next-env.d.ts
    └── next.config.ts
    └── package.json
    └── pnpm-lock.yaml
    └── postcss.config.mjs
    └── README.md
    └── tailwind.config.ts
    └── tsconfig.json
```

---

## **Facility**

Follow the steps below to configure and run the project:

1. Clone this repository:

   ```bash
   git clone <REPOSITORY_URL>
   cd my-next-base
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Run the server in development mode:

   ```bash
   pnpm run dev
   ```

4. Open your browser and go to `http://localhost:3000`.

---

## **Available Scripts**

In the `package.json` file, the following scripts are defined:

- `dev`: Start the server in development mode.
- `build`: Compile the application for production.
- `start`: Start the server in production mode.
- `lint`: Run ESLint to analyze the code.

Example of use:

```bash
pnpm run dev
```

---

## **Main Dependencies**

- **React**: Main library for building interfaces.
- **Next.js**: Framework for server-side rendering.
- **TypeScript**: Statically typed language.
- **Tailwind CSS**: Modern design framework (optional).
- **Axios**: HTTP client to make requests to APIs.
- **Zustand**: Lightweight global state handling (optional).

---

## **Features Included**

1. **Initial Settings**:

   - Preconfigured ESLint and Prettier.
   - Support for TypeScript.

2. **Modular Architecture**:

- Separation of logic and views.
  - Organization by features for scalable development.

3. **Global State Management**:

   - Optional configuration with Zustand.

4. **Modern Styles**:

   - Integration with Tailwind CSS (optional).

5. **Support for Forms and Validation**:
   - Using React Hook Form and Zod for validation (optional).

---

## **Contribution**

1. Fork this repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add new functionality"
   ```
4. Upload your changes to your branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a pull request on the original repository.
