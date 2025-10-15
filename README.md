# MindPocket Frontend

Frontend for **MindPocket** — a personal notes and link management app that allows users to **save, organize, tag, and share** their notes and resources publicly.  
Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🧩 Tech Stack

- ⚛️ **React (Vite)** — Modern and fast build setup  
- 💎 **TypeScript** — Type-safe development  
- 🎨 **Tailwind CSS** — Utility-first styling  
- 🌐 **Axios** *(planned)* — For API integration with the backend  
- 🔐 **JWT Auth (planned)** — Secure login and access to private content  

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anubhawdwd/mindpocket-fe.git
   cd mindpocket-fe
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🎨 Tailwind Setup Notes

This project follows the **official Tailwind CSS + Vite setup**.
[TailwindCSS official guide](https://tailwindcss.com/docs/guides/vite).

---

## 🧠 Project Overview

MindPocket helps users:

* 📝 Save and manage notes, tweets and links
* 🌍 Make notes public or private
* 🔗 Generate and share unique shareable links
* 💾 Sync securely with the backend (Node.js + MongoDB)

---

## 🚀 Development Notes

* The app consumes APIs from [`mindpocket-be`](https://github.com/anubhawdwd/mindpocket-be).
* Environment variables (like API base URLs) will be managed using **Vite’s `.env` files**.
* Example `.env` setup:

  ```bash
  VITE_API_BASE_URL=http://localhost:3000/api/v1
  ```

---

## 📦 Build for Production

```bash
npm run build
```

Then preview the optimized build:

```bash
npm run preview
```

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

Built with ❤️ by [Anubhaw Dwivedi](https://github.com/anubhawdwd)

```