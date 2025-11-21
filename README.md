README v1:

# 🚀 Smart consulting - Hiring process

## 📋 About the Project



## 🧪 First project: API Tests (Postman/Newman)

### 📋 Description

Collection of automated tests for the API with complete endpoint validations, including authentication, schemas, dynamic data, and performance metrics.

### 🔗 Tested Endpoints

#### Auth

| Method | Endpoint | Description | Status | Authentication |
|--------|----------|-------------|--------|----------------|
| `POST` | `/authenticate` | Authenticate user | ✅ 200 | ❌ Not Required |
| `POST` | `/forgot_password` | Send a token to user email | ✅ 200 | ❌ Not Required |
| `POST` | `/reset_password` | Reset user password | ✅ 200 | ❌ Not Required |

#### Users Collection

| Method | Endpoint | Description | Status | Authentication |
|--------|----------|-------------|--------|----------------|
| `GET` | `/users` | List all users | ✅ 200 | ✅ Required |
| `GET` | `/users/:id` | List a user by id | ✅ 200 | ✅ Required |
| `POST` | `/users` | Create a user | ✅ 201 | ❌ Not Required |
| `PUT` | `/users/:id` | Update a user by id | ✅ 200 | ✅ Required |
| `DELETE` | `/users/:id` | Delete a user by id | ✅ 200 | ✅ Required |

#### Products Collection

| Method | Endpoint | Description | Status | Authentication | Permissions |
|--------|----------|-------------|--------|----------------|-------------|
| `GET` | `/products` | List all products | ✅ 200 | ✅ Required | Admin |
| `GET` | `/products/:code` | List a product by code | ✅ 200 | ✅ Required | Admin |
| `POST` | `/products` | Create a product | ✅ 201 | ✅ Required | Admin |
| `PUT` | `/products/:code` | Update a product by code | ✅ 200 | ✅ Required | Admin |
| `DELETE` | `/products/:code` | Delete a product by code | ✅ 204 | ✅ Required | Admin |

### 🛠️ Step by step to run the tests

**Step 1: Import the Collection `mjv-final-project.postman_collection`**

1. Open Postman
2. Click on **"Import"**
3. Select the project collection file
4. Click on **"Import"**

**Step 2: Import the Environment**

1. In Postman, click on **"Import"**
2. Select the environment file `Local.postman_environment`
3. Click on **"Import"**

**Step 3: Configure the Environment**

1. Select the imported environment **"Local.postman_environment"**
2. Verify if the variables are configured:
   - `baseUrl`: API base URL

**Step 4: Run the Tests**

1. Hover over the collection
2. Click on the **"View more options"** button (three dots)
3. Click on **"Run"**
4. Select the desired tests
5. Select the correct environment
6. Click on **"Run [collection name]"**

### 🎯 Test Features

- ✅ **Authentication**: Token and credentials validation
- ✅ **Schema Validation**: JSON response structure
- ✅ **Dynamic Data**: Test data generation and manipulation
- ✅ **Performance**: API response time
- ✅ **Data Validation**: Required fields and formats
- ✅ **Status Codes**: HTTP response codes verification
- ✅ **Negative Tests**: Error scenario validation
- ✅ **Authorization**: Role-based access control validation

## 📈 Reports and Results

### 📊 Newman Report

- **Location**: `./newman/newman-report.html`
- Contains detailed API test results
- Includes performance and coverage metrics

## 🛠️ Technologies Used

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Newman](https://img.shields.io/badge/Newman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🖋 Author

<p align="center">Developed by Mariana Soares</p>

<div align="center">
   <br>
   <a href="mailto:marianasoares.ti@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
   <a href="https://www.linkedin.com/in/mariana-galindo-391413220/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
   <br>
</div>