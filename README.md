Donify
Donify is a web application designed to help people find blood donors quickly during emergencies. It replaces unorganized methods like phone calls and WhatsApp messages with a simple and structured system where blood requests can be posted and matched with donors in the same city.


Overview
In emergency situations, time is critical. Donify aims to reduce delays by creating a centralized platform where patients or their families can post blood requirements and connect with available donors more efficiently.
The application focuses on simplicity, clarity, and real-world usefulness.


Problem
Currently, there is no reliable and structured way to find blood donors quickly.
Common issues include:
Dependence on personal contacts
Random forwarding of messages in WhatsApp groups
No guarantee that the request reaches the right donor
Time wasted during critical situations
This makes the process stressful and often ineffective.


Solution
Donify provides a simple two-part system:

1. Blood Request Board
Users can post blood requirements with details such as:
Blood group
Units required
Hospital name
City
Contact number
Urgency level
These requests are displayed in a clear and filterable format.

2. Donor Registry
Donors can register by providing:
Name
Blood group
City
Phone number
Last donation date
The system keeps track of donor availability and basic details.


Core Functionality
Matching System:
When a request is posted:
Donors are filtered based on blood group and city
The system identifies matching donors
It highlights donors who are currently eligible

Eligibility Logic:
Blood donation requires a minimum gap of 56 days.
If the last donation was more than 56 days ago → donor is eligible
If not → the system shows when the donor will be eligible
This adds a practical, real-world constraint to the application.


How It Works
A user posts a blood request
Donors are already registered in the system
The application filters donors based on:
Blood group
City
Eligibility
Matching donors are displayed instantly


Project Structure (Planned)
App
├── Navbar
├── HomePage
├── RequestBoard
│   ├── FilterBar
│   ├── RequestCard
│   └── PostRequestForm
├── DonorRegistry
│   ├── RegisterDonorForm
│   ├── DonorCard
│   └── SearchDonors
└── MatchFinder


Design Approach
Simple and clean interface
Focus on usability during emergencies
Clear separation between requests and donors
Minimal steps for posting and searching


Limitations
Uses local storage for data (no backend)
Data is limited to a single device/session
No real-time communication between users


Future Improvements
Backend integration for real-time data
Notifications for matching donors
Location-based filtering
User authentication and verification
Integration with hospitals or blood banks


Conclusion:
Donify focuses on solving a real-world problem with a simple and practical approach. The project demonstrates how a basic system can improve response time and organization in emergency situations.


Authors:
Ashima Bansal
Siddhant Srivastava
Priyal Tayal
