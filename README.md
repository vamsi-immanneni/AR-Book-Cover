# Augmented Reality Book Cover: The Art of War by Sun Tzu

## Project Overview

This project brings the classic book "The Art of War" by Sun Tzu to life using AR. By scanning the front and back covers of the book with a camera, users can view augmented text and 3D models on top of the display. This project was developed using RedwoodJS, AR.js, and A-Frame for web-based AR experiences. Therefore, it is a bit finnicky and the tracking is not as robust as it would be on a mobile device with a better camera or if it was done via a higher-powered AR platform. This is what worked best on my mobile laptop, which does not have a dedicated GPU and pretty low RAM.

### Features

- **Front Cover**: Displays the title and author in augmented text along with 3D models representing themes or characters from the book. The marker for demo is found in the root and it is called pattern-Front.png
- **Back Cover**: Shows book details (title, author, number of pages, publication date) in augmented reality. An interactive component allows toggling between the book details and a short review. The marker for demo is found in the root and it is called pattern-back.png

## Demo

A demonstration of the AR book cover in action can be viewed in `DemoAR.mov.zip` located in the project's root directory.
## Getting Started

### Prerequisites

- Node.js (Recommended version: 20.0.0)
- Yarn package manager
- Git

### Setup Instructions

1. **Clone the Project**
    ```sh
    git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_PROJECT_REPOSITORY.git
    cd YOUR_PROJECT_REPOSITORY
    ```

2. **Node Version Management**
    This project is optimized for Node.js version 20.0.0. It is recommended to use NVM (Node Version Manager) to manage and use the correct Node.js version.

    - Install NVM following the instructions on the [NVM GitHub page](https://github.com/nvm-sh/nvm).
    - Install and use Node.js version 20.0.0:
        ```sh
        nvm install 20.0.0
        nvm use 20.0.0
        ```

3. **Install Dependencies**
    Use Yarn to install the project dependencies:
    ```sh
    yarn install
    ```
    If there are additional Node.js dependensies:
    ```sh
    npm install
    ```

4. **Running the Project**
    Start the development server:
    ```sh
    yarn redwood dev
    ```

## How to Interact

- Use a webcam to scan the AR markers (images of the front and back covers included in the project repository).
- For the back cover, click on the button to toggle between the book details and the review.

## Limitations

- AR marker recognition depends on the camera quality and environmental lighting.
- AR-Frame is not as powerful in tracking as other options

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

