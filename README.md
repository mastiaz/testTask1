# Cypress Test Suite
This repository contains end-to-end tests for Inforce test task.

Before running the tests, ensure you have the following software installed:
- Node.js (version >= 14)
- npm (Node Package Manager) or yarn
- 
Installation
1. Clone this repository to your local machine:
bash
    git clone https://github.com/your-username/your-repository.git
2. Navigate to the cloned repository directory:
bash
    cd your-repository
3. Install dependencies:
bash
    npm install
    # or
    yarn install
   
Configuration
Before running the tests, you may need to configure Cypress to target your specific environment. 
1. Open cypress.json file.
2. Modify the baseUrl property to match the URL of your web application.

```json
{
  "baseUrl": "https://www.your-web-app-url.com"
}
