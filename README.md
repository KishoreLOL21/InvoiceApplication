The InvoiceApplication is a lightweight, full-stack web application that allows users to create, view, edit, and download invoices.
It is built using a Spring Boot backend and a static frontend (HTML, CSS, JavaScript).
Users can dynamically generate invoices and export them in PDF format.

🚀 Features
🔧 Backend (Spring Boot)

REST endpoints for invoice generation

Server-side PDF generation

Clean controller-service architecture

Serves all static frontend assets

Ready for Docker deployment

🎨 Frontend (HTML / CSS / JS)

Simple and responsive UI for invoice creation

Dynamic form handling using JavaScript

Live preview of invoice entries

Ability to download invoices as PDF

Assets stored in src/main/resources/static:

index.html

home.html

secondPage.html

styles.css

script.js, app.js

Logo images

📦 Deployment Ready

Dockerized using multi-stage Dockerfile

.dockerignore included

Fully deployable on Render, Railway, Fly.io, Kubernetes, or any Docker-compatible cloud platform.

🏗 Project Structure
InvoiceApplication/
 ├── src/main/
 │    ├── java/org/example/
 │    │    ├── InvoiceApplication.java
 │    │    ├── InvoiceController.java
 │    │    └── (other backend files)
 │    ├── resources/
 │    │    └── static/
 │    │         ├── index.html
 │    │         ├── home.html
 │    │         ├── secondPage.html
 │    │         ├── styles.css
 │    │         ├── app.js
 │    │         ├── script.js
 │    │         ├── logos and images
 │    │         └── Template_Invoice.html
 ├── pom.xml
 ├── Dockerfile
 ├── .dockerignore
 ├── invoice.json
 └── README.md

🧰 Tech Stack
Backend

Java 17

Spring Boot

Spring Web

Servlet container (embedded Tomcat)

Frontend

HTML5

CSS3

JavaScript

Static assets served by Spring Boot

Deployment

Docker (multi-stage build)

Render / Fly.io / Railway (optional hosting)

🐳 Docker Support

This project includes a production-ready multi-stage Dockerfile.

🧱 Build Image
docker build -t invoice-app .

▶️ Run Container
docker run -p 8080:8080 invoice-app


If port 8080 is in use:

docker run -p 9090:8080 invoice-app

🌍 Open the App
http://localhost:8080

🔧 Build & Run Without Docker
1. Build JAR
mvn clean package -DskipTests

2. Run Application
java -jar target/*.jar

🌐 Deploying to Render (Recommended)

Push this repository to GitHub

Log in to https://render.com

Create New Web Service → Docker Environment

Select your repository

Deploy — Render builds using your Dockerfile

You receive a URL like:

https://invoiceapplication.onrender.com

📝 API Endpoints Overview
Method	Endpoint	Description
GET	/	Loads homepage (index.html)
POST	/invoice/generate	Generate invoice data / PDF
GET	/invoice/download/{id}	Download invoice by id

(Update this section based on your controller methods)

🛠 Configuration

Customize application properties by updating:

src/main/resources/application.properties


Important (for deployments):

server.port=${PORT:8080}

📥 Invoice Data Format

The project includes invoice.json, an example file representing:

Company details

Client details

Product items

Total calculations

You may extend or replace this based on your needs.

📢 Future Enhancements (Optional)

Database integration (MySQL/PostgreSQL)

User authentication

Multiple invoice templates

Export as Excel

Multi-language support

🤝 Contributing

Contributions are welcome!
You can open issues or submit pull requests.

📄 License

This project is open source.
Feel free to modify and use it for personal or commercial purposes.

If you want, I can further customize your README with:

✨ Badges (Build, Docker, License, Tech Stack)
📸 Screenshots of your UI
📚 API documentation
🔗 Live URL (after deployment)

Just tell me!
