# Anonymous Messenger

Anonymity in communication empowers users to express themselves freely and honestly without the pressure of identity. This application provides a secure and straightforward platform for sending and receiving messages while completely preserving sender anonymity.

## What it Does

Anonymous Messenger is a web-based application designed for private, one-way communication. Users can send messages to a specific recipient using a unique user ID, ensuring that the sender's identity remains hidden from the recipient. This fosters environments where candid feedback, personal reflections, or sensitive information can be shared safely.

## Problem Solved

In many social and professional contexts, the fear of judgment or retaliation can prevent individuals from speaking their minds openly. Anonymous Messenger addresses this by:

*   **Facilitating Honest Feedback**: Enables individuals to provide unvarnished opinions or constructive criticism without revealing their identity.
*   **Reducing Social Pressure**: Allows users to communicate sensitive topics or express vulnerabilities without the anxiety associated with self-identification.
*   **Promoting Candid Dialogue**: Creates a safe space for discussions that might otherwise be inhibited by personal biases or hierarchies.

## Key Features

*   **Complete Anonymity**: Senders' identities are never revealed to recipients.
*   **Targeted Messaging**: Messages are sent to specific users via their unique, publicly shareable ID.
*   **Simple Interface**: An intuitive and easy-to-use platform for sending and receiving anonymous communications.

## Getting Started

To get a local copy up and running for development purposes, follow these steps.

### Prerequisites

Ensure you have Node.js and npm (or yarn, pnpm, bun) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/Anonymous-Messenger.git
    cd Anonymous-Messenger
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

1.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
2.  Open your browser and navigate to `http://localhost:3000` to see the application in action.

You can begin editing the application by modifying `app/page.tsx`. Pages auto-update as you edit the file.

## Usage

1.  **Obtain a User ID**: Each user will have a unique ID. Share this ID with those from whom you wish to receive anonymous messages.
2.  **Send a Message**: To send an anonymous message, enter the recipient's unique User ID and your message into the designated fields. The system ensures your identity is protected.
3.  **Receive Messages**: Navigate to your personal inbox or designated area within the application to view messages sent to your User ID.

## Technologies Used

*   **Framework**: [Next.js](https://nextjs.org/) - React framework for building full-stack web applications.
*   **Core Libraries**:
    *   [React](https://react.dev/) - JavaScript library for building user interfaces.
    *   [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.
*   **Authentication**:
    *   [@clerk/nextjs](https://clerk.com/docs/nextjs/get-started) - Authentication and user management for Next.js applications.
    *   [next-auth](https://next-auth.js.org/) - Flexible authentication for Next.js applications.
    *   [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Library for hashing passwords.
*   **Database**:
    *   [MongoDB](https://www.mongodb.com/) - NoSQL database.
    *   [Mongoose](https://mongoosejs.com/) - MongoDB object data modeling (ODM) for Node.js.
*   **UI Components & Styling**:
    *   [Radix UI](https://www.radix-ui.com/) - Headless UI components for building high-quality accessible design systems.
    *   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
    *   [shadcn/ui](https://ui.shadcn.com/) (Implied by Radix UI and Tailwind) - Collection of re-usable components.
    *   [class-variance-authority](https://www.npmjs.com/package/class-variance-authority) - Utility for composing Tailwind CSS classes.
    *   [clsx](https://www.npmjs.com/package/clsx) & [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) - Utilities for conditionally combining and merging CSS class strings.
    *   [lucide-react](https://lucide.dev/) - A beautiful open-source icon library.
*   **Form Management & Validation**:
    *   [React Hook Form](https://react-hook-form.com/) - Performant, flexible, and extensible forms with easy-to-use validation.
    *   [Zod](https://zod.dev/) - TypeScript-first schema declaration and validation library.
    *   [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) - Collection of validation resolvers for React Hook Form.
*   **Email Services**:
    *   [Nodemailer](https://nodemailer.com/) - Send emails from Node.js.
    *   [Resend](https://resend.com/) - Email API for developers.
    *   [@react-email/components](https://react.email/) & [@react-email/render](https://react.email/) - React components for building and rendering emails.
*   **3D Graphics & Visualization**:
    *   [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) - React renderer for Three.js.
    *   [@react-three/drei](https://github.com/pmndrs/drei) - A collection of useful helpers and abstractions for react-three-fiber.
    *   [Three.js](https://threejs.org/) - JavaScript 3D library.
    *   [three-globe](https://www.npmjs.com/package/three-globe) - A globe visualization library based on Three.js.
*   **AI Integration**:
    *   [AI SDK](https://sdk.vercel.ai/docs/overview) - Vercel's AI SDK for building AI-powered applications.
    *   [OpenAI](https://openai.com/) - Official OpenAI API client.
*   **Date & Time Utilities**:
    *   [date-fns](https://date-fns.org/) - Modern JavaScript date utility library.
    *   [Day.js](https://day.js.org/) - Fast 2KB alternative to Moment.js with the same modern API.
*   **Animation**:
    *   [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
*   **Carousel**:
    *   [Embla Carousel](https://www.embla-carousel.com/) - A lightweight, dependency-free, and flexible carousel library.
*   **Other UI/UX**:
    *   [Sonner](https://sonner.emilkowalski.no/) - An opinionated toast component for React.
    *   [Vaul](https://vaul.emilkowalski.no/) - Unstyled, accessible, and customizable dialogs for React.
    *   [input-otp](https://www.npmjs.com/package/input-otp) - Accessible one-time password input component.
    *   [react-resizable-panels](https://www.npmjs.com/package/react-resizable-panels) - Resizable panel components.
    *   [usehooks-ts](https://usehooks-ts.com/) - A collection of useful React hooks.

## Learn More

For more details on the underlying framework, refer to the Next.js resources:

*   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
*   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributing

Contributions are welcome! If you have suggestions for improving this project, please open an issue or submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
