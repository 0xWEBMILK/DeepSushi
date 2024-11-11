# 🍣 Deep Sushi

<img src="./assets/header.png">

A full-stack application for ordering and delivering sushi, combining a **React.js** front end with a **Flask** back end. This project provides an intuitive user experience to browse, order, and track sushi deliveries in real-time.

---

## 📝 Features

- **Responsive User Interface:** Built with React.js, optimized for both mobile and desktop.
- **Real-Time Order Updates:** Track order status from preparation to delivery.
- **Admin Dashboard:** Manage orders, update menu items, and monitor customer activities.
- **Secure Payments Integration:** Simulate or integrate with payment gateways.
- **User Authentication:** Secure user accounts with JWT-based sessions.
- **API Integration:** RESTful APIs with Flask for seamless front-end and back-end communication.

## 🚀 Technologies Used

### Front End (React.js)
- **React Hooks** for state and lifecycle management.
- **React Router** for smooth navigation across pages.
- **CSS Modules** & **Styled Components** for component-level styling.

### Back End (Flask)
- **Flask-RESTful** for API development.
- **SQLAlchemy** as the ORM for database operations.

## 📂 Project Structure

```plaintext
sushi-delivery-app/
├── frontend/              # React Front-End
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Main page components (Home, Menu, Cart, etc.)
│   │   ├── services/    # Axios API calls
│   │   └── App.js
│   └── ...
└── backend/              # Flask Back-End
    ├── api/
    │   ├── controllers/ # Route handlers
    │   ├── models/      # Database models
    │   ├── routes/      # API endpoints
    └── app.py           # Main Flask app file
```

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/0xWEBMILK/DeepSushi.git
   ```

2. **Front End Setup (React):**
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Back End Setup (Flask):**
   ```bash
   ---basic venv---
   cd backend
   python -m venv venv
   source ./venv/bin/activate or .\venv\Scripts\activate
   pip install -r requirements.txt
   python ./

   ---poetry---
   cd backend
   pip install poetry
   poetry shell
   poetry install
   python ./
   ```

4. **Environment Variables:**
   Set up `.env` files in both `backend` and `frontend` directories for API keys, database URIs, and other sensitive information.

## 🔧 Usage

- Open the app in your browser to browse the menu, add items to your cart, and simulate an order.
- Admins can log in to access the dashboard, manage the menu, and track all orders.
- API endpoints can be accessed for further integrations or testing.

## 📜 API Documentation

Each endpoint follows RESTful conventions and supports the following:
- `GET /api/menu` - Retrieve all sushi items.
- `POST /api/order` - Place a new order.
- `PUT /api/order/{id}` - Update order status (Admin only).
- `GET /api/user/{id}` - Fetch user details.

For detailed API docs, see the Swagger documentation at `http://localhost:5000/api/docs` once the server is running.

## 🛠️ Future Enhancements

- **Real-time order tracking** with WebSocket support.
- **Push Notifications** for order updates.
- **User Profile Management** with order history.
- **Social Media Logins** for easier account creation.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Enjoy your sushi ordering experience! 🍱
