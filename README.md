# Visa Status Tracker – Internal Tool

A mini full-stack internal tool built for **The Flying Panda** to track visa slot alerts.

---

## 🚀 Tech Stack

### Frontend

- React
- JS
- HTML Table
- CSS

### Backend

- Node.js
- Express
- In-memory data storage

---

## 📦 Features

### Backend

- RESTful CRUD APIs:
  - `GET /api/alerts`
  - `POST /api/alerts`
  - `PUT /api/alerts/:id`
  - `DELETE /api/alerts/:id`
- Query-based filtering using URL parameters:
  - `country`
  - `status`
- Custom middleware for request validation
- Proper HTTP status codes
- Centralized error handling
- CORS enabled

### Frontend

- Form to create visa alerts
- Table view to display alerts
- Filter alerts by country or status
- Update visa status
- Delete visa alerts
- Frontend communicates only with the custom backend API

---

## 🧠 Data Model

Each visa alert follows this structure:

```js
{
  id: string,
  country: string,
  city: string,
  visaType: "Tourist" | "Business" | "Student",
  status: "Active" | "Booked" | "Expired",
  createdAt: string
}
```

## Setup Instructions

Backend :

```
- cd backend
- npm install
- npm run dev
```

Runs on http://localhost:2000

Frontend :

```
- cd frontend
- npm install
- npm run dev
```

Runs on http://localhost:5173

## Design Decisions

### Design Decisions

- In-memory storage was used to keep the setup simple and focused on core logic

- HTML tables were used for clear and structured data display

### Future Improvements

- Add persistent database

- Pagination for large datasets

- Suggestion based on country list in input

- Notification on alert creation, updation, deletion

## Use of AI tool

### AI assisted with:

- Suggesting a simple and suitable color scheme for the UI

- Understanding the concept and use of custom middleware in Express

- Error solving

- Creating readme

### Manual problem-solving included:

- Passing handler functions from parent to child components

- Updating data in the parent component’s state based on actions triggered in child components

- Error handling

- Data flow and state updates across components

## Note

- A small set of preloaded (hardcoded) alert data is included to demonstrate listing, filtering, and update functionality on initial load.
