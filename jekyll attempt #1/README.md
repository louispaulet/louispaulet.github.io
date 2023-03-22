# Jekyll Hello World App

This repository contains a simple Jekyll Hello World app with a custom homepage and style. The project is set up to work with Docker, so you don't need to install Jekyll on your host machine.

## Prerequisites

- Docker: [Download and install Docker](https://www.docker.com/get-started)

## Getting Started

1. Clone this repository:

````bash
git clone https://github.com/louispaulet/jekyll-docker-compose-hello-world.git
cd jekyll-docker-compose-hello-world
````


Replace `yourusername` and `your-repository` with the appropriate GitHub username and repository name.

2. Build and run the Jekyll app using Docker Compose:

````bash
docker-compose up --build
````


3. Open your web browser and navigate to [http://localhost:4000](http://localhost:4000) to view the Jekyll Hello World app.

## Structure

The project has the following structure:
````
.
├── _config.yml # Jekyll configuration file
├── assets
│ └── css
│ └── styles.css # Custom CSS styles
├── Gemfile # Ruby gem dependencies
├── Dockerfile # Dockerfile to build the Jekyll app image
├── docker-compose.yml # Docker Compose configuration to run the Jekyll app
└── index.md # Homepage content
````


## License

This project is released under the [MIT License](LICENSE).

