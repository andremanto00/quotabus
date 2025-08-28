# MiniBus 🚍

## Backend (Laravel)

### Install dependencies

```bash
composer install
```

### Copy the example environment file and configure it

```bash
cp .env.example .env
```

Set up the database connection.

### Generate the application key

```bash
php artisan key:generate
```

### Run database migrations

```bash
php artisan migrate
```

### Start the Laravel server

```bash
php artisan serve
```

The API will be available at: [http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)

---

## Frontend (React)

### Navigate to the frontend folder

```bash
cd frontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## Main Features

* View a list of buses with status and capacity.
* Create a new bus.
* Edit or delete existing buses.
* Frontend-backend interaction via REST API with token authentication.

---

## Why These Technologies

* **Laravel**: Fast to set up, secure, and ideal for building REST APIs.
* **React**: Dynamic, modular UI, easy to maintain and scale.
* **TypeScript**: Static typing reduces runtime errors.
* **Custom CSS**: Complete control over design, lightweight, and easy to modify.

---

## Notes

* Authentication token for API calls must be added in the header:

```
Authorization: Bearer <token>
```

* The project structure allows separate development of frontend and backend while keeping a single repository.
