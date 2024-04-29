import React from 'react';
import './About.css';
import Omoss from './Omoss.png';

const About = () => (
    <div className="AboutContainer">
        <div className="about-content">
            <div className="about-image">
                <img src={Omoss} alt="About Us" />
            </div>
            <div className="about-text">
                <h1>About us</h1>
                <p>
                    TaskTrack is the ultimate tool for organizing your tasks and boosting your productivity! At TaskTrack, we understand the importance of staying organized and focused in today's fast-paced world. That's why we've created a seamless platform that empowers you to create and manage your to-do lists effortlessly.
                </p>
                <p>
                    Our mission is simple: to provide you with a user-friendly and intuitive interface that makes task management a breeze. Whether you're juggling work projects, personal commitments, or simply trying to stay on top of your daily errands, TaskTrack is here to help you stay organized and accomplish more, every day.
                </p>
                <p>
                    What sets us apart? With TaskTrack, you'll enjoy:
                </p>
                <ul>
                    <li>Customizable Lists: Tailor your to-do lists to fit your unique needs and preferences.</li>
                    <li>Priority Settings: Easily prioritize tasks to focus on what matters most.</li>
                    <li>Reminders and Notifications: Stay on track with timely reminders and notifications.</li>
                    <li>Collaboration: Share lists with friends, family, or colleagues for seamless collaboration.</li>
                    <li>Cross-Platform Accessibility: Access your tasks anytime, anywhere, across all your devices.</li>
                </ul>
                <p>
                    Whether you're a busy professional, a student with a hectic schedule, or anyone looking to streamline their daily tasks, TaskTrack is the perfect companion for achieving your goals and staying organized.
                </p>
                <p>
                    Join the thousands of users who have already transformed the way they manage their tasks. Experience the power of TaskTrack today and take control of your productivity like never before!
                </p>
            </div>
        </div>
    </div>
);

export default About;
