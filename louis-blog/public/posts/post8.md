### Client-Side MNIST Digit Recognition Using TensorFlow.js

![screenshot of the MNIST website](./post_images/mnist-website.webp)

[This project is live! - Check the website](https://mnist.thefrenchartist.dev/)

#### Overview

This blog post presents a web-based application designed to perform handwritten digit recognition using the MNIST dataset. The application is built with TensorFlow.js, allowing the neural network to run entirely in the user's browser. This approach not only provides real-time feedback but also enhances user privacy by eliminating the need for server-side computation. In this post, we'll dive into the implementation details, the neural network model used, and the benefits of client-side processing for this type of application.

#### Background: MNIST and Neural Networks

The MNIST dataset is a well-known benchmark in the field of computer vision, particularly for tasks involving handwritten digit recognition. Introduced by Yann LeCun and collaborators in 1998, the dataset comprises 70,000 grayscale images of handwritten digits, each sized 28x28 pixels. This dataset has been widely used to test and compare the performance of various machine learning models, especially neural networks.

A typical neural network used for MNIST classification involves several layers, including convolutional layers that help in extracting features from the input images, followed by fully connected layers that map these features to the final digit classification. The network learns to recognize the patterns and structures that correspond to different digits, achieving high accuracy on both training and testing data.

In this project, a pre-trained convolutional neural network (CNN) model is utilized to perform digit recognition directly in the browser using TensorFlow.js. This enables the application to provide instant feedback on the user’s input without relying on a server for processing.

#### Implementation Details

The project is split into two main components: a light prototype and a full website. Both are designed to be run locally or deployed for wider access.

##### 1. Light Prototype: Running a Simple HTML File

For quick testing or demonstration purposes, the project includes a simple HTML file (`test.html`) that can be served using a lightweight Python HTTP server. This setup is ideal for quickly showcasing the core functionality of the application without any additional overhead.

To run the light prototype locally:

1. **Start a Simple HTTP Server**:
   ```bash
   $ python -m http.server 8000
   ```
   This command starts a local server, serving the `test.html` file at `http://localhost:8000`. You can then open this URL in your browser to see the application in action.

2. **Draw and Recognize**:
   In the browser, draw a digit on the canvas. The TensorFlow.js model, running entirely in the browser, will recognize the digit and display the result instantly.

##### 2. Full Website: Running the Vite + React Application

For a more polished experience, the project also includes a full website built with Vite and React. This version provides a more comprehensive user interface and is intended for deployment as a complete web application.

To run the full website locally:

1. **Navigate to the Project Directory**:
   ```bash
   $ cd mnist-client
   ```

2. **Start the Development Server**:
   ```bash
   $ npm run dev
   ```
   This command launches a development server with live reloading, allowing you to see changes in real-time as you work on the project. The website can be accessed at `http://localhost:3000`.

3. **Deploying the Website**:
   If you want to deploy the website to a custom domain, you can do so by updating the `CNAME` file with your desired domain name and running:
   ```bash
   $ npm run deploy
   ```
   This will deploy the project, making it accessible to users worldwide.

#### Advantages of Client-Side Processing

Implementing the digit recognition on the client side comes with several key benefits:

- **Privacy**: Since all computations are performed locally, user data never leaves the browser. This ensures complete privacy, which is particularly important for applications dealing with sensitive data.

- **Real-Time Performance**: By avoiding the need for server requests, the application provides real-time feedback, significantly enhancing the user experience.

- **Scalability**: Without the dependency on backend servers, the application can easily scale to accommodate a large number of users without requiring additional infrastructure.

#### Conclusion

This project is a demonstration of how modern web technologies, like TensorFlow.js, can be used to bring advanced machine learning models directly into the browser. By leveraging client-side processing, the application achieves both high performance and strong privacy protections. Whether you are a developer interested in exploring TensorFlow.js or a hobbyist curious about client-side AI, this project serves as an excellent example of what can be achieved with these tools.

In the future, similar techniques can be applied to more complex models and tasks, pushing the boundaries of what is possible in browser-based machine learning. This project, while simple in its scope, opens the door to a wide range of possibilities for interactive and privacy-focused AI applications on the web.

[This project is live! - Check the website](https://mnist.thefrenchartist.dev/)