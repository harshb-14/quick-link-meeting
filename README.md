<div align="center">
  <br />
    <a href="https://quick-link-meeting.vercel.app/" target="_blank">
      <img src="https://github.com/harsh3311/quick-link-meeting/assets/111215347/729a5f80-1560-40be-9914-e71e7d556302" alt="Project Banner">
    </a>
  
  <br />

  <a href="https://quick-link-meeting.vercel.app/"><h1 align="center">quick.link</h3></a>

   <div align="center">
     Connect, Collaborate, and Capture every moment with <a href="https://quick-link-meeting.vercel.app/">quick.link</a> - ultimate video calling platform.
    </div>
</div>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Here's why quick.link stands out](#why)
5. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

Built with the latest Next.js and TypeScript. Experience seamless video conferencing with Quick.Link, powered by Next.js and TypeScript for secure, real-time communication and effortless meeting management. Join, schedule, and record with ease – no downloads required!

Let's Connect

<a href="https://linkedin.com/in/harshb14" target="_blank"><img src="https://github.com/harsh3311/quick-link-meeting/assets/111215347/7d7a2813-85d7-472e-a2d7-5945b8dfe7f3" width="100px"/></a>


## <a name="tech-stack">Tech Stack</a>

- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS
  

## <a name="features">Features</a>

👉 **Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods. Ensures appropriate access levels and permissions within the platform, safeguarding user data and privacy.

👉 **Instant Meeting**: Quickly start a new meeting, configuring camera and microphone settings before joining. Our intuitive interface ensures a seamless setup process for immediate video calls.

👉 **Schedule Future Meetings**: Input meeting details (date, time) to schedule future meetings. These meetings are accessible on the 'Upcoming Meetings' page, where you can share the link or start the meeting immediately. Plan ahead with ease.

👉 **Past Meetings List**: Access a list of previously held meetings, including details and metadata. Keep track of all your video meetings for future reference.

👉 **View Recorded Meetings**: Access recordings of past meetings for review or reference. Never miss important details from your meetings with free recording access.

👉 **Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others. Facilitate quick and easy meetings with a personalized touch.

👉 **Join Meetings via Link**: Easily join meetings created by others by providing a link. Simplifies the process of joining meetings without the need for complex setup or additional downloads.

👉 **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions. Enjoy a consistent and intuitive interface on any device.


## <a name="why">Here's why quick.link stands out</a>

👉 **Memorable Meeting IDs**: Our platform generates easy-to-remember meeting IDs in the format ABCD-EFGH-IJKL, enhancing user convenience.

👉 **Personal Meeting IDs**: Receive a unique personal meeting ID that you can share with anyone for quick access to your meetings, streamlining the invitation process.

👉 **No Download Required**: Start your meetings without any delay or the need to download any application, providing instant connectivity.

👉 **Free Recording Access**: Record your meetings for free and view them anytime, ensuring you never miss important details.


## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/harsh3311/quick-link-meeting.git
cd quick-link-meeting
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & getstream credentials. You can obtain these credentials by signing up on the [Clerk website](https://clerk.com/) and [getstream website](https://getstream.io/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="links">Links</a>

Deployment of the project can be found [here](http://quick-link-meeting.vercel.app)

#
