# FileUpload-Backend

A robust backend API for handling file uploads with cloud storage integration using Express.js, MongoDB, and Cloudinary.

## 📋 Overview

This is a Node.js backend application that provides RESTful API endpoints for file upload operations.  It supports local file storage and cloud-based storage via Cloudinary, with MongoDB for metadata persistence.

## ✨ Features

- **Multiple Upload Options**: Support for local and cloud-based file uploads
- **Cloudinary Integration**: Seamless integration with Cloudinary for cloud storage
- **Database Integration**: MongoDB integration for storing file metadata
- **Email Notifications**: Nodemailer integration for sending email notifications
- **Express File Upload**: Built-in support for handling multipart/form-data
- **RESTful API**: Clean and organized API endpoints
- **Environment Configuration**: Secure configuration using environment variables

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose ODM (v9.1.1)
- **Cloud Storage**: Cloudinary (v2.8.0)
- **File Upload**: express-fileupload (v1.5.2)
- **Environment Variables**: dotenv (v17.2.3)
- **Development**:  Nodemon (v3.1.11)

## 📁 Project Structure

```
FileUpload-Backend/
├── config/
│   ├── cloudinary.js      # Cloudinary configuration
│   ├── database.js         # MongoDB connection setup
│   └── nodemailer.js       # Email service configuration
├── controllers/
│   ├── fileUpload.js       # File upload logic
│   └── files/              # Uploaded files storage
├── models/
│   └── File.js             # File metadata schema
├── routes/
│   └── FileUpload.js       # API routes
├── . gitignore
├── index.js                # Application entry point
├── package.json
└── package-lock.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghost-28-02/FileUpload-Backend.git
   cd FileUpload-Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   
   # MongoDB Configuration
   MONGODB_URL=your_mongodb_connection_string
   
   # Cloudinary Configuration
   CLOUD_NAME=your_cloudinary_cloud_name
   API_KEY=your_cloudinary_api_key
   API_SECRET=your_cloudinary_api_secret
   
   # Email Configuration (if using nodemailer)
   EMAIL_HOST=your_email_host
   EMAIL_PORT=your_email_port
   EMAIL_USER=your_email_username
   EMAIL_PASSWORD=your_email_password
   ```

4. **Start the server**
   
   Development mode with auto-reload:
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm start
   ```

The server will start running on `http://localhost:5000` (or your configured PORT).

## 📡 API Endpoints

All file upload endpoints are accessible under the `/api/v1/upload` base path.

### Available Routes

Check the `routes/FileUpload.js` file for specific endpoint implementations.

**Base URL**:  `http://localhost:5000/api/v1/upload`

Example endpoints typically include:
- `POST /api/v1/upload/local` - Upload file locally
- `POST /api/v1/upload/cloud` - Upload file to Cloudinary
- `POST /api/v1/upload/image` - Upload image with optimization
- `POST /api/v1/upload/video` - Upload video file

## 🔧 Configuration

### Database Configuration

The application connects to MongoDB using the connection string defined in your environment variables.  Configuration is handled in `config/database.js`.

### Cloudinary Configuration

Cloudinary credentials are configured in `config/cloudinary.js`. Ensure you have set up your Cloudinary account and added the credentials to your `.env` file.

### File Upload Settings

The application uses temporary files for uploads, stored in `/tmp/` directory. This is configured in `index.js`:

```javascript
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
```

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework |
| mongoose | ^9.1.1 | MongoDB ODM |
| cloudinary | ^2.8.0 | Cloud storage |
| express-fileupload | ^1.5.2 | File upload middleware |
| dotenv | ^17.2.3 | Environment configuration |
| nodemon | ^3.1.11 | Development auto-reload |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License. 

## 👤 Author

**ghost-28-02**

- GitHub: [@ghost-28-02](https://github.com/ghost-28-02)

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- Cloudinary for cloud storage services
- MongoDB and Mongoose for database solutions

---

**Note**: Remember to never commit your `.env` file or expose sensitive credentials.  Add `.env` to your `.gitignore` file.
