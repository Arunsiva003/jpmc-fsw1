//  import {SiOpenaigym} from "react-icons/si"

import Image1 from  "./images/course1.jpg"
import Image2 from  "./images/course2.jpg"
import Image3 from  "./images/course3.jpg"


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
   
    {
        name: "Programs",
        path: '/programs'
    },
    {
        name: "Stories",
        path: '/stories'
    },

    {
        name: "Volunteer",
        path: '/volunteer'
    },
    {
        name: "Donate",
        path: '/donate'
    },
   
    {
        name: "Contact",
        path: '/contact'
    },
  
]



export const programs = [
    {
    id: 1,
    image : <img src={Image1} alt="Ignite Program" />,
    title: "Ignite Program",
    info: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed cupiditate reiciendis debitis commodi quo perspiciatis.",
    path: "/programs/111"
    },
    {
        id: 2,
        image : <img src={Image2} alt="Catalyst Program" />,
        title: "Catalyst Program",
        info: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed cupiditate reiciendis debitis commodi quo perspiciatis.",
        path: "/programs/222"
    },
    {
        id: 3,
        image : <img src={Image3} alt="Leadership Development" />,
        title: "Leadership Development",
        info: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed cupiditate reiciendis debitis commodi quo perspiciatis.",
        path: "/programs/333"
    },
 
]



export const faqs = [
    {
        id: 1,
        question: "What kind of volunteering opportunities does Bhumi offer?",
        answer: "Bhumi offers a wide range of volunteering opportunities, from teaching English and computer skills to environmental conservation and community development projects. Our goal is to empower individuals to contribute positively to society and foster a culture of giving back."
    },
    {
        id: 2,
        question: "What age group can volunteer with Bhumi?",
        answer: "Bhumi welcomes volunteers of all ages. We believe that everyone has something valuable to offer, regardless of their age. Whether you're a student looking to gain experience or a professional seeking to give back to the community, Bhumi has opportunities for you."
    },
    {
        id: 3,
        question: "How long are the volunteering sessions?",
        answer: "Our volunteering sessions vary in length depending on the project. Some may last for a few hours, while others may span over several weeks or months. We encourage volunteers to commit to the duration of the project to maximize their impact."
    },
    {
        id: 4,
        question: "Do I need prior experience to volunteer with Bhumi?",
        answer: "No prior experience is required to volunteer with Bhumi. We provide training and support to help you get started. Our focus is on personal growth and learning, so even if you're new to volunteering, you can make a significant contribution."
    },
    {
        id: 5,
        question: "Can I volunteer for multiple projects at once?",
        answer: "While we encourage commitment to a single project to ensure consistency and effectiveness, we understand that volunteers may have multiple interests. Please discuss your availability and interest in multiple projects with our team to explore possibilities."
    },
    {
        id: 6,
        question: "Does Bhumi offer any free volunteering opportunities?",
        answer: "Yes, Bhumi offers several free volunteering opportunities throughout the year. These opportunities are designed to be accessible to everyone, regardless of their financial situation. Check our website regularly for updates on available free opportunities."
    },
    {
        id: 7,
        question: "Does Bhumi provide any discounts for volunteers?",
        answer: "As a non-profit organization, Bhumi operates on donations and grants. While we do not offer direct discounts, we appreciate the value of your time and efforts. Your contributions help us continue our work, and we strive to provide meaningful experiences for all volunteers."
    },
    {
        id: 8,
        question: "Are Bhumi's volunteers trained before starting their projects?",
        answer: "Absolutely Bhumi provides comprehensive training for all volunteers before they start their projects. This ensures that volunteers are equipped with the necessary skills and knowledge to make a positive impact."
    },
    {
        id: 9,
        question: "Is there a registration fee to volunteer with Bhumi?",
        answer: "Bhumi does not charge a registration fee for volunteering. However, we ask for a small donation to support our operations and the projects we undertake. Your donation helps us continue providing high-quality volunteering experiences."
    },
    {
        id: 10,
        question: "Can I connect with my tutor or mentor through video chat?",
        answer: "Yes, Bhumi encourages open communication between volunteers and mentors. Depending on the project and the availability of mentors, video chats or virtual meetings may be arranged to facilitate better understanding and collaboration."
    }
]




export const testimonials = [
    {
    id: 1,
    name: "Diana Ayi",
    

    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam molestiae voluptatibus animi alias voluptatem amet. Vero vitae, magni minima quia ducimus ea ab facilis repellat illo voluptates? Vitae, mollitia. ",
    job: "Student",
    avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vince", 
       quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam molestiae voluptatibus animi alias voluptatem amet. Vero vitae, magni minima quia ducimus ea ab facilis repellat illo voluptates? Vitae, mollitia. ",
        job: "Mentor",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Eden Quisi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam molestiae voluptatibus animi alias voluptatem amet. Vero vitae, magni minima quia ducimus ea ab facilis repellat illo voluptates? Vitae, mollitia. ",
        job: "Tutor",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Willams Joe",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam molestiae voluptatibus animi alias voluptatem amet. Vero vitae, magni minima quia ducimus ea ab facilis repellat illo voluptates? Vitae, mollitia. ",
        job: "Volunteer",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Grace Lavoe",

        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam molestiae voluptatibus animi alias voluptatem amet. Vero vitae, magni minima quia ducimus ea ab facilis repellat illo voluptates? Vitae, mollitia. ",
        job: "Coordinator",
        avatar: require("./images/avatar5.jpg")
    },
    {
        id: 6,
        job: "Volunteer",

        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam molestiae voluptatibus animi alias voluptatem amet. Vero vitae, magni minima quia ducimus ea ab facilis repellat illo voluptates? Vitae, mollitia. ",
        job: "Graphics Designers",
        avatar: require("./images/avatar1.jpg")
    }
]